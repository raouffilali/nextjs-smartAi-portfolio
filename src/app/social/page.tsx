import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>
          I am excited to announce that I will be branching out into content
          creation and online tutoring across various platforms. My goal is to
          share insightful and engaging content, ranging from short reels to
          longer, in-depth tutorials. These will cover a wide array of topics,
          including but not limited to, technology and design. Whether
          you&apos;re a seasoned professional looking to brush up on the latest
          trends, or a beginner seeking to learn the ropes, my content will
          provide valuable insights and practical knowledge. I look forward to
          embarking on this new journey and sharing my passion for tech and
          design with you all.
        </p>
        <p className="font-bold underline">Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.youtube.com/channel/UCIZbwTaa0TuasrZlocAqRJA"
              className="text-primary hover:underline"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/raouf.filali_/"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@creativevision1922"
              className="text-primary hover:underline"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/RAOUFFILALI3"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/abdell.fillali"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/raouffilali"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abderraouf-filali/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@filaliabderaouf54"
              className="text-primary hover:underline"
            >
              Blog
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project or get a shoutout for your
          product on my social media channels, please contact me via email at{" "}
          <a
            href="mailto:contact@abderraouf-filali.tech"
            className="text-primary hover:underline"
          >
            contact@abderraouf-filali.tech{" "}
          </a>
        </p>

      </section>
    </section>
  );
}
