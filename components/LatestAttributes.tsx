import Button from "./Button";
import ClientSideRoute from "./ClientSideRoute";
import LatestAttributesItem from "./LatestAttributesItem";

type Props = {
  className: string;
  textColor?: string;
  color?: string;
  stack: string;
  published: string;
  company: string;
  post: Post;
};

function LatestAttributes({
  className,
  textColor,
  color,
  stack,
  published,
  company,
  post,
}: Props) {
  return (
    <div
      className={`${className} relative w-full lg:rounded-full rounded-lg flex flex-col md:items-center items-start lg:flex-row justify-between p-10`}
    >
      <LatestAttributesItem
        post={post}
        title={stack}
        type="Tech Stack"
        textColor={textColor}
      />
      <LatestAttributesItem
        title={published}
        type="Published"
        textColor={textColor}
      />
      <LatestAttributesItem
        title={company}
        type="Company"
        textColor={textColor}
      />
      <ClientSideRoute route={`post/${post.slug.current}`}>
        <Button btnColor={color}>See More</Button>
      </ClientSideRoute>
    </div>
  );
}

export default LatestAttributes;
