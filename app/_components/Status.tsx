/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  SideProjectsProps,
  WorkProps,
  ContactMeProps,
} from "../types/myTypes.ts";
export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 ">
      <Card className="flex-[3] w-full p-4 flex flex-col gap-4">
        <p className="text-lg text-muted-foreground">Mes projets</p>
        <div className="flex flex-col gap-4">
          {SIDE_PROJECTS.map((project) => (
            <SideProject
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expérience</p>
          <div className="flex flex-col gap-4">
            {WORK.map((work) => (
              <Work
                key={work.title}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
                image={work.image}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez moi</p>
          {ContactMe.map((contact) => (
            <ContactMeCard
              key={contact.name}
              name={contact.name}
              image={contact.image}
              mediumImage={contact.mediumImage}
              description={contact.description}
            />
          ))}
        </Card>
      </div>
    </Section>
  );
};

const ContactMe: ContactMeProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGxPFllwoB1Dw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726680012022?e=1737590400&v=beta&t=GENazGKKIvMnt8ZAiwkZQt_QGA5HwFZzUV9k5GAL2bY",
    mediumImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    name: "Christevie Ikonga",
    description: "Concepteur logiciel & penstester",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1208520259969400832/2JMdFjiD_400x400.jpg",
    mediumImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png",
    name: "+212 618 603 453",
    description: "Concepteur logiciel & penstester",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1208520259969400832/2JMdFjiD_400x400.jpg",
    mediumImage:
      "https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png",
    name: "christikonga83@gmail.com",
    description: "Concepteur logiciel & penstester",
  },
];
const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    title: "Peruzzo Group",
    url: "https://peruzzo-group.com/",
    description: "Peruzzo Group Spécialiste des fruits et légumes de qualité",
  },
  {
    title: "Advensus",
    url: "https://github.com/theRealIdc",
    description: "Site de formation en ligne",
  },
  {
    title: "IDC",
    url: "https://github.com/theRealIdc",
    description: "Site personnel",
  },
];

const WORK: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGAn1_IaZWKyg/company-logo_200_200/company-logo_200_200/0/1630483326430?e=1740614400&v=beta&t=nBHcLOMZ-IcgAdQydkgPW8G3zMY1wp4jZf9Tvvw8JX8",
    title: "Peruzzo Group",
    url: "https://peruzzo-group.com/",
    role: "Concepteur logiciel & pentester",
    date: "août 2023 - aujourd'hui",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQHxjqsIa6MDUQ/company-logo_200_200/company-logo_200_200/0/1724261514418/ucx_digital_logo?e=1740614400&v=beta&t=CkF49WmIaEu33MxO9Y2oKQwEledCKAvXAvnsgqUPY-I",
    title: "UCX DIGITAL",
    url: "https://ucx-digital.com/",
    role: "Developpeur Backend - NestJS",
    date: "févr. 2023 - sept. 2023",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGxOu2y7Qbarw/company-logo_200_200/company-logo_200_200/0/1630513355869?e=1740614400&v=beta&t=91blbnuWbbci1nLSJ6EZqZrnpxVraZ7-VdxJMwezJpY",
    title: "Advensus",
    url: "https://github.com/theRealIdc",
    role: "Concepteur logiciel & pentester",
    date: "janv. 2022 - déc. 2022",
  },
];

const SideProject = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
    >
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-8 h-8 object-contain rounded-md"
      />
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-muted-foreground">{props.date}</p>
    </Link>
  );
};

const ContactMeCard = (props: ContactMeProps) => {
  return (
    <Card className="p-3 hover:bg-accent/30 transition-colors group  bg-accent/10 flex items-center gap-4 space-y-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-2 -right-2"
        />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.name}</p>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      {/* <ArrowUpright size={16} /> */}
    </Card>
  );
};
