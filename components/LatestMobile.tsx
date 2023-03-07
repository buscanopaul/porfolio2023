import Image from 'next/image';
import urlFor from '../lib/urlFor';
import LatestAttributes from './LatestAttributes';
import LatestDescription from './LatestDescription';
import ShowcaseSubtitle from './ShowcaseSubtitle';
import ShowcaseTitle from './ShowcaseTitle';

type Props = {
  post: Post;
};

function LatestMobile({ post }: Props) {
  return (
    <div className="bg-[#F3E7DB] max-w-screen-xl mx-auto rounded-[50px] items-center p-10 md:p-14 relative mb-10">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-lg">
          <ShowcaseSubtitle color="text-[#2A107D]">
            LATEST MOBILE
          </ShowcaseSubtitle>
          <ShowcaseTitle color="text-[#2A107D]">{post.title}</ShowcaseTitle>
          <LatestDescription color="text-[#2A107D]" post={post} />
        </div>
        <Image
          className="object-contain object-center my-14 md:pl-20 w-full"
          src={urlFor(post.mainImage).url()}
          width={500}
          height={500}
          alt="mobile"
        />
      </div>
      <LatestAttributes
        className="bg-[#F0DBC8]"
        color="bg-[#2A107D]"
        textColor="text-[#2A107D]"
        post={post}
        stack={post.author.name}
        published={post.isRelease ? post.publishedAt.split('-')[0] : 'Soon'}
        company={post.company}
      />
    </div>
  );
}

export default LatestMobile;
