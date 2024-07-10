import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {

  
function getSocialMediaLink(id: number) {
  switch (id) {
    case 1:
      return "https://github.com/rutikerole"; 
    case 2:
      return "https://twitter.com/your-profile"; 
    case 3:
      return "https://www.linkedin.com/in/rutik-erole-842134205/"; 
    default:
      return "#";
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[70vw]">
          Let&apos;s <span className="text-purple">Explore</span> partnerships and discuss advancing technology and innovation together.
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col justify-center items-center mt-16 p-5 ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rutik Erole
        </p>

        <div className="mt-5 flex items-center justify-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={getSocialMediaLink(info.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer;
