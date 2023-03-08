'use client';

import { useState } from 'react';
import Button from './Button';
import Filter from './Filter';
import OtherWorkItem from './OtherWorkItem';

type Props = {
  posts: Post[];
  isActive?: boolean;
};

function OtherWork({ posts, isActive }: Props) {
  const [web, setWeb] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleWeb = () => {
    if (web) {
      setWeb(false);
    } else {
      setWeb(true);
      setMobile(false);
    }
  };

  const handleMobile = () => {
    if (mobile) {
      setMobile(false);
    } else {
      setWeb(false);
      setMobile(true);
    }
  };

  const resMobile: Post[] = [];
  const resWeb: Post[] = [];

  posts.map((post: Post) => {
    post.categories.map((category) => {
      if (category.title === 'mobile') {
        resMobile.push(post);
      } else {
        resWeb.push(post);
      }
    });
  });

  const filterResponses =
    web && !mobile ? resWeb : !web && mobile ? resMobile : posts;

  return (
    <div>
      {isActive && (
        <div className="flex items-center justify-center mb-6">
          <Filter onClick={handleWeb}>
            <Button
              btnColor={web ? 'bg-[#1A2B56]' : 'bg-black'}
              hideIcon={true}
            >
              Web
            </Button>
          </Filter>
          <Filter onClick={handleMobile}>
            <Button
              btnColor={mobile ? 'bg-[#1A2B56]' : 'bg-black'}
              hideIcon={true}
            >
              Mobile
            </Button>
          </Filter>
        </div>
      )}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 [&>*:nth-child(odd)]:text-white [&>*:nth-child(1n)]:bg-[#AC2319] [&>*:nth-child(2n)]:bg-white [&>*:nth-child(3n)]:bg-[#DE7D2E] [&>*:nth-child(4n)]:bg-[#EEEEEE] [&>*:nth-child(5)]:bg-[#1A2B56] [&>*:nth-child(6n)]:bg-white">
        {filterResponses.map((filterResponse) => (
          <>
            <OtherWorkItem post={filterResponse} />
          </>
        ))}
      </div>
    </div>
  );
}

export default OtherWork;
