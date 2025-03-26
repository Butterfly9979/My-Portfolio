import BoxReveal from "@/components/ui/box-reveal";
import Ruis from "../../public/RuisSander.jpg";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

/* eslint-disable react/no-unescaped-entities */
export const ContentUs = () => {
  return (
    <div className="relative flex flex-col-reverse rounded-xl py-16 my-20 pt-20 lg:dark:bg-slate-900 lg:bg-slate-100 lg:pt-0 lg:flex-col lg:pb-0">
      <BackgroundBeams />
      <div className="inset-y-0 top-0 right-0 z-0 w-full  rounded-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full z-10 dark:text-slate-900 text-slate-100 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          width={500}
          height={500}
          className="object-cover z-50 overflow-hidden w-full h-56 rounded-xl shadow-lg lg:shadow-none md:h-96 lg:h-full"
          placeholder="blur"
          src={Ruis}
          alt="Ruis Sander Images"
        />
      </div>

      <div className="relative flex flex-col items-start w-full z-10  mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 z-10">
          <BoxReveal boxColor={"#6366f1"} duration={0.5}>
            <p className="text-[2rem] font-semibold rounded-lg">
              About Me<span className="text-[#6366f1]">.</span>
            </p>
          </BoxReveal>
          <p className="pr-5 mb-5 text-base dark:text-gray-200 text-slate-900 md:text-lg">
            Hi, I'm{" "}
            <span className="text-xl font-bold md:text-2xl text-indigo-500">
              {" "}
              Ruis Sander
            </span>
            I am a full-stack developer with a deep passion for programming.
            Since I was a child, I have been fascinated by the world of technology and have found joy in solving problems and creating innovative solutions.
            My love of coding led me to pursue a degree in Computer Science, where I honed my skills and built a strong foundation in software development.

            Programming is not just a job for me; it is a passion, an outlet for my creativity, and a driving force of my ambition.
            Every line of code I write brings me closer to new challenges, learning opportunities, and personal growth.

            My goals are to continuously improve my skills, build impactful applications, and contribute to the ever-evolving field of technology.
            I strive for excellence in every project, and aim to create solutions that are not only efficient but also meaningful.
            I aspire to shape the future through programming, drive innovation, and brighten my journey in the world of technology.
          </p>
          <div className="flex items-center z-10">
            <Link href="/contact">
              <ShinyButton>Contact Me</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
