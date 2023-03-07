import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import LatestAttributes from './LatestAttributes';
import { RichTextComponents } from './RichTextComponents';
import ShowcaseSubtitle from './ShowcaseSubtitle';
import ShowcaseTitle from './ShowcaseTitle';

type Props = {
  post: Post;
};

function LatestWeb({ post }: Props) {
  return (
    <div
      id="works"
      className="bg-white max-w-screen-xl mx-auto rounded-[50px] items-center flex flex-col p-10 md:p-14 relative mb-10"
    >
      <ShowcaseSubtitle>LATEST WEB</ShowcaseSubtitle>
      <div className="max-w-screen-sm mx-auto text-center">
        <ShowcaseTitle>{post.title}</ShowcaseTitle>
        <div className="md:mb-14 mb-0">
          <PortableText value={post.excerpt} components={RichTextComponents} />
        </div>
      </div>
      <Image
        className="object-contain object-center md:mb-14 mb-0"
        src={urlFor(post.mainImage).url()}
        width={500}
        height={500}
        alt="mobile"
      />
      <LatestAttributes
        className="bg-[#F8f8f8]"
        color="bg-black"
        post={post}
        stack={post.author.name}
        published={post.isRelease ? post.publishedAt.split('-')[0] : 'Soon'}
        company={post.company}
      />
    </div>
  );
}

export default LatestWeb;
