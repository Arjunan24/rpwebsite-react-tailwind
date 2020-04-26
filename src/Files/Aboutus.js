import React from "react";
import aboutData from "../Datas/Aboutus";
import { Carousel } from 'react-responsive-carousel';


function Aboutus() {
    return (
        <div>
            <div className="bg-blue-500 text-center">
                <p>{aboutData.Aboutus}</p>
                <p>{aboutData.aboutContent}</p>

            </div>
            <div className="sm:flex ">
                <div className="w-full w-1/2">
                    <h3 className="font-bold p-3 text-2xl whitespace-pre-line">{aboutData.TransformingBusinessParadigms}</h3>
                    <p className="p-3 text-sm">
                        {aboutData.TbpContent}
                    </p>
                    <p className="p-3 text-sm">
                        {aboutData.TbpContent1}
                    </p>
                    <p className="p-3 text-sm">
                        {aboutData.TbpContent2}
                    </p>
                </div>
                <div className=" w-full w-1/2 h-screen flex items-center">
                    <img src={aboutData.transforminglogo} alt="transforming" />
                </div>

            </div>

            <div className="bg-blue-100 py-3 px-3">

                <div className="sm:flex py-2">
                    <div className="sm:w-1/2">
                        <div className="flex">
                            <img src={aboutData.wearelogo} alt="" />

                            <label className="p-4">{aboutData.Whoweare}</label>
                        </div>
                        <p className="text-sm py-2">{aboutData.wearecontent}</p>
                    </div>
                    {/* //content 2 */}
                    <div className="sm:w-1/2">
                        <div className="flex">
                            <img src={aboutData.wedologo} alt="" />
                            <label className="p-4">{aboutData.Whatwedo}</label>
                        </div>
                        <div>
                            <p className="text-sm py-2 sm:px-3">{aboutData.weContent}</p>
                        </div>

                    </div>
                </div>
                <div className="sm:flex py-2">
                    {/* //content 3 */}
                    <div className="sm:w-1/2">
                        <div className="flex">
                            <img src={aboutData.ourvisionlogo} alt="" />
                            <label className="p-4">{aboutData.OurVision}</label>
                        </div>
                        <div>
                            <p className="text-sm py-2 ">{aboutData.visioncontent}</p>
                        </div>

                    </div>
                    {/* //content 4 */}
                    <div className="sm:w-1/2">
                        <div className="flex">
                            <img src={aboutData.ourmissionlogo} alt="" />
                            <label className="p-6">{aboutData.OurMission}</label>
                        </div>
                        <div>
                            <p className="text-sm py-2 sm:px-3">{aboutData.misioncontent}</p>
                        </div>

                    </div>
                </div>
            </div>
<div className="py-3 flex justify-center">
    <h3 className="text-xl">{aboutData.lmt}</h3>
</div>
<div className="sm:flex">


            <div class="max-w-xs center  border-b-8 border-blue-400 m-4 rounded shadow-lg ">
 <div className="w-full flex  justify-center">
  <img class="rounded-full w-48 h-48 flex items-center p-4"   src={aboutData.sampleimg} alt=""/>

 </div>
 <div className="py-1 w-full text-center">
    <label className="font-bold">{aboutData.lokesh}</label>
    <p>{aboutData.cofounder}</p>
</div>
<div className="py-3 px-5 text-center">
    <p className="text-sm">{aboutData.lokeshContent}</p>
</div>
        <div className="py-3 flex justify-center">
<img className="w-16 h-16" src={aboutData.linkedinlogo} alt=""/>
<img className="w-16 h-16" src={aboutData.fblogo} alt=""/>
</div>
</div>
<div class="max-w-xs center  border-b-8 border-blue-400 m-4 rounded shadow-lg ">
 <div className="w-full flex  justify-center">
  <img class="rounded-full w-48 h-48 flex items-center p-4"   src={aboutData.sampleimg} alt=""/>

 </div>
 <div className="py-1 w-full text-center">
    <label className="font-bold">{aboutData.lokesh}</label>
    <p>{aboutData.cofounder}</p>
</div>
<div className="py-3 px-5 text-center">
    <p className="text-sm">{aboutData.lokeshContent}</p>
</div>
        <div className="py-3 flex justify-center">
<img className="w-16 h-16" src={aboutData.linkedinlogo} alt=""/>
<img className="w-16 h-16" src={aboutData.fblogo} alt=""/>
</div>
</div>

</div>
<div className="p-3 flex">
<Carousel>
<div className="p-3 sm:flex">
<div class="max-w-xs center  border-b-8 border-blue-400 m-4 rounded shadow-lg ">
 <div className="w-full flex  justify-center">
  <img class="rounded-full w-48 h-48 flex items-center p-4"   src={aboutData.sampleimg} alt=""/>

 </div>
 <div className="py-1 w-full text-center">
    <label className="font-bold">{aboutData.lokesh}</label>
    <p>{aboutData.cofounder}</p>
</div>
<div className="py-3 px-5 text-center">
    <p className="text-sm">{aboutData.lokeshContent}</p>
</div>
        <div className="py-3 flex justify-center">
<img className="w-16 h-16" src={aboutData.linkedinlogo} alt=""/>
<img className="w-16 h-16" src={aboutData.fblogo} alt=""/>
</div>
</div>

<div class="max-w-xs center  border-b-8 border-blue-400 m-4 rounded shadow-lg ">
 <div className="w-full flex  justify-center">
  <img class="rounded-full w-48 h-48 flex items-center p-4"   src={aboutData.sampleimg} alt=""/>

 </div>
 <div className="py-1 w-full text-center">
    <label className="font-bold">{aboutData.lokesh}</label>
    <p>{aboutData.cofounder}</p>
</div>
<div className="py-3 px-5 text-center">
    <p className="text-sm">{aboutData.lokeshContent}</p>
</div>
        <div className="py-3 flex justify-center">
<img className="w-16 h-16" src={aboutData.linkedinlogo} alt=""/>
<img className="w-16 h-16" src={aboutData.fblogo} alt=""/>
</div>
</div>

<div class="max-w-xs center  border-b-8 border-blue-400 m-4 rounded shadow-lg ">
 <div className="w-full flex  justify-center">
  <img class="rounded-full w-48 h-48 flex items-center p-4"   src={aboutData.sampleimg} alt=""/>

 </div>
 <div className="py-1 w-full text-center">
    <label className="font-bold">{aboutData.lokesh}</label>
    <p>{aboutData.cofounder}</p>
</div>
<div className="py-3 px-5 text-center">
    <p className="text-sm">{aboutData.lokeshContent}</p>
</div>
        <div className="py-3 flex justify-center">
<img className="w-16 h-16" src={aboutData.linkedinlogo} alt=""/>
<img className="w-16 h-16" src={aboutData.fblogo} alt=""/>
</div>
</div>
</div>

            </Carousel>
            </div>
        </div>
    )

}
export default Aboutus