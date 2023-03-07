import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import { RichTextComponents } from './RichTextComponents';

type Props = {
  image: object;
  duration: string;
  company: string;
  description: Block[];
  position: string;
  link: string;
  key: string;
};

function ExperienceItem({
  image,
  duration,
  company,
  description,
  position,
  link,
  key,
}: Props) {
  return (
    <div className="relative mb-10" key={key}>
      <div className="flex justify-between items-start">
        <Link
          href={`${link}`}
          target="_blank"
          className="rounded-full w-10 h-10 mb-4 bg-white"
        >
          <Image
            className="object-cover object-center rounded-full"
            width={40}
            height={40}
            src={urlFor(image).url()}
            alt="logo company"
          />
        </Link>
      </div>
      <h4 className="">{company}</h4>
      <h6 className="text-xs mb-2 text-gray-600">{position}</h6>
      <p className="text-gray-400 text-sm mb-3">{duration}</p>
      <div className="text-sm mb-5">
        <PortableText value={description} components={RichTextComponents} />
      </div>
      <Link
        href={`${link}`}
        target="_blank"
        className="flex items-center text-xs text-gray-400"
      >
        <p>See Website</p>
        <FontAwesomeIcon
          className="h-3 w-3 ml-2 text-gray-400"
          icon={faArrowTrendUp}
        />
      </Link>
    </div>
  );
}

export default ExperienceItem;
