import { skills } from "../../contants/data";
import Heading from "../../ui/Heading";
import SectionContainer from "../../ui/SectionContainer";

function Skills() {
  return (
    <SectionContainer styles={"flex flex-col items-center"}>
      <Heading>My Skills</Heading>
      <p className="mt-5">
        Technologies and tools I use to bring ideas to life
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-5 ">
        <>
          {skills.map(({ name, level, background }, index) => (
            <li
              key={name}
              className="w-full px-5 py-6 bg-gray-800/50 rounded-xl list-none"
            >
              <div className="flex justify-between">
                <p>{name}</p>
                <span>{level}%</span>
              </div>
              <div className={`w-full h-3 rounded-full bg-slate-400/50`}>
                <div
                  style={{ width: `${level}%` }}
                  className={` h-full ${background} rounded-lg`}
                ></div>
              </div>
            </li>
          ))}
        </>
      </div>
    </SectionContainer>
  );
}

export default Skills;
