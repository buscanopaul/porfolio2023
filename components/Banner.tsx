import Image from "next/image";

function Banner() {
  return (
    <div className="pt-14 bg-[#F7EAE2] h-screen">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl lg:text-5xl text-center leading-tight max-w-screen-sm mx-auto px-4">
          Paul Buscano is a front-end web and mobile developer
        </h1>
        <Image
          className="lg:-bottom-38 -bottom-40 absolute"
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
