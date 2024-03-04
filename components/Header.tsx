import Link from "next/link";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="bg-[#F7EAE2]">
      <div className="flex justify-center align-center pt-14 pb-5 max-w-screen-xl mx-auto flex-wrap">
        <HeaderItem link="/#experiences">Experiences</HeaderItem>
        <Link href="/post" className="px-5 md:pt-0 pt-5">
          <p className="text-sm">My Works</p>
        </Link>
        <HeaderItem link="https://github.com/buscanopaul">Github</HeaderItem>
        <HeaderItem link="https://www.linkedin.com/in/paulbuscano">
          LinkedIn
        </HeaderItem>
        <HeaderItem link="/#contact">Get in touch</HeaderItem>
      </div>
    </header>
  );
}

export default Header;
