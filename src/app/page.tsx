import Image from "next/image";
import { socialLinks } from "@/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I&apos;m Egor! 👋
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I&apos;m Frontend Engineer. For the past few years, I&apos;ve been working with React, TypeScript.
        </p>
        <p>
          I worked in a large product team. Before that,
          I had experience in both a startup and a e-commerce company.
          I started with projects for non-profit organizations.
        </p>
        <p>
          I am comfortable with adaptive layouts, configuring Webpack, diving into CI/CD, and writing tests.
        </p>
        <p>
          I’ve also worked with Node.js/Express.js/WebSockets. I have some mentoring experience.
        </p>
        <p>
          I value transparency, openness, and am always results-oriented in my work.
        </p>
      </div>
    </section>
  );
}
