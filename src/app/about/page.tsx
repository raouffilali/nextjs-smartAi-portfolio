import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Abderraouf FILALI and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Abderraouf FILALI and I am a Master&apos;s degree software
          engineer and full-stack developer from Algeria. I started programming
          in 2019, at the age of 20, and since then I have spent most of my time
          creating projects and learning new things about technology 😄
        </p>
        <p>
          I&apos;m passionate about building cool apps and websites and I love
          sharing the things I learn with the tech community.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>Angular</strong>,<strong>Nest.js</strong>,
          <strong>Node.js</strong>, <strong>Flask</strong>, and{" "}
          <strong>Django</strong>.
        </p>
        <p>
          I also have some experience with Android development using Flutter,
          but have stopped working with it a few years ago. I prefer web
          development because you can use a modern website on almost every
          device and reach the whole world with it.
        </p>
        <p>
          I bring a versatile background to the table, having excelled in UI/UX
          design and web design before transitioning to full-stack development.
          My experience in crafting compelling user interfaces and seamless
          experiences has equipped me with a unique perspective. This journey
          has allowed me to seamlessly integrate design thinking into my
          development work, resulting in a holistic and effective approach to
          creating digital solutions.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/raouffilali/AcademiaPLus"
              className="text-primary hover:underline"
            >
              Academia+
            </a>{" "}
            - E-learning platform for my StartUp and Master&apos;s degree
            graduation project
          </li>
          <li>
            <Link
              href="https://github.com/raouffilali/AcadConnect-Forum"
              className="text-primary hover:underline"
            >
              AcadConnect
            </Link>{" "}
            - A forum that allows academia+ student to share their knowldge
          </li>
          <li>
            <Link
              href="https://github.com/raouffilali/AcademiaXpress-Blog"
              className="text-primary hover:underline"
            >
              AcademiaXpress
            </Link>{" "}
            - A blog website for academia+ that allows users related to the
            platform to post their blogs
          </li>
          <li>
            <Link
              href="https://github.com/raouffilali/Nexchat-pdf-SaaS"
              className="text-primary hover:underline"
            >
              Nexchat-pdf-SaaS
            </Link>{" "}
            - A website for a SaaS project that allows you to chat with your PDF
          </li>
          <li>
            <Link
              href="https://github.com/raouffilali/MeDoz-app"
              className="text-primary hover:underline"
            >
              MeDoz
            </Link>{" "}
            - A Flutter app for medicament and pharmacy
          </li>
          <li>
            <Link
              href="https://github.com/raouffilali"
              className="text-primary hover:underline"
            >
              And more you can check it on my github account ...
            </Link>{" "}
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love doing sports. I lift weights and do
          Kick-Boxing and muay thai . I also enjoy entending Tech events,
          reading books and going out sometimes. I think having hobbies other
          than coding is important for mental health.
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
        <Image
          src={bjj}
          alt="Brazilian Jiu-Jitsu group photo"
          className="rounded-md"
        />
      </section>
    </section>
  );
}