import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import Link from 'next/link';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Contact from '../../components/Contact';
import Cta from '../../components/Cta';
import Experiences from '../../components/Experiences';
import LatestMobile from '../../components/LatestMobile';
import LatestWeb from '../../components/LatestWeb';
import OtherWork from '../../components/OtherWork';
import PreviewBlogList from '../../components/PreviewBlogList';
import PreviewSuspense from '../../components/PreviewSuspense';
import Social from '../../components/Social';
import { client } from '../../lib/sanity.client';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(publishedAt desc)
`;

const queryExperience = groq`
  *[_type=='experience'] {
    ...,
  } | order(publishedAt desc)
`;

export const revalidate = 30;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-black">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  const resMobile: Post[] = [];
  const resWeb: Post[] = [];

  // seperate web and mobile objects
  const filterMobile = posts.map((post: Post) => {
    post.categories.map((category) => {
      if (category.title === 'mobile') {
        resMobile.push(post);
      } else {
        resWeb.push(post);
      }
    });
  });

  const removeFirstMobile = resMobile.slice(1);
  const removeFirstWeb = resWeb.slice(1);

  // concat 2 arrays
  const listWithoutFirst = removeFirstMobile
    .concat(removeFirstWeb)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  const experiences = await client.fetch(queryExperience);

  const recentPosts = listWithoutFirst.slice(0, 6);

  return (
    <div>
      <Banner />
      <Experiences experiences={experiences} />
      <LatestWeb post={resWeb[0]} />
      <Cta />
      <LatestMobile post={resMobile[0]} />
      <OtherWork posts={recentPosts} />
      <div className="relative flex justify-center items-center mx-auto mt-10">
        <Link href="/post">
          <Button btnColor="bg-[#0057FF]">All Works</Button>
        </Link>
      </div>
      <Social />
      <Contact />
    </div>
  );
}

export default HomePage;
