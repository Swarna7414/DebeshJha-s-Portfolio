import { CgEditBlackPoint } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import sandford from "../assets/Talks/sanford.png";

const Workshops:React.FC=()=>{
    return(
        <section className="p-5 h-screen pt-[85px]">
            <div>
                <h1 className="font-medium text-4xl text-center hover:text-blue-500 cursor-pointer duration-300">Research Talks & Events</h1>
            </div>
            <div className="mt-5 max-h-[800px] w-full flex flex-col">
                {/** First Box */}
                <div className="flex flex-col-reverse cursor-default md:flex-row items-center gap-4 px-2 hover:scale-101 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5 group-hover:text-blue-700"/>
                            <h1 className="text-xl group-hover:text-blue-700 transition-all duration-300">From Data to Diagnosis – Advancing Medical Imaging with Curated Dataset and AI Algorithms.</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1> Stanford MedAI, 2025</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this talk, I shared how we tackle diagnostic challenges in medical imaging—like data scarcity and bias—through curated datasets and advanced segmentation models. We developed diverse datasets (CirrMRI600+, PolypGen, Kvasir-SEG) and architectures (ResUNet++, ColonSegNet, TransNetR) to enhance diagnostic precision. By aligning deep learning with clinical needs, our approach enables generalizable, AI-powered solutions that support radiologists and improve outcomes across radiology, GI endoscopy, and video capsule diagnostics.
                        </p>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                    src={sandford} 
                    alt="sanfordimage" 
                    className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
                </div>
                </div>
                <hr className="w-[95%] border-t-1 border-blue-700 my-4 self-center" />
                {/**Second Box */}

                <div className="flex flex-col-reverse md:flex-row cursor-default items-center gap-4 px-2 hover:scale-101 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-blue-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl group:">Beyond Human Vision: Transforming Radiology and GI Endoscopy with AI</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1> Brown Bag Series, University of South Dakota, 2024</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this talk, I explored the transformative impact of artificial intelligence in radiology and gastrointestinal (GI) endoscopy. 
                            AI-powered models are not just augmenting human expertise but also redefining diagnostic accuracy, efficiency, and accessibility in medical imaging. 
                            I highlighted cutting-edge AI techniques for disease detection, segmentation, and classification, demonstrating how deep learning models surpass human 
                            vision in complex medical scenarios. Additionally, I discussed the ethical and practical challenges of AI deployment in clinical settings, paving the way 
                            for the next generation of intelligent healthcare solutions.
                        </p>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                    src={sandford} 
                    alt="sanfordimage" 
                    className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
                </div>
                </div>

            <hr className="w-[95%] border-t-1 border-blue-700 cursor-default my-4 self-center" />

                {/**Third Box */}

            <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-2 cursor-default hover:scale-101 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-blue-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">Transforming Medical AI: Advancing Deep Learning for Precision Diagnosis & Image Segmentation</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>City University of NewYork, College of Staten Island, 2024</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this talk, I shared my research on AI-driven advances in medical imaging, focusing on radiology and GI endoscopy. I introduced models like TransNetR and SynergyNet for robust segmentation, 
                            along with PP-SAM and diffusion-based methods that go beyond traditional CNNs. I also discussed datasets like CirrMRI600+, PanSegData, and the Peri-Pancreatic Edema Dataset, and highlighted applications 
                            in polyp detection, tumor localization, and surgical tool tracking showing how AI can enhance clinical workflows.
                        </p>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                    src={sandford} 
                    alt="sanfordimage" 
                    className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
                </div>
                </div>
            <hr className="w-[95%] border-t-1 border-blue-700 my-4 self-center" />

            <div className="flex flex-col-reverse md:flex-row items-center cursor-default gap-4 px-2 hover:scale-101 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-blue-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">Biopsy Free early detection of liver diseases using AI</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>Northwestern University, Department of Radiology, USA, 2023</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this talk, I presented AI-based alternatives to invasive liver biopsies, using deep learning to detect cirrhosis, fibrosis, and HCC from radiological scans. 
                            I introduced the CirrMRI600+ dataset and segmentation models like SynergyNet and PVTFormer for precise organ analysis. I also explored multi-modal models that fuse 
                            imaging and clinical data, along with transformer and diffusion-based techniques, aiming to improve liver disease diagnosis and make screening safer, faster, and more 
                            accessible in real-world settings.
                        </p>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                    src={sandford} 
                    alt="sanfordimage" 
                    className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
                </div>
                </div>
            <hr className="w-[95%] border-t-1 border-blue-700 my-4 self-center" />

            <div className="flex flex-col-reverse md:flex-row items-center cursor-default gap-4 px-2 hover:scale-101 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-blue-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">The Future is Here: Deep Learning Algorithms Can Reduce the Miss-Rate in Colonoscopy</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>MIPG Seminar Series 42 – Fall, University of Pennsylvania, USA, 2022</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this seminar, I discussed how deep learning enhances polyp detection and reduces miss rates in colonoscopy. I showcased CADe and CADx systems using CNNs, transformers, 
                            and hybrid models for real-time detection, classification, and segmentation. The talk also explored domain adaptation, multi-center datasets, and clinical integration. Emphasis 
                            was placed on interpretability, robustness to adversarial attacks, and regulatory challenges—highlighting the potential of AI to improve decision-making and outcomes in gastrointestinal endoscopy.
                        </p>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                    src={sandford} 
                    alt="sanfordimage" 
                    className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
                </div>
                </div>
            <hr className="w-[95%] border-t-1 border-blue-700 my-4 self-center" />

            <div className="flex flex-col-reverse md:flex-row items-center cursor-default gap-4 px-2 hover:scale-101 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-blue-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">Khwopa to Northwestern: My PhD Journey and Some Personal Reflections</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>Khowpa Engineering College, Purbanchal University, Bhaktapur, Nepal, 2022.</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this talk, I reflect on my journey from Khwopa Engineering College in Nepal to Northwestern University, shaped by perseverance, curiosity, and a passion for AI in medical imaging. I share lessons from my PhD at Simula & UiT, 
                            and my research in radiology and precision medicine. From early education to global collaboration, I highlight how resilience, mentorship, and interdisciplinary work guided my growth—from small-town student to recognized researcher.
                        </p>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                    src={sandford} 
                    alt="sanfordimage" 
                    className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
                </div>
                </div>
            <hr className="w-[95%] border-t-1 border-blue-700 my-4 self-center" />


            </div>
        </section>
    );
}
export default Workshops;