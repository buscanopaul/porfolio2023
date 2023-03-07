import Image from "next/image";
import Button from "./Button";

function Cta() {
  return (
    <div className="md:h-screen p-10 mb-10 bg-[#0057FF] bg-[url('../public/bg_cta.png')] bg-cover bg-center bg-no-repeat relative max-w-screen-xl mx-auto rounded-[50px] flex flex-col items-center text-white text-center justify-center">
      <Image
        className="object-contain object-center h-32 mb-5"
        src={require("../public/img_paul.jpg")}
        alt="Paul"
      />
      <p className="text-sm mb-10">Can't Wait?</p>
      <h1 className="text-4xl max-w-xl mb-7">Let's Build Together</h1>
      <p className="text-sm max-w-lg mb-8">
        Transforming Ideas into Innovative Solutions. Ready to Bring Your Vision
        to Life? Let's Connect and Get Started!
      </p>
      <a href="#contact">
        <Button btnColor="bg-black">Lesgo!</Button>
      </a>

      <Image
        className="hidden lg:block object-contain object-center h-60 absolute bottom-20 left-0 -rotate-12"
        src={require("../public/img_left.png")}
        alt="Paul"
      />
      <Image
        className="hidden xl:block object-contain object-center absolute right-24 bottom-0"
        src={require("../public/img_right.png")}
        alt="Lorenz"
      />
    </div>
  );
}

export default Cta;
