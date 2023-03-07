import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import ExperienceItem from "./ExperienceItem";

type Props = {
  experiences: Company[];
};

function Experiences({ experiences }: Props) {
  const experiencesRemoveFirst = experiences.slice(1);
  const filteredExperiences = experiencesRemoveFirst.slice(0, 6);

  return (
    <div className="bg-[#F7F7F7] py-32 relative" id="experiences">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start px-10">
          <div className="lg:w-2/5 mb-20">
            <div className="flex items-start justify-between md:max-w-[350px]">
              <Link
                href={experiences[0].companyUrl}
                target="_blank"
                className="w-10 h-10 bg-black rounded-full mb-4 relative"
              >
                <Image
                  className="object-contain object-center rounded-full"
                  src={urlFor(experiences[0].companyLogo).url()}
                  fill
                  alt="logo company"
                />
              </Link>
            </div>
            <div className="md:max-w-[350px]">
              <h3 className="text-4xl mb-3">{experiences[0].company}</h3>
              <h5 className="mb-3 text-sm">{experiences[0].jobTitle}</h5>
              <p className="text-gray-400 mb-3">{experiences[0].duration}</p>
              <p className="mb-5">
                I recently developed a mobile application using iOS Swift and
                SwiftUI, implemented the UI programmatically using UIKit, and
                wrote unit tests using iOS Swift Test. To debug network calls, I
                used Charles API Proxy and kept track of progress using Jira
                Tickets. For the backend, I utilized Firebase functions using
                ExpressJS and integrated with Azure DevOps repo. Additionally, I
                also developed a cross-platform app using React-Native and a web
                application using React and NextJS.
              </p>
            </div>
            <a
              href={experiences[0].companyUrl}
              target="_blank"
              className="flex items-center text-xs text-gray-400"
            >
              <p>See website </p>
              <FontAwesomeIcon
                className="h-3 w-3 ml-2 text-gray-400"
                icon={faArrowTrendUp}
              />
            </a>
          </div>
          <div className="lg:w-3/5 md:grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {filteredExperiences.map((filteredExperience) => (
              <ExperienceItem
                key={filteredExperience._id}
                link={filteredExperience.companyUrl}
                image={filteredExperience.companyLogo}
                duration={filteredExperience.duration}
                company={filteredExperience.company}
                position={filteredExperience.jobTitle}
                description="As a skilled React Native developer, I have implemented my own API collection using POSTMAN, utilized 3rd party npm packages, integrated react-navigation and react-native camera/gallery, applied Tailwind CSS, collaborated with backend developers, implemented Redux toolkit and authentication features like SMS OTP and Google Authenticator, and utilized Github and Microsoft app center for CI/CD, while reporting directly to the CTO and participating in weekly sprints."
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
