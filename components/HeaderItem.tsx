type Props = {
  children: string;
  link: string;
};

function HeaderItem({ children, link }: Props) {
  return (
    <a
      href={`${link}`}
      className="px-5 md:pt-0 pt-5 hover:bg-black hover:text-white transition ease-in-out rounded-full"
    >
      <p className="text-sm">{children}</p>
    </a>
  );
}

export default HeaderItem;
