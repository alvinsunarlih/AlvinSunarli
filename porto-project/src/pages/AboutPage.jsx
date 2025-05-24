import React from "react";
import BoxSocial from "../components/commons/atoms/BoxSocial";
import HeroBanner from "../components/commons/molecules/HeroBanner";

const AboutPage = () => {
  return (
    <section>
      <HeroBanner />
      <div className="mt-14 text-left text-(--text-color-black)">
        <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
          About Me
        </h1>
        <p className="text-lg">
          My name is Alvin Sunarli. 
          I am a high school graduate preparing to pursue a degree in Management, with a focus on Marketing Management. 
          I have a strong interest in the world of marketing and business strategy, and I am committed to continuous personal and professional growth. 
          I also have a passion for UI/UX Design and am learning the fundamentals of front-end development, including HTML, CSS, and currently JavaScript.

          <br />
          During my high school years, I was awarded first place in the Braindicator Information Technology competition, demonstrating both my creativity and problem-solving abilities. 
          I possess a combination of soft skills—such as communication, negotiation, and analytical thinking—as well 
          as hard skills, including English proficiency, basic Mandarin, and proficiency in tools like Microsoft Office, Canva, Figma, and basic web development technologies.

          <br />
          <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
            Career Objective
          </h1>
          <p className="text-lg">
          To become a competent and forward-thinking marketing
           manager who integrates creativity, data analysis, and digital tools
            to develop impactful strategies. 
            I aim to contribute to innovative marketing solutions while continuing to enhance my skills in both management and technology. 
            With my passion for marketing and design, 
            I aspire to help businesses grow through meaningful engagement and user-centered approaches.</p>
        </p>
        <br/> <b><h1><p className="text-lg">Lets Collaborate,Clik Below!</p></h1></b>
        <BoxSocial />
      </div>
    </section>
  );
};

export default AboutPage;