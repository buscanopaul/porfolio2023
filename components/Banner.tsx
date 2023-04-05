import Image from 'next/image';

function Banner() {
  return (
    <div className="pt-14 bg-[#F7EAE2]">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-center leading-tight max-w-screen-sm mx-auto px-4">
          Paul Buscano is a web and mobile app developer
        </h1>
        <p className="text-center text-sm pt-5">
          4 years WordPress
          <br />2 years react-native
          <br />9 months iOS/Swift/SwiftUI.
          <br />
          Started learning NextJS
          <br />
          This Website is powered by NextJS, tailwind, vercel, Sanity CMS
          <br />
          Manila based.
        </p>
        <Image
          className=""
          src={require('../public/photo.png')}
          width={500}
          height={500}
          alt="Paul"
        />
      </div>
    </div>
  );
}

export default Banner;
