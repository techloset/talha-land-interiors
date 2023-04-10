import React, { useState, useEffect } from "react";
import projects1 from "../../assets/projects1.png";
import projects2 from "../../assets/projects2.png";
import projects3 from "../../assets/projects3.png";
import projects4 from "../../assets/projects4.png";
import modernInterior from "../../assets/modernInterior.png";
import exteriorProject from "../../assets/exteriorProject.png";
import greyBeauty from "../../assets/greyBeauty.png";
import plantainInterior from "../../assets/plantainInterior.png";
import roleOfFurniture from "../../assets/roleOfFurniture.png";
import rectangle from "../../assets/rectangleProj.svg";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1280, itemsToShow: 5 },
];

const OurProjects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div
      id="Projects"
      className="lg:max-w-[1440px] xl:max-w-[1600px] vl:max-w-[1920px] mx-auto relative min-h-[400px] sm:min-h-[500px] py-20 bg-cover"
      style={{ backgroundImage: `url(${rectangle})` }}
    >
      <div className="grid sm:grid-cols-2 md:w-full lg:max-w-[760px] mx-10 vl:ml-24 vl:mr-0 [&>div>img]:p-2 [&>div>img]:mx-auto [&>div>img]:object-cover">
        <div>
          <img
            src={projects1}
            alt="projects1"
            className="w-[380px] h-[380px]"
          />
          <img
            src={projects2}
            alt="projects2"
            className="w-[380px] h-[190px]"
          />
        </div>
        <div>
          <img
            src={projects3}
            alt="projects3"
            className="w-[380px] h-[190px]"
          />
          <img
            src={projects4}
            alt="projects4"
            className="w-[380px] h-[380px]"
          />
        </div>
      </div>
      <div className="mx-auto w-full md:w-auto lg:absolute right-0 lg:right-0 lg:top-[150px] vl:top-[106px] vl:right-[112px]">
        <div className="bg-white bg-opacity-80 lg:max-w-[700px] xl:max-w-[1000px] vl:max-w-none sm:max-w-auto px-10 sm:mx-4 md:mx-0 py-[1rem] md:px-[68px] md:py-[60px] text-center">
          <h2 className="text-purpD font-medium text-[36px] text-left lg:text-center pb-3 vl:p-0 vl:pb-[45px]">
            Our Projects
          </h2>
          <p className="text-[18px] md:text-[24px] text-left lg:text-center lg:text-[18px] pb-3 vl:p-0 vl:w-[860px] vl:pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </p>
          <p className="text-[18px] md:text-[24px] text-left lg:text-center lg:text-[18px] pb-3 vl:p-0 vl:w-[860px] vl:pb-14">
            magna fringilla urna, porttitor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est ullamcorper eget
            nulla
          </p>
          <button className="text-[16px] lg:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white block mx-auto mt-6 md:mt-0">
            View all
          </button>
        </div>
      </div>
      <div id="Blog" className="blogs md:pt-[4rem]">
        <h2 className="text-purpD font-medium max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] px-7 sm:px-10 md:pl-15 lg:pl-20 vl:pl-24 sm:py-4 lg:py-6 vl:py-10">
          Blogs
        </h2>
        <Carousel
          breakPoints={breakPoints}
          disableArrowsOnEnd={true}
          itemPadding={width >= 1900 ? [0, 20] : [0, 0]}
          className="relative px-[1rem] md:px-[2rem]"
        >
          <Item>
            <img src={modernInterior} alt="modernInterior" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Modern Interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={exteriorProject} alt="exteriorProject" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Exterior Project
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={greyBeauty} alt="greyBeauty" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Grey Beauty
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={plantainInterior} alt="plantainInterior" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Plantation interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={roleOfFurniture} alt="roleOfFurniture" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Role of furnitures
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={modernInterior} alt="modernInterior" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Modern Interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={exteriorProject} alt="exteriorProject" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Exterior Project
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={greyBeauty} alt="greyBeauty" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Grey Beauty
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={plantainInterior} alt="plantainInterior" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Plantation interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={roleOfFurniture} alt="roleOfFurniture" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Role of furnitures
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
        </Carousel>
        <button className="text-[16px] lg:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white block mt-5 lg:mt-8 xl:mt-16 mx-auto">
          View all
        </button>
      </div>
    </div>
  );
};

export default OurProjects;