type Props = {
  children: string;
  color?: string;
};

function ShowcaseSubtitle({ children, color }: Props) {
  return (
    <h2 className={`text-2xl pt-8 mb-8 ${color ? color : "text-black"}`}>
      {children}
    </h2>
  );
}

export default ShowcaseSubtitle;
