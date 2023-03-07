import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import PostAttributes from '../../../../components/PostAttributes';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
         *[_type=='post' && slug.current == $slug][0]
         {
            ...,
            author->,
            categories[]->
         }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <div className="relative max-w-screen-xl mx-auto pt-10">
      <Link
        href="/post"
        className="flex items-start group mb-3 max-w-screen-xl px-5"
      >
        <FontAwesomeIcon
          className="h-5 w-5 ml-1 text-black group-hover:text-[#0057FF] transition"
          icon={faArrowLeftLong}
        />
        <h2 className="pl-2 group-hover:text-[#0057FF] transition">
          All Works
        </h2>
      </Link>
      <section className="lg:flex items-center mb-10">
        <div className="bg-[#B16DEB] lg:w-3/5 flex items-center justify-center py-10 rounded-[50px]">
          <Image
            className="object-cover object-center md:mb-14 mb-0"
            src={urlFor(post.mainImage).url()}
            width={500}
            height={500}
            alt="showcase"
          />
        </div>
        <PostAttributes post={post} />
      </section>
      <section>
        <div className="text-center max-w-screen-md mx-auto px-7 mb-10">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </section>
      {post?.secondaryImage && (
        <section className="flex items-center justify-center">
          <Image
            className="object-cover object-center mt-10 shadow-lg mb-20"
            src={urlFor(post.secondaryImage).url()}
            width={900}
            height={500}
            alt="showcase"
          />
        </section>
      )}
    </div>
  );
}

export default Post;
