import { FaLocationDot } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

import Button from "../../ui/Button";
import { socialLinks } from "../../contants/data";
import SectionContainer from "../../ui/SectionContainer";

function Hero() {
  return (
    <SectionContainer id="hero" styles="flex flex-col items-center">
      {/* location */}
      <p className="flex items-center gap-2 tracking-widest text-teal-100 mb-5">
        <FaLocationDot className="text-teal-600 " /> Kolkata, India
      </p>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-5xl">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-500 to-teal-500  bg-clip-text text-transparent font-semibold">
            Bijeta
          </span>
        </h2>
        <p className="text-2xl">Frontend Developer</p>
        <p className="sm:text-xl text-base text-slate-400 text-center leading-8">
          Crafting scalable, interactive Web App | Passionate about clean
          <br />
          design, performance, and seamless user experiences.{" "}
        </p>
      </div>

      {/* button */}
      <div className="flex md:items-center gap-4 sm:flex-row flex-col mt-10">
        {socialLinks.map(({ name, icon, url, background, shadowColor }) => (
          <Button
            key={name}
            icon={icon}
            link={url}
            bgColor={background}
            shadowColor={shadowColor}
          >
            {name}
          </Button>
        ))}
        <Button
          icon={FaDownload}
          bgColor="bg-orange-600"
          shadowColor={"blue-500/25"}
          styles="!hover:bg-orange-900"
        >
          Download Resume
        </Button>
      </div>
    </SectionContainer>
  );
}

export default Hero;
