import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
  type: string;
  title: string;
  textColor?: string;
  post?: Post;
};

function LatestAttributesItem({ title, type, textColor, post }: Props) {
  return (
    <div className="flex items-start justify-center lg:mb-0 mb-10">
      {type.toLocaleLowerCase() === "published" ||
      type.toLocaleLowerCase() === "company" ? (
        <Image
          className="object-contain object-center h-10 w-10 "
          src={require(`../public/logo_${
            type.toLocaleLowerCase() == "published" ||
            type.toLocaleLowerCase() == "company"
              ? textColor
                ? `${type.toLocaleLowerCase() + "_mobile"}`
                : type.toLocaleLowerCase()
              : title.toLocaleLowerCase()
          }.png`)}
          alt="logo web"
        />
      ) : (
        <Image
          className="object-contain object-center h-10 w-10"
          src={urlFor(post?.author.image).url()}
          width={40}
          height={40}
          alt="mobile"
        />
      )}
      <div className={`text-sm pl-3 ${textColor ? textColor : "text-black"}`}>
        <p className="font-bold">{type}</p>
        <p className="w-15">{title}</p>
      </div>
    </div>
  );
}

export default LatestAttributesItem;
