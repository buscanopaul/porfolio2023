type Props = {
  children: string;
  color?: string;
};

function ShowcaseTitle({ children, color }: Props) {
  return (
    <h1 className={`text-4xl mb-6 ${color ? color : "text-black"}`}>
      {children}
    </h1>
  );
}

export default ShowcaseTitle;
