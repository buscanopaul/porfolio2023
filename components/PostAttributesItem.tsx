type Props = {
  title: string;
  children: string;
};

function PostAttributesItem({ title, children }: Props) {
  return (
    <div className="relative p-8">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}

export default PostAttributesItem;
