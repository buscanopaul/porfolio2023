import PostAttributesItem from './PostAttributesItem';

type Props = {
  post: Post;
};

function PostAttributes({ post }: Props) {
  return (
    <div className="lg:w-2/5 sm:flex flex-wrap lg:flex-col">
      <PostAttributesItem title="Project">{post.title}</PostAttributesItem>
      <PostAttributesItem title="Tech Stack">
        {post.author.name}
      </PostAttributesItem>

      <PostAttributesItem title="Company">{post.company}</PostAttributesItem>
      <PostAttributesItem title="Published">
        {post.isRelease ? post.publishedAt.split('-')[0] : 'Soon'}
      </PostAttributesItem>
    </div>
  );
}

export default PostAttributes;
