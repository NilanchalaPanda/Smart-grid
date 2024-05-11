import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVNotify | About Us",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About EVNotify"
        description="Experience effortless EV charging with our AI-driven DApp. Get real-time insights, precise station predictions, and minimal wait times. Enjoy lifetime access, blazing-fast performance, and seamless user experience. Revolutionize your electric journey today."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
