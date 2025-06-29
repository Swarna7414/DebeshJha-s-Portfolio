import React from "react";
import { FaAward } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";



const AndN:React.FC=()=>{
    return(
        <section className="h-screen w-full p-5 pt-[90px]">
            <div className="w-full h-full bg-amber-300 flex flex-col items-center justify-between xl:flex-row xl:p-8 ">
                <div className="h-full w-full xl:w-6/13 bg-gray-200 rounded-3xl shadow-sm shadow-blue-200 hover:shadow-md hover:shadow-blue-300 transition-all duration-300 group">
                    <div className="flex flex-row items-center justify-center mt-4 pl-3.5 text-2xl font-semibold cursor-pointer">
                        <FaAward className="mr-1 mt-1 group-hover:text-blue-500"/>
                        <h1>Awards, Honors & Achievements</h1>
                    </div>
                    <hr className="text-blue-500 border-t-2 mx-auto my-4 w-5/6"/>
                    <div className="mt-2 ml-3 flex flex-col gap-y-2 xl:gap-y-3 overflow-y-auto max-h-[470px] px-2 text-justify">

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Honored to be named a 2024 Top Scholar by ScholarGPS, ranking top 0.5% worldwide.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Received the NSF I-Corps 2025 award to commercialize AI-powered medical imaging research and innovations.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Won Best Industry Paper Award at ICPR 2024 for spectral and spatial segmentation advancements.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Elevated to IEEE Senior Member for sustained impact in medical imaging and AI technologies.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Received Poster of Distinction Award at DDW 2024 for gastrointestinal disease-related AI imaging research.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Won IEEE Chicago Section’s 2024 Junior R&D Award for excellence in medical AI research.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Serving as Associate Editor for Medical Physics and Frontiers in Radiation Oncology journals.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Kvasir-SEG dataset featured in Stanford’s AI Index Report 2022 for global scientific significance.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Presented papers at MICCAI, WACV, ICASSP, and CVPR Workshop between 2024 and 2025.</h1>
                        </div>

                        <div className="flex flex-row items-center">
                            <BsDot className="mr-2"/>
                            <h1>Ranked #51 in Image Segmentation and #1,201 in Medical Imaging by ScholarGPS in 2024.</h1>
                        </div>

                    </div>
                </div>
                <div className="h-full w-full xl:w-6/13 bg-gray-200 rounded-3xl shadow-sm shadow-blue-200 hover:shadow-md hover:shadow-blue-300 transition-all duration-300 group">
                    
                </div>
            </div>
        </section>
    );
}
export default AndN;