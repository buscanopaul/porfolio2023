'use client';

interface Props {
  onClick: () => void;
  children: React.ReactElement<Element>;
}

function Filter(props: Props) {
  const { onClick, children } = props;

  return (
    <button onClick={onClick} className="mx-3">
      {children}
    </button>
  );
}

export default Filter;
