import React, { useState } from "react";
import BoxSocial from "../../atoms/BoxSocial";
import CardLarge from "../../atoms/CardLarge";
import CardSmall from "../../atoms/CardSmall";
import Modal from "../../atoms/Modal";
import RoudedImg from "../../atoms/RoundedImg";

import {
  listIndustries,
  listProjects,
  listSkills,
} from "../../../../utils/constants";

const HeroDetail = () => {
  const [dataProject, setDataProject] = useState(undefined);

  const viewListSkills = () => {
    return listSkills.map((item, index) => (
      <CardSmall
        key={index}
        img={item.icon}
        title={item.name}
        link={item.link}
      />
    ));
  };

  return (
    <>
      <section className="flex max-md:flex-col-reverse w-full pt-4 ">
        <div className="w-[60%] text-left text-(--text-color-black) max-xl:w-[50%] max-md:mt-8 max-md:w-full">
          <p>Alvin Sunarli</p>
          <div className="flex gap-8 max-xl:flex-col">
            <div>
              <h3 className="font-barlow max-w-[370px] text-4xl leading-7 font-bold max-xl:w-[300px] max-xl:text-3xl">
               Combining My marketing Management Expertise with Digital Technologies to Build Impactful, Goal Oriented Strategies and Drive Business Growth
              </h3>
              <p className="text-md mt-4 max-w-[300px] leading-4 font-light">
              As a Management student with a strong interest in marketing, I am passionate about enhancing strategic marketing skills by integrating digital technology. I believe that the combination of marketing knowledge and digital tools can drive data-driven strategies, improve customer targeting, and ultimately help achieve business goals more effectively. I'm committed to continuously developing my digital capabilities to support impactful and innovative marketing solutions.


              </p>
            </div>

            <div className="max-w-[200px]">
              <p className="text-sm font-bold">
                <span className="text-xl">+62K</span> Trends  Tracked ,and Counting
              </p>
              <p className="text-sm leading-4">
               I am a trend-savvy professional who thrives on staying ahead of the curve. With a keen eye for emerging trends and a commitment to continuous research, I ensure that our strategies are always aligned with what's current and relevant. My proactive approach to identifying viral content and market shifts enables the company to adapt swiftly and maintain a competitive edge.
              </p>

              <div className="mt-1 flex">
                {listIndustries.map((item, index) => (
                  <RoudedImg key={index} src={item.icon} index={index} />
                ))}
                <RoudedImg key={1} text="MORE" index={1} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="mt-6">
              <button
                className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 hover:bg-(--bg-secondary-cray)"
                onClick={() => {}}
              >
                Contact Me:
              </button>

              <BoxSocial />
            </div>

            <div className="flex gap-4 max-xl:hidden">{viewListSkills()}</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[40%] pl-4 max-xl:w-[50%] max-md:mt-14 max-md:w-full">
          <div className="mt-16 hidden gap-1 text-(--text-color-black) max-xl:flex">
            {viewListSkills()}
          </div>

          {listProjects.map((item, index) => (
            <CardLarge
              key={index}
              img={item.background}
              index={index + 1}
              text={item.desc}
              title={item.title}
              tech={item.list_tech}
              onClick={() => {
                setDataProject(item);
              }}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={dataProject}
        onClose={() => setDataProject(undefined)}
        data={dataProject}
      />
    </>
  );
};

export default HeroDetail;