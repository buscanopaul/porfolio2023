import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="relative flex flex-col items-center" id="contact">
      <h2 className="text-3xl text-center">
        Want to get in touch? <br />
        Click the emoji
      </h2>
      <Link
        href="https://mail.google.com/mail/u/0/?fs=1&su=I+Need+Developer&body=Hi+Paul,&to=buscano.paul@gmail.com&tf=cm"
        target="_blank"
      >
        <Image
          className="object-contain object-center h-full"
          src={require("../public/email.png")}
          alt="logo company"
        />
      </Link>
    </div>
  );
}

export default Contact;
