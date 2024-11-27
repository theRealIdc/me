import { Section } from "./Section";
import { NestJsIcon } from "./icons/NestJsIcon";
import { JsIcon } from "./icons/JsIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { NextIcon } from "./icons/NextIcon";
import { LinuxIcon } from "./icons/LinuxIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { DockerIcon } from "./icons/DockerIcon";
export const Skills = () => {
  return (
    <Section className="flex flex-col gap-4">
      <p className="text-lg text-muted-foreground">Mes compétences</p>
      <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
        J&apos;aime travailler avec...
      </h2>
      <div className="py-4 sm:py-8 px-6">
        <div className="grid-cols-2 grid md:grid md:grid-cols-4 md:gap-12 gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <JsIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Javascript</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <NestJsIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold ">Nest Js</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <PythonIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Python</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <ReactIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">React</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <NextIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Next JS</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <LinuxIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Linux</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <GithubIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Github</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <DockerIcon size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Docker</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};
