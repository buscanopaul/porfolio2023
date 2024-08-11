import Link from "next/link";
import PostAttributesItem from "./PostAttributesItem";

type Props = {
  post: Post;
};

function PostAttributes({ post }: Props) {
  return (
    <div className="lg:w-2/5 flex">
      <div className="flex flex-col">
        <PostAttributesItem title="Project">{post.title}</PostAttributesItem>
        <PostAttributesItem title="Tech Stack">
          {post.author.name}
        </PostAttributesItem>
        <PostAttributesItem title="Company">{post.company}</PostAttributesItem>
        <PostAttributesItem title="Published">Published</PostAttributesItem>
      </div>
      <div className="flex flex-col">
        <div className="relative p-8">
          <h2 className="text-2xl">Repo</h2>
          {post?.repo ? (
            <Link
              className="text-blue-500 font-bold"
              href={post.repo}
              target="_blank"
            >
              Link
            </Link>
          ) : (
            <p className="text-gray-500">Private/Not Available</p>
          )}
        </div>
        {post.isRelease && (
          <div className="relative p-8">
            <h2 className="text-2xl">Live</h2>
            <div>
              {post?.categories[0]?.title === "mobile" ? (
                <>
                  {post?.android && (
                    <Link
                      className="text-blue-500 font-bold mr-2"
                      href={post.android}
                      target="_blank"
                    >
                      Android
                    </Link>
                  )}

                  {post?.ios && (
                    <Link
                      className="text-blue-500 font-bold"
                      href={post.ios}
                      target="_blank"
                    >
                      iOS
                    </Link>
                  )}
                </>
              ) : (
                <Link
                  className="text-blue-500 font-bold"
                  href={post.web}
                  target="_blank"
                >
                  Web
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostAttributes;
