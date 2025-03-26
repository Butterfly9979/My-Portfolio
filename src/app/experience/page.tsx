import { Metadata } from "next";
import Experience from "./ExperiencePage";
import metaData from "@/data/metadata.json";

export const metadata: Metadata = {
  title: {
    default: "Experience",
    template: `%s - ${"Experience"}`,
  },
  description:
    "My Experience Page. I have worked on various projects, including a Real Link-Shortener, E-Commerce APIs, React-based Website Design and Development, and more.",
  keywords: metaData.keywords,
  openGraph: {
    title: "Experience Page",
    description:
      "My Experience Page. I have worked on various projects, including a Real Link-Shortener, E-Commerce APIs, React-based Website Design and Development, and more.",
    images: [
      {
        url: metaData.imageOfRuis,

        alt: "Experience Page",
      },
    ],

    siteName: "Experience Page",
    type: "website",
    url: "https://ruissander-portfolio.vercel.app/experience",
  },
  twitter: {
    title: "Experience Page",
    description:
      "My Experience Page. I have worked on various projects, including a Real Link-Shortener, E-Commerce APIs, React-based Website Design and Development, and more.",
    images: [
      {
        url: metaData.imageOfRuis,

        alt: "Experience Page",
      },
    ],
    card: "summary_large_image",
    site: "@ruis_sander",
  },
};

const ExperiencePage = () => {
  return <Experience />;
};

export default ExperiencePage;
