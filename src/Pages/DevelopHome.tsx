import React from "react";
import HomeScreenImage from "../assets/Home/image2.png";
import SmallScreen from "../assets/SmallPicture.png";
import {Clarivate,Dblb,Github,GoogleScholr,Linkedin,Orcid,ResearchGate,Semanticscholar,Twitter,} from '../Services/Calls';
import { FaGoogleScholar } from 'react-icons/fa6';
import {
  SiResearchgate,
  SiSemanticscholar,
  SiDblp,
  SiOrcid,
  SiClarivate,
} from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const DevelopHome: React.FC = () => {
  return (
    <section className="h-screen w-full p-5 pt-[90px]">
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="w-1/2 sm:w-[70%] lg:w-1/3 h-[83%] flex items-center justify-center ml-0 lg:ml-16">
          
          <img
            src={SmallScreen}
            alt="HomeImage"
            className="block lg:hidden w-64 h-60 mt-6 rounded-full object-cover shadow-lg shadow-blue-500 duration-300 hover:scale-105"
          />

          
          <img
            src={HomeScreenImage}
            alt="Home Image"
            className="hidden lg:block w-full h-full rounded-4xl hover:rounded-2xl object-contain hover:scale-101 duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500"
          />
        </div>

        <div className="lg:w-3/5 sm:w-full h-[83%] rounded-2xl px-5 flex flex-col">
            <h1 className="text-justify text-xl font-medium hover:italic duration-300 cursor-default">
                I'm Debash, a Visiting Assistant Professor in the Department of Computer Science at the University of South Dakota. My research focuses on advancing artificial intelligence in medical imaging and diagnostics. 
                I’ve developed models like ColonSegNet and DoubleUNet, and contributed to large-scale, diverse datasets such as Kvasir-SEG, HyperKvasir, CirrMRI600+, and PolypGen. Recognized among the world’s top 2% scientists by Stanford University and Elsevier, my work aims to support radiologists with AI tools that improve diagnostic speed, accuracy, and consistency. I specialize in gastrointestinal imaging, tumor analysis, and predictive modeling for radiation therapy. Beyond segmentation, I explore vision-language models, anomaly detection, foundation models, and ethical AI. I’m also interested in applying AI in surgery, precision oncology, and sports analytics. My goal is to bring impactful AI solutions to real-world healthcare settings.
            </h1>
            <div className="mt-auto self-end flex flex-row-reverse sm:gap-8 gap-1.5 text-4xl mb-4">
                <IconBox Icon={RiTwitterXLine} onClick={Twitter} />
                <IconBox Icon={FaLinkedin} onClick={Linkedin} />
                <IconBox Icon={FaGithub} onClick={Github} />
                <IconBox Icon={SiClarivate} onClick={Clarivate} />
                <IconBox Icon={SiOrcid} onClick={Orcid} />
                <IconBox Icon={SiDblp} onClick={Dblb} />
                <IconBox Icon={SiResearchgate} onClick={ResearchGate} />
                <IconBox Icon={SiSemanticscholar} onClick={Semanticscholar} />
                <IconBox Icon={FaGoogleScholar} onClick={GoogleScholr} />
            </div>
        </div>
      </div>
    </section>
  );
};

const IconBox = ({
  Icon,
  onClick,
}: {
  Icon: any;
  onClick: () => void;
}) => (
  <div className="border rounded-full hover:border-blue-500 hover:shadow-sm hover:shadow-blue-500">
    <Icon
      className="text-4xl p-2 text-black rounded-full duration-300 hover:bg-blue-500 cursor-pointer"
      onClick={onClick}
    />
  </div>
);


export default DevelopHome;
