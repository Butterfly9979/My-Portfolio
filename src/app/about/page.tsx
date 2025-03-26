import { Metadata } from "next";
import About from "./AboutPage";
import metaData from "@/data/metadata.json";
export const metadata: Metadata = {
  title: {
    default: "About",
    template: `%s - ${"About"}`,
  },
  description:
    "Hi, I'm Ruis Sander, Experienced Full-Stack Developer with many years of expertise in designing developing, and optimizing secure and scalable web applications. Proficient in front-end and back-end technologies, including React.js, Node.js, and blockchain development. Experienced in building high-performance systems, enhancing application efficiency, and implementing strong security measures to protect data and ensure reliability.",
  keywords: metaData.keywords,
  openGraph: {
    title: "About Page",
    description:
      "Hi, I'm Ruis Sander, Experienced Full-Stack Developer with many years of expertise in designing developing, and optimizing secure and scalable web applications. Proficient in front-end and back-end technologies, including React.js, Node.js, and blockchain development. Experienced in building high-performance systems, enhancing application efficiency, and implementing strong security measures to protect data and ensure reliability.",
    images: [
      {
        url: metaData.imageOfRuis,

        alt: "About Page",
      },
    ],

    siteName: "About Page",
    type: "website",
    url: "https://ruissander-portfolio.vercel.app/about",
  },
  twitter: {
    title: "About Page",
    description:
      "Hi, I'm Ruis Sander, Experienced Full-Stack Developer with many years of expertise in designing developing, and optimizing secure and scalable web applications. Proficient in front-end and back-end technologies, including React.js, Node.js, and blockchain development. Experienced in building high-performance systems, enhancing application efficiency, and implementing strong security measures to protect data and ensure reliability.",
    images: [
      {
        url: metaData.imageOfRuis,

        alt: "About Page",
      },
    ],
    card: "summary_large_image",
    site: "@ruis_sander",
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
