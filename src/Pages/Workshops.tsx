import { CgEditBlackPoint } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import sandford from "../assets/Talks/sanford.png";

const Workshops:React.FC=()=>{
    return(
        <section className="p-5 h-screen pt-[85px]">
            <div>
                <h1 className="font-medium text-4xl text-center hover:text-emerald-500 cursor-pointer duration-300">Research Talks & Events</h1>
            </div>
            <div className="mt-5 max-h-[800px] w-full flex flex-col">
                {/** First Box */}
                <div className="flex flex-col-reverse cursor-default md:flex-row items-center gap-4 px-2 hover:scale-98 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5 group-hover:text-emerald-700"/>
                            <h1 className="text-xl group-hover:text-emerald-700 transition-all duration-300">From Data to Diagnosis – Advancing Medical Imaging with Curated Dataset and AI Algorithms.</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1> Stanford MedAI, 2025</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - Accurate medical diagnosis significantly relies on high-quality medical imaging data and advanced computational algorithms. Despite remarkable progress, diagnostic accuracy in radiology and gastrointestinal (GI) endoscopy 
                            faces persistent challenges, including data scarcity, interobserver variability, biases, and limited generalizability. In this talk, I will discuss our approach to addressing these challenges through meticulous dataset curation 
                            and the development of novel medical image segmentation algorithms. Specifically, I will highlight our efforts in curating comprehensive multinational datasets—including CirrMRI600+ for liver cirrhosis imaging; PolypDB, PolypGen, 
                            and Kvasir-SEG for colonoscopy; and HyperKvasir and KvasirCapsule for GI endoscopy and video capsule endoscopy explicitly designed to accelerate AI-driven medical research and enhance clinical diagnostic accuracy. Additionally, 
                            I will present our medical segmentation architectures, such as ResUNet++, DoubleUNet, and ColonSegNet, and Transformer-based models such as TransNetR, and MDNet, which have set benchmarks in medical image segmentation. By integrating 
                            curated data with cutting-edge deep learning methodologies, our work significantly improves diagnostic precision, paving the way for robust, generalizable, and clinically reliable AI-driven solutions in healthcare.
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
                <hr className="w-[95%] border-t-1 border-emerald-700 my-4 self-center" />
                {/**Second Box */}

                <div className="flex flex-col-reverse md:flex-row cursor-default items-center gap-4 px-2 hover:scale-98 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-emerald-700">
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

            <hr className="w-[95%] border-t-1 border-emerald-700 cursor-default my-4 self-center" />

                {/**Third Box */}

            <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-2 cursor-default hover:scale-98 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-emerald-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">Transforming Medical AI: Advancing Deep Learning for Precision Diagnosis & Image Segmentation</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>City University of NewYork, College of Staten Island, 2024</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - I presented my latest research focusing on AI-driven innovations in medical imaging, particularly in radiology and gastrointestinal (GI) endoscopy. My work introduces novel deep learning architectures, 
                            including TransNetR, a transformer-based model for polyp segmentation with strong out-of-distribution generalization, and SynergyNet, which bridges discrete and continuous representations for multi-organ 
                            segmentation. I also discussed Perturbed Prompts-based SAM (PP-SAM), which enhances the adaptability of the Segment Anything Model (SAM) for polyp segmentation, and diffusion-based architectures that push 
                            the boundaries of medical image segmentation beyond traditional CNNs and transformers. Additionally, I highlighted my contributions to open-access datasets such as CirrMRI600+ for liver cirrhosis analysis, 
                            PanSegData for pancreas segmentation, and the Peri-Pancreatic Edema Dataset, which provide new benchmarks for medical AI research. My work extends to real-time polyp detection in colonoscopy, tumor localization 
                            in radiation therapy, and instrument tracking for minimally invasive surgery, demonstrating how AI can transform clinical workflows.
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
            <hr className="w-[95%] border-t-1 border-emerald-700 my-4 self-center" />

            <div className="flex flex-col-reverse md:flex-row items-center cursor-default gap-4 px-2 hover:scale-98 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-emerald-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">Biopsy Free early detection of liver diseases using AI</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>Northwestern University, Department of Radiology, USA, 2023</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - Traditional liver disease diagnosis often relies on invasive biopsy procedures, which pose risks and discomfort to patients. My work introduces AI-powered imaging solutions that leverage deep learning models to analyze radiological scans, 
                            enabling non-invasive, accurate, and early detection of conditions such as liver cirrhosis, fibrosis, and hepatocellular carcinoma (HCC). I showcased my contributions to CirrMRI600+, a novel liver cirrhosis dataset, along with cutting-edge segmentation 
                            architectures like SynergyNet and PVTFormer, which improve organ delineation and disease quantification. Additionally, I discussed how multi-modal AI models, combining radiology and clinical data, enhance diagnostic precision beyond conventional imaging techniques. 
                            The talk also highlighted the role of diffusion models, transformer-based architectures, and self-supervised learning in advancing liver disease detection. This research aims to bridge AI and clinical practice, reducing reliance on biopsies and enabling faster, safer, 
                            and more accessible liver disease screening.
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
            <hr className="w-[95%] border-t-1 border-emerald-700 my-4 self-center" />

            <div className="flex flex-col-reverse md:flex-row items-center cursor-default gap-4 px-2 hover:scale-98 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-emerald-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">The Future is Here: Deep Learning Algorithms Can Reduce the Miss-Rate in Colonoscopy</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>MIPG Seminar Series 42 – Fall, University of Pennsylvania, USA, 2022</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - In this seminar, I discussed the role of deep learning in enhancing polyp detection and reducing the miss rate in colonoscopy, a critical challenge in gastrointestinal endoscopy. 
                            Traditional colonoscopy procedures rely on expert visual inspection, which can result in missed lesions due to factors like operator fatigue, poor visibility, or polyp characteristics. 
                            Leveraging deep learning-based computer-aided detection (CADe) and computer-aided diagnosis (CADx) systems, AI models have demonstrated superior performance in real-time polyp detection, 
                            classification, and segmentation. I presented state-of-the-art deep learning architectures, including convolutional neural networks (CNNs), transformer-based models, and hybrid approaches, 
                            that improve lesion visibility and enhance clinical decision-making. The discussion also covered domain adaptation, multi-center dataset challenges, and the integration of AI-powered systems 
                            into existing clinical workflows. Additionally, I highlighted the importance of interpretability, robustness against adversarial attacks, and regulatory considerations for deploying AI in endoscopy.
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
            <hr className="w-[95%] border-t-1 border-emerald-700 my-4 self-center" />

            <div className="flex flex-col-reverse md:flex-row items-center cursor-default gap-4 px-2 hover:scale-98 duration-300 group">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center font-medium group-hover:text-emerald-700">
                            <CgEditBlackPoint className="mr-1 mt-1 w-5 h-5"/>
                            <h1 className="text-xl">Khwopa to Northwestern: My PhD Journey and Some Personal Reflections</h1>
                        </div>
                        <div className="flex items-center text-md">
                            <IoLocation className="mr-2 text-red-600"/>
                              <h1>Khowpa Engineering College, Purbanchal University, Bhaktapur, Nepal, 2022.</h1>
                        </div>
                        <p className="text-justify ml-1 flex-grow">
                            - I share my academic and professional journey from Khwopa Engineering College in Nepal to Northwestern University in the USA. This journey has been shaped by perseverance, passion for artificial intelligence 
                            in medical imaging, and a commitment to impactful research. I reflect on the challenges and opportunities that defined my path, from earning a PhD at Simula Research Laboratory & UiT The Arctic University of Norway 
                            to contributing groundbreaking AI-driven innovations in radiology, gastrointestinal endoscopy, and precision medicine at Northwestern University. I discuss how my early education at Khwopa Engineering College laid a strong foundation, 
                            fostering the discipline and curiosity that propelled me into the global research landscape. Through my experiences working on open-access medical imaging datasets, developing AI models for disease detection, and collaborating with leading experts, 
                            I highlight the key lessons learned, including the importance of resilience, mentorship, and interdisciplinary collaboration. This talk is a personal reflection on the transition from a small-town student to a recognized researcher, offering insights
                            for aspiring scholars navigating similar academic and professional journeys.
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
            <hr className="w-[95%] border-t-1 border-emerald-700 my-4 self-center" />


            </div>
        </section>
    );
}
export default Workshops;