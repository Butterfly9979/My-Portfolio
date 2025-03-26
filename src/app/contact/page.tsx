import { Metadata } from "next";
import Contact from "./ContactPage";
import metaData from "@/data/metadata.json";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: `%s - ${"Contact"}`,
  },
  description:
    "I think it's great that you're open to hearing from others! Sharing thoughts fosters connection and creativity. Whether it's a deep insight, casual chat, or random idea, communication builds understanding.",
  keywords: metaData.keywords,
  openGraph: {
    title: "Contact Page",
    description:
      "I think it's great that you're open to hearing from others! Sharing thoughts fosters connection and creativity. Whether it's a deep insight, casual chat, or random idea, communication builds understanding.",
    images: [
      {
        url: metaData.imageOfRuis,
        alt: "Contact Page",
      },
    ],

    siteName: "Contact Page",
    type: "website",
    url: "https://ruissander-portfolio.vercel.app/contact",
  },
  twitter: {
    title: "Contact Page",
    description:
      "I think it's great that you're open to hearing from others! Sharing thoughts fosters connection and creativity. Whether it's a deep insight, casual chat, or random idea, communication builds understanding.",
    images: [
      {
        url: metaData.imageOfRuis,
        alt: "Contact Page",
      },
    ],
    card: "summary_large_image",
    site: "@ruis_sander",
  },
};
const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
