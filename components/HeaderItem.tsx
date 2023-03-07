type Props = {
  children: string;
  link: string;
};

function HeaderItem({ children, link }: Props) {
  return (
    <a href={`${link}`} className="px-5">
      <p className="text-sm">{children}</p>
    </a>
  );
}

export default HeaderItem;
