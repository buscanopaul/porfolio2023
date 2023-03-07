import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import Button from './Button';
import ClientSideRoute from './ClientSideRoute';
import { RichTextComponents } from './RichTextComponents';

type Props = {
  post: Post;
};

function OtherWorkItem({ post }: Props) {
  return (
    <div
      className={`transition relative rounded-3xl p-10 mb-5 justify-between flex flex-col items-center text-center`}
      key={post._id}
    >
      <div className="flex items-start mb-8">
        <Image
          className="object-contain object-center"
          src={urlFor(post.author.image).url()}
          width={40}
          height={40}
          alt="stack"
        />
        <div className={`text-sm pl-3 text-left`}>
          <p>{post.author.name}</p>
          <p className="w-15">{post.company}</p>
        </div>
      </div>
      <h3 className="text-2xl mb-3">{post.title}</h3>
      <div className="text-sm mb-10 line-clamp-2 max-w-lg">
        <PortableText value={post.excerpt} components={RichTextComponents} />
      </div>
      <ClientSideRoute route={`post/${post.slug.current}`}>
        <Button btnColor="bg-black">See More</Button>
      </ClientSideRoute>
      <Image
        className="object-contain object-center pt-10 relative"
        src={urlFor(post.mainImage).url()}
        width={500}
        height={500}
        alt="work"
      />
    </div>
  );
}

export default OtherWorkItem;
