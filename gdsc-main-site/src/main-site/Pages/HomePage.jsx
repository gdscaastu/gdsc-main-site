import React from "react";
import Footer from "../Components/Footer";
import AboutUs from "../Components/HomeComponents/AboutUs";
import AndroidBox from "../Components/HomeComponents/AndroidBox";
import BecomeMemeber from "../Components/HomeComponents/BecomeMember";
import CloudComputingBox from "../Components/HomeComponents/CloudComputingBox";
import FAQs from "../Components/HomeComponents/FAQs";
import FAQsAccordion from "../Components/HomeComponents/FAQsAccordion";
import Slider from "../Components/HomeComponents/ImageSlider";
import MachineIntelleginceBox from "../Components/HomeComponents/MachineIntelleginceBox";
import Opportunity from "../Components/HomeComponents/Opportunity";
import OpprtunityBox from "../Components/HomeComponents/OpportunityBox";
import Overview from "../Components/HomeComponents/Overview";
import Sponsors from "../Components/HomeComponents/Sponsors";
import Technologies from "../Components/HomeComponents/Technologies";
import WebDevBox from "../Components/HomeComponents/WebDevBox";
import MainNavbar from "../Components/Navabar";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center lg:gap-20 overflow-hidden dark:bg-white z-10">
      <div className="lg:w-full bg-white border-gray-200 dark:bg-gray-900 shadow-md flex justify-center w-full mb-2"></div>
      <div className="flex flex-col w-full lg:w-[80%] lg:justify-self-center lg:flex-row lg:gap-20 mt-32 mb-4">
        <BecomeMemeber />
        <Slider />
      </div>
      <div className="flex lg:w-[80%] w-full lg:justify-center lg:my-0 my-10">
        <Sponsors />
      </div>
      <div className="flex flex-col lg:w-[80%] w-full lg:justify-center lg:flex-row lg:my-0  my-10">
        <AboutUs />
        <Overview />
      </div>
      <div className="lg:w-[80%] w-full lg:justify-center lg:my-0  my-10">
        <Technologies />
        <div className="flex flex-col lg:flex-row">
          <div>
            <AndroidBox />
            <WebDevBox />
          </div>
          <div>
            <MachineIntelleginceBox />
            <CloudComputingBox />
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] flex flex-col lg:justify-center lg:gap-10 lg:flex-row lg:my-0 my-10">
        <div className="lg:w-1/2 w-full">
          <Opportunity />
        </div>
        <div className="flex flex-col md:w-1/2 w-full lg:gap-10 gap-5 items-center">
          <div className="lg:flex-row flex flex-col gap-14">
            <OpprtunityBox
              children={
                " Grow their knowledge on developer technologies and more through peer to peer workshops and events."
              }
            />
            <OpprtunityBox
              children={
                "Showcase their prototypes and solutions to their local community and industry leaders."
              }
            />
          </div>
          <div className="lg:flex-row flex flex-col gap-14">
            <OpprtunityBox
              children={
                "Gain relevant industry experience by solving problems for local organizations with technology based solutions."
              }
            />
            <OpprtunityBox
              children={
                " Getting inspiration to become world-class developers and changemakers from sharing others' success stories."
              }
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] lg:my-20 my-10">
        <FAQs />
        <div className="px-7">
          <div className="border border-black rounded-lg overflow-hidden">
            <FAQsAccordion
              style=""
              children={"Who can become a member?"}
              answer={
                "The club is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills."
              }
            />
            <FAQsAccordion
              children={"How frequently do events and workshops occur?"}
              answer={
                "We often have hands-on session study jams and speaker sessions. We also hold workshops and showcases & we would recommend you to join our community on Telegram to get updates."
              }
            />
            <FAQsAccordion
              children={"What should I carry when attending a workshop?"}
              answer={
                "We recommend you carry with you a notebook, pen and a laptop because more often than not we get our hands dirty with code. Most importantly, bring along a healthy dose of curiosity and enthusiasm."
              }
            />
            <FAQsAccordion
              children={"Who should I reach out to if I have any questions?"}
              answer={
                "If you have any questions or comments, please don't hesitate to contact us though our email or our social medias. We would be happy to stay engaged via email or in person even after the events."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
