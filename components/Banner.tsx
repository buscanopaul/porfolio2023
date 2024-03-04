import Image from "next/image";

function Banner() {
  return (
    <div className="pt-14 bg-[#F7EAE2]">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-center leading-tight max-w-screen-sm mx-auto px-4">
          Paul Buscano is a front-end web and mobile developer
        </h1>
        <p className="text-center text-sm pt-5">
          4 years WordPress
          <br />3 years react-native
          <br />1 year iOS/Swift/SwiftUI.
          <br />
          1 year NextJS 13
          <br />
          1 year Shopify Hydrogen RemixJS
          <br />
          Manila based.
        </p>
        <Image
          className=""
          src={require("../public/photo.png")}
          width={500}
          height={500}
          alt="Paul"
        />
      </div>
    </div>
  );
}

export default Banner;
