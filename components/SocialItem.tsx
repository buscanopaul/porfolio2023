import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

function SocialItem({ title, link }: Props) {
  return (
    <Link
      href={`${link}`}
      target="_blank"
      className={`flex items-center text-white font-hanson text-xs rounded-full`}
    >
      <Image
        className="object-contain object-center w-10 h-10"
        src={require(`../public/icons/icon_${title}.png`)}
        alt={title}
      />
    </Link>
  );
}

export default SocialItem;
