import { PortableText } from '@portabletext/react';
import { RichTextComponents } from './RichTextComponents';

type Props = {
  color?: string;
  post: Post;
};

function LatestDescription({ color, post }: Props) {
  return (
    <div className={`md:mb-14 mb-0 ${color ? color : 'text-black'}`}>
      <PortableText value={post.excerpt} components={RichTextComponents} />
    </div>
  );
}

export default LatestDescription;
