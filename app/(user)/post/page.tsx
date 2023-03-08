import { groq } from 'next-sanity';
import OtherWork from '../../../components/OtherWork';
import { client } from '../../../lib/sanity.client';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  }| order(publishedAt desc)
`;

export const revalidate = 30;

async function page() {
  const posts = await client.fetch(query);

  return (
    <div className="max-screen-xl mx-auto py-14">
      <OtherWork posts={posts} isActive={true} />
    </div>
  );
}

export default page;
