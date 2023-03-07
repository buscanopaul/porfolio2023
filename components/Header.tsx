import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="bg-[#F7EAE2]">
      <div className="flex justify-center align-center pt-14 pb-5 max-w-screen-xl mx-auto">
        <HeaderItem link="/#experiences">Experiences</HeaderItem>
        <HeaderItem link="/#works">Recent Works</HeaderItem>
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
