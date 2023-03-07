import OtherWorkItem from './OtherWorkItem';

type Props = {
  posts: Post[];
};

function OtherWork({ posts }: Props) {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 [&>*:nth-child(odd)]:text-white [&>*:nth-child(1n)]:bg-[#AC2319] [&>*:nth-child(2n)]:bg-white [&>*:nth-child(3n)]:bg-[#DE7D2E] [&>*:nth-child(4n)]:bg-[#EEEEEE] [&>*:nth-child(5)]:bg-[#1A2B56] [&>*:nth-child(6n)]:bg-white">
        {posts.map((post) => (
          <>
            <OtherWorkItem post={post} />
          </>
        ))}
      </div>
    </div>
  );
}

export default OtherWork;
