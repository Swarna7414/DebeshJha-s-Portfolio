import React from "react";
import "../Styles/WorkStyles.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiFilePaper2Line } from "react-icons/ri";
import Pvtformet from "../assets/Myworks/Pvtformet.png";
import MdNet from "../assets/Myworks/mdnet.png";
import TransnetR from "../assets/Myworks/TransNetR.png";
import TransRUPNet from "../assets/Myworks/TransRUPNet.png";
import DoubleNet from "../assets/Myworks/DoubleUnet.png";
import ResNet from "../assets/Myworks/ResUNet++.png";
import ResNetCRF from "../assets/Myworks/ResUNet++ + CRF + TTA.png";
import ColonSegNet from "../assets/Myworks/ColonSegNet.png";
import NanoNet from "../assets/Myworks/NanoNet.png";
import DDANet from "../assets/Myworks/DDAnet.png"
import LighLayer from "../assets/Myworks/LightLayers.png";
import PNSNET from "../assets/Myworks/PNS-net.png"
import Unet from "../assets/Myworks/UNet.png";
import { ColonSegNetGithub, ColonSegNetpaper, DDANetGithub, DDANetpaper, DoubleUNetgithub, DoubleUNetpaper, LightLayersGithub, LightLayersPaper, MdNetGit, MdNetPaper, NanoNetGithub, NanoNetpaper, PNSNetgithub, PNSNetpaper, PVTFormer, PVTFormerPaper, ResUnetCraGithub, Resunetgithub, Resunetpaper, TransnetRGit, TransnetRpaper, TransRUPNetgit, TransRUPNetpaper, UnetGithub, UnetPaper } from "../Services/MyworksCalls";





const Myworks: React.FC = () => {
  return (
    <section className="p-10 h-screen pt-[82px]">
      <div className="flex flex-col h-full">
        <h1 className="self-center font-bold text-4xl hover:text-blue-500 cursor-pointer duration-300">
          My Works
        </h1>
        
        <div className="flex-1 overflow-auto mt-4 overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/*Start's here */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={PVTFormer}>
                    <img
                      src={Pvtformet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      PVTFormer is a deep learning model for precise liver segmentation in CT scans, aiding diagnosis and treatment. Based on PVT v2,
                       it uses residual upsampling and advanced decoding. On the LiTS 2017 benchmark, it achieved 86.78% Dice, 78.46% mIoU, and 3.50 HD, 
                       setting a new segmentation standard.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={PVTFormer}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={PVTFormerPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={PVTFormer}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">PVTFormer</h2>
                <p className="text-md">CT Liver Segmentation Via PVT-based Encoding and Refined Decoding (ISBI 2024)</p>
              </div>
            </div>




            {/* 2 Start's here */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={MdNetGit}>
                    <img
                      src={MdNet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      MDNet is a multi-decoder model for precise organ segmentation from abdominal CT scans. Using a MiT-B2 encoder and iterative refinement via dilated blocks and spatial attention, it achieves Dice scores of 0.9013 
                      (LiTS) and 0.9169 (MSD Spleen), with low Hausdorff distances, outperforming baselines in accuracy and interpretability.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={MdNetGit}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={MdNetPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={MdNetGit}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">PVTFormer</h2>
                <p className="text-md">MDNet: Multi-Decoder Network for Abdominal CT Organs Segmentation, 2024</p>
              </div>
            </div>


            {/* 3 Start's here */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={TransnetRGit}>
                    <img
                      src={TransnetR}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     TransNetR is a real-time deep learning model for colon polyp segmentation, using a ResNet50-based encoder-decoder architecture. It achieves 0.8706 Dice, 0.8016 mIoU on Kvasir-SEG, and runs at 54.60 FPS. 
                     TransNetR outperforms state-of-the-art models on out-of-distribution datasets, demonstrating strong generalizability and robustness across diverse clinical settings.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={TransnetRGit}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={TransnetRpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={TransnetRGit}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">TransNetR</h2>
                <p className="text-md">TransNetR: Transformer-based Residual Network for Polyp Segmentation with Multi-Center Out-of-Distribution Testing (MIDL 2023)</p>
              </div>
            </div>


            {/* 4 Start's here */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={TransRUPNetgit}>
                    <img
                      src={TransRUPNet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     TransRUPNet is a real-time deep learning model for accurate polyp segmentation, aiding early colorectal cancer detection. Using a three-block encoder-decoder design, it processes 256×256 images at 47.07 FPS. 
                     It achieves 0.7786 Dice and 0.7210 mIoU on unseen data, showing strong generalization and outperforming existing methods in real-world scenarios.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={TransRUPNetgit}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={TransRUPNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={TransRUPNetgit}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">TransRUPNet</h2>
                <p className="text-md">TransRUPNet for Improved Out-of-Distribution Generalization in Polyp Segmentation</p>
              </div>
            </div>


            {/* 5 Start's here */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={DoubleUNetgithub}>
                    <img
                      src={DoubleNet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     DoubleU-Net is a deep learning model for semantic segmentation, stacking two U-Nets to enhance accuracy. The first uses VGG-19 for feature extraction, while the second refines semantics. 
                     With ASPP for context, it outperforms U-Net on datasets like CVC-ClinicDB and MICCAI 2015, excelling in small or flat polyp detection.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={DoubleUNetgithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={DoubleUNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={DoubleUNetgithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">DoubleUNet</h2>
                <p className="text-md">DoubleU-Net: A Deep Convolutional NeuralNetwork for Medical Image Segmentation</p>
              </div>
            </div>

            {/**6th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={Resunetgithub}>
                    <img
                      src={ResNet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      ResUNet++ is an advanced deep learning model for precise polyp segmentation in colonoscopy images. Built on ResUNet, it improves pixel-wise accuracy. On Kvasir-SEG and CVC-612 datasets, 
                      it achieves Dice scores of 81.33% and 79.55%, outperforming U-Net and ResUNet, making it a strong tool for medical image analysis.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={Resunetgithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={Resunetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={Resunetgithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">ResUNet++</h2>
                <p className="text-md">ResUNet++: An Advanced Architecture for MedicalImage Segmentation</p>
              </div>
            </div>


            {/**7th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={ResUnetCraGithub}>
                    <img
                      src={ResNetCRF}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      ResUNet + CRF + TTA is an advanced model for accurate polyp segmentation in colonoscopy images. Enhancing ResUNet with Conditional Random Fields and Test-Time Augmentation, it achieves 81.33% Dice on Kvasir-SEG and 79.55% on CVC-612, 
                      outperforming U-Net and ResUNet in precision and clinical relevance.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={ResUnetCraGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={Resunetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={ResUnetCraGithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">ResUNet++ + CRF + TTA</h2>
                <p className="text-md">Colorectal Polyp Segmentation With ResUNet++, Conditional Random Field and Test-Time Augmentation</p>
              </div>
            </div>


            {/** 8th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={ColonSegNetGithub}>
                    <img
                      src={ColonSegNet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      Computer-aided methods improve polyp detection and segmentation in colonoscopy. This study benchmarks leading models on the Kvasir-SEG dataset, assessing both accuracy and speed. ColonSegNet leads 
                      with 0.8206 Dice, 0.8100 mIoU, 0.8000 AP, and 182.38 FPS, emphasizing the importance of benchmarking for fair, real-time clinical evaluation.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={ColonSegNetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={ColonSegNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={ColonSegNetGithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">ColonSegNet</h2>
                <p className="text-md">a real-time deep learning model that outperforms existing methods in both accuracy and speed for polyp detection and segmentation</p>
              </div>
            </div>


            {/** 9th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={NanoNetGithub}>
                    <img
                      src={NanoNet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      NanoNet is a lightweight deep learning model for real-time lesion segmentation in gastrointestinal endoscopy. With only ~36,000 parameters, it delivers high accuracy and speed across endoscopy datasets.
                       Designed for efficiency, NanoNet balances performance and latency, making it ideal for deployment on low-end clinical devices with limited resources.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={NanoNetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={NanoNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={NanoNetGithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">NanoNet</h2>
                <p className="text-md">NanoNet: Real-Time Polyp Segmentation in VideoCapsule Endoscopy and Colonoscopy</p>
              </div>
            </div>


            {/** 10th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={DDANetGithub}>
                    <img
                      src={DDANet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      DDANet is a dual decoder attention network designed for fast, accurate polyp segmentation in colonoscopy. Addressing the limitations of manual labeling, it achieves 0.7874 Dice, 0.7010 mIoU, 0.7987 recall, 
                      and 0.8577 precision on Kvasir-SEG and unseen data, demonstrating strong generalization for clinical use and prognosis support.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={DDANetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={DDANetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={DDANetGithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">DDANet</h2>
                <p className="text-md">Dual Decoder Attention Network for Automatic Polyp Segmentation</p>
              </div>
            </div>
            


            {/** 11th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={DDANetGithub}>
                    <img
                      src={LighLayer}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      LightLayers is a lightweight deep learning approach that reduces trainable parameters using matrix factorization. Featuring LightDense and LightConv2D layers, it matches standard layer performance with less computation. 
                      Tested on MNIST, CIFAR-10, and more, LightLayers offers efficient, accessible training for users without high-end hardware, enabling broader deep learning adoption.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={LightLayersGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={LightLayersPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={LightLayersGithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">LightLayers</h2>
                <p className="text-md">Parameter Efficient Dense and Convolutional Layers for Image Classification</p>
              </div>
            </div>


            {/** 12th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={PNSNetgithub}>
                    <img
                      src={PNSNET}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      PNS-Net is a real-time video polyp segmentation model built entirely on normalized self-attention blocks, avoiding CNNs and recurrence. Running at ~140 FPS on a single GPU, it achieves state-of-the-art 
                      results on VPS datasets, effectively capturing spatial-temporal context and offering a fast, efficient solution for video-based polyp segmentation.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={PNSNetgithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={PNSNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={PNSNetgithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">PNS-Net</h2>
                <p className="text-md">Progressively Normalized Self-Attention Network for Video Polyp Segmentation</p>
              </div>
            </div>


            {/** 13th one */}
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer duration-300 group relative overflow-hidden">
              {/* dlip area */}
              <div className="h-[80%] perspective">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* FRoNT SIdE*/}
                  <div className="absolute w-full h-full backface-hidden" onClick={UnetGithub}>
                    <img
                      src={Unet}
                      alt="CIRRMRI600"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* BACK SIDE - Text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     This study benchmarks deep learning models for surgical instrument segmentation in laparoscopy, crucial for tool tracking in minimally invasive surgery (MIS). DDANet leads with a Dice score of 0.8739, 
                     mIoU of 0.8183, and 101.36 FPS on the ROBUST-MIS 2019 dataset, demonstrating high accuracy and real-time surgical applicability.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={UnetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-blue-400 hover:bg-black"onClick={UnetPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={UnetGithub}>
                <h2 className="text-lg font-bold group-hover:text-blue-500 duration-300 cursor-pointer">UNet</h2>
                <p className="text-md">U-Net Architecture for Surgical Image Segmentation</p>
              </div>
            </div>


          </div>
        </div>
        



      </div>
    </section>
  );
};

export default Myworks;