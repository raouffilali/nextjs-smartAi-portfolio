import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/me.jpg";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Abderraouf FILALI - Ai Portfolio ",
};

export default function Home() {
  return (
    <section className="space-y-40 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8 ">
      <section className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 ">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">
            Hi, I&apos;m Abderraouf 👋{" "}
          </H1>
          <p className="text-center sm:text-start ">
            I&apos;m a full-stack developer from Algeria who build cool projects
            and makes some videos about tech field
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src={me}
            alt="A picture of me 😎"
            height={300}
            width={300}
            className="aspect-auto rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>

      <section className="space-y-3 text-center">
        <H2>Ask the chatbot &quot;Mixy&quot; about me </H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar
          to activate the AI chat. You can ask Mixy any question about me and it
          will find the relevent info on this website. The bot can even provides
          links to pages you&apos;re looking
        </p>
      </section>
    </section>
  );
}
