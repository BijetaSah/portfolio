import { aboutSection } from "../../contants/data";
import Heading from "../../ui/Heading";
import SectionContainer from "../../ui/SectionContainer";

function About() {
  const { title, description, moreDescription, whatIDo } = aboutSection;
  return (
    <SectionContainer
      id="about"
      styles={"bg-gray-800/50 flex flex-col items-center gap-25 "}
    >
      <Heading positionLeft="left-6" width="w-24">
        {title}
      </Heading>

      {/* description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-15 gap-10 ">
        <div className="p-10 bg-slate-900 text-slate-400 flex flex-col gap-4 italic rounded-lg relative">
          <div className="absolute left-0 top-0 w-full h-full rounded-xl bg-blue-500 rotate-5 -z-10"></div>
          <p>{description}</p>
          <p>{moreDescription}</p>
        </div>

        {/* what i do  */}
        <div className="space-y-5">
          <>
            {whatIDo.map(({ icon: Icon, title, text }, index) => (
              <div key={index} className="flex items-center gap-4">
                <Icon className="bg-linear-to-br from-blue-500 via-teal-500 to-teal-500 p-4 h-15 w-15 text-white rounded-lg" />
                <div>
                  <h4 className="text-lg text-slate-50 font-semibold">
                    {title}
                  </h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
