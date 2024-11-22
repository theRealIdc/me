import { Section } from "./Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 ">
      <Card className="flex-[3] w-full p-4 flex flex-col gap-4">
        Side project
      </Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};
