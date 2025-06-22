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





const Develop: React.FC = () => {
  return (
    <section className="p-10 h-screen pt-[79px]">
      <div className="flex flex-col h-full">
        <h1 className="self-center font-bold text-4xl hover:text-emerald-500 cursor-pointer duration-300">
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      PVTFormer is a novel deep learning model for accurate liver segmentation from CT scans, vital for diagnosis and treatment planning. Built on the pretrained Pyramid Vision Transformer (PVT v2), 
                      it integrates residual upsampling, advanced decoding, and refined feature channels to enhance semantic segmentation. Evaluated on the LiTS 2017 benchmark, PVTFormer achieves a dice coefficient of 86.78%, 
                      mIoU of 78.46%, and HD of 3.50, setting a new standard in liver segmentation
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={PVTFormer}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={PVTFormerPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={PVTFormer}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">PVTFormer</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      MDNet is a multi-decoder deep learning model designed for accurate organ segmentation from abdominal CT scans, crucial for diagnosis and treatment. It uses a pre-trained MiT-B2 encoder and multiple decoders, 
                      each enhancing features through dilated blocks and spatial attention from previous predictions. This iterative refinement improves segmentation accuracy. MDNet achieves high Dice scores of 0.9013 (LiTS) and 0.9169
                      (MSD Spleen), with low Hausdorff distances of 3.79 and 2.26, respectively. It outperforms baseline models in robustness and interpretability
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={MdNetGit}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={MdNetPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={MdNetGit}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">PVTFormer</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     TransNetR is a novel real-time deep learning model for colon polyp segmentation, addressing challenges like high polyp miss rates and poor generalization in existing methods. Built as an encoder-decoder 
                     network using pre-trained ResNet50 and three decoder blocks, it achieves high accuracy with a Dice score of 0.8706 and mIoU of 0.8016 on the Kvasir-SEG dataset, while maintaining 54.60 FPS. TransNetR also 
                    shows strong generalizability, outperforming state-of-the-art models on out-of-distribution datasets, including PolypGen and other popular benchmarks, proving its robustness across multiple clinical settings.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={TransnetRGit}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={TransnetRpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={TransnetRGit}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">TransNetR</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     TransRUPNet is a real-time deep learning model developed for accurate polyp segmentation to aid early colorectal cancer detection. This encoder-decoder architecture includes three encoder-decoder blocks and upsampling layers, 
                     processing 256×256 images at 47.07 FPS. It achieves a mean Dice score of 0.7786 and mIoU of 0.7210 on out-of-distribution datasets. Tested on the PolypGen dataset, TransRUPNet provides real-time feedback with strong accuracy and 
                     generalization, outperforming existing methods in handling unseen data, making it effective for both clinical and diverse real-world scenarios.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={TransRUPNetgit}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={TransRUPNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={TransRUPNetgit}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">TransRUPNet</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     DoubleU-Net is a novel deep learning architecture for semantic image segmentation, particularly in medical imaging. It stacks two U-Net models, with the first using a pre-trained VGG-19 encoder 
                     for feature extraction and the second enhancing semantic information. Atrous Spatial Pyramid Pooling (ASPP) is incorporated to capture rich contextual data. Evaluated on multiple datasets—including 
                     CVC-ClinicDB, 2015 MICCAI, and the 2018 Data Science Bowl—DoubleU-Net outperforms standard U-Net, especially in detecting small or flat polyps. Its strong accuracy and generalization make it a robust baseline for medical image segmentation tasks.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={DoubleUNetgithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={DoubleUNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={DoubleUNetgithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">DoubleUNet</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      ResUNet++ is an enhanced deep learning architecture designed for accurate polyp detection and segmentation in colonoscopy images. Aimed at aiding endoscopists in removing abnormal tissue to prevent cancer, 
                      it builds on the ResUNet framework for pixel-wise segmentation. Evaluated on public datasets like Kvasir-SEG and CVC-612, ResUNet++ outperforms existing models such as U-Net and ResUNet. It achieves a Dice coefficient 
                      of 81.33% and mIoU of 79.27% on Kvasir-SEG, and 79.55% Dice with 79.62% mIoU on CVC-612, highlighting its effectiveness in medical image segmentation tasks.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={Resunetgithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={Resunetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={Resunetgithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">ResUNet++</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      ResUNet + CRF + TTA is an advanced deep learning model developed for precise identification and segmentation of polyps in colonoscopy images. Intended to assist endoscopists in excising abnormal growths and reducing the risk of cancer progression, 
                      it extends the ResUNet architecture for detailed pixel-level segmentation. Tested on publicly available datasets such as Kvasir-SEG and CVC-612, ResUNet++ surpasses prominent models like U-Net and ResUNet. It records a Dice score of 81.33% 
                      and a mean Intersection over Union (mIoU) of 79.27% on Kvasir-SEG, and achieves 79.55% Dice and 79.62% mIoU on CVC-612, demonstrating superior segmentation performance.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={ResUnetCraGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={Resunetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={ResUnetCraGithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">ResUNet++ + CRF + TTA</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      Computer-aided methods enhance colonoscopy by improving polyp detection, localization, and segmentation. This study benchmarks state-of-the-art models using the Kvasir-SEG dataset, 
                      evaluating accuracy and speed. ColonSegNet shows superior performance with 0.8000 average precision, 0.8100 mIoU, 0.8206 Dice score, and the highest speed of 182.38 FPS. These results 
                      highlight the need for benchmarking to ensure fair evaluation and reproducibility in real-time clinical applications.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={ColonSegNetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={ColonSegNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={ColonSegNetGithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">ColonSegNet</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      NanoNet is a lightweight deep learning model designed for real-time semantic segmentation in gastrointestinal endoscopy. It targets accurate delineation of lesions in video capsule and colonoscopy images, 
                      addressing challenges of high-definition visuals and operator dependency. NanoNet achieves superior accuracy and speed while maintaining low model complexity, using only ~36,000 parameters. Tested on various 
                      endoscopy datasets, it balances performance, latency, and size, making it suitable for low-end clinical devices.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={NanoNetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={NanoNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={NanoNetGithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">NanoNet</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      Colonoscopy is crucial for detecting colorectal polyps, where accurate segmentation aids in treatment planning and prognosis. Manual labeling is time-consuming and error-prone, prompting the need for automated, 
                      fast, and precise segmentation. This study introduces DDANet, a dual decoder attention network, evaluated on Kvasir-SEG and tested on unseen data. It achieves a Dice score of 0.7874, mIoU of 0.7010, recall of 0.7987, 
                      and precision of 0.8577, showcasing strong generalization.

                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={DDANetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={DDANetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={DDANetGithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">DDANet</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      Deep Neural Networks (DNNs) are widely used but require high computational power for training, limiting access for those without advanced hardware. To address this, LightLayers is introduced—a method that reduces 
                      trainable parameters using matrix factorization. It includes LightDense and LightConv2D layers, which match the performance of standard layers with fewer parameters. Tested on MNIST, Fashion MNIST, CIFAR-10, and CIFAR-100, 
                      LightLayers delivers strong results with significantly lower computational demand, making deep learning more accessible and efficient.

                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={LightLayersGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={LightLayersPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={LightLayersGithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">LightLayers</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                      PNS-Net is a novel video polyp segmentation (VPS) model designed to overcome the limitations of traditional CNN-based methods, which struggle with capturing global temporal and spatial context. 
                      Built entirely on normalized self-attention blocks without recurrence or CNNs, PNS-Net achieves real-time performance (\~140 FPS) on a single RTX 2080 GPU without post-processing. It delivers 
                      state-of-the-art results on challenging VPS datasets and proves effective across various settings, making it a powerful and efficient solution for video-based polyp segmentation.


                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={PNSNetgithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={PNSNetpaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={PNSNetgithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">PNS-Net</h2>
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
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-300/30 text-white p-4 rounded-lg flex flex-col items-center justify-center overflow-y-auto text-center text-sm">
                    <p className="max-w-[90%] mx-auto text-justify leading-relaxed text-black">
                     Minimally Invasive Surgery (MIS) benefits from advancements in hardware and software, yet challenges remain in accurately detecting and tracking surgical instruments. This study evaluates deep learning models for automatic segmentation in laparoscopy, 
                     a key step toward tool tracking. Among the methods tested, DDANet outperforms others with a Dice score of 0.8739, mIoU of 0.8183, and real-time speed of 101.36 FPS on the ROBUST-MIS 2019 dataset, proving its effectiveness for surgical applications.
                    </p>
                    <div className="flex justify-between w-1/2 items-center text-2xl mt-3">
                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={UnetGithub}>
                          <PiGithubLogoFill/>
                      </button>

                      <button className="mt-2 text-black font-semibold rounded-full cursor-pointer hover:scale-105 duration-300 px-2.5 py-2 bg-button hover:text-emerald-300 hover:bg-black"onClick={UnetPaper}>
                          <RiFilePaper2Line/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[20%] flex flex-col items-center justify-center text-center"onClick={UnetGithub}>
                <h2 className="text-lg font-bold group-hover:text-emerald-500 duration-300 cursor-pointer">UNet</h2>
                <p className="text-md">U-Net Architecture for Surgical Image Segmentation</p>
              </div>
            </div>


          </div>
        </div>
        



      </div>
    </section>
  );
};

export default Develop;