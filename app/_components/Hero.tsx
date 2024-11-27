/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 ">
      <div className="flex-[3] w-full flex flex-col gap-4">
        <h2 className="text-5xl text-gray-300">Christevie Ikonga</h2>
        <h3 className="text-3xl text-gray-300">
          Concepteur logiciel & pentester
        </h3>
        <p className="text-gray-300">
          👨🏾‍💻 Grand passionné de l&apos;informatique, je suis{" "}
          <b className="text-white hover:text-red-500">
            développeur web & mobile💻🛠️
          </b>{" "}
          et{" "}
          <b className="text-white hover:text-red-500">pentester junior🔧🔒</b>.
          De nature curieux, j&apos;apprends et je m&apos;adapte très vite et je
          ne mets souvent pas longtemps à trouver des solutions aux problèmes.
        </p>
      </div>
      <div className="flex-[2] m-auto">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQGxPFllwoB1Dw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726680012022?e=1737590400&v=beta&t=GENazGKKIvMnt8ZAiwkZQt_QGA5HwFZzUV9k5GAL2bY"
          className="w-full h-auto rounded-full max-md:w-72"
          alt="idc"
        />
      </div>
    </Section>
  );
};
