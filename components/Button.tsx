import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: string;
  btnColor?: string;
};

function Button({ children, btnColor }: Props) {
  return (
    <div
      className={`justify-between hover:text-black hover:bg-white group transition flex flex-row items-center ${
        btnColor ? btnColor : "text-black"
      } text-white font-brutaBold text-xs px-8 rounded-full py-4`}
    >
      {children}
      <FontAwesomeIcon
        className="h-5 w-5 ml-2 text-white group-hover:text-black"
        icon={faArrowRightLong}
      />
    </div>
  );
}

export default Button;
