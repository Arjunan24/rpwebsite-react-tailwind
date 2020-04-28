import React from "react";
import underStandBlockChain from "../Datas/Understanding_blockchain"

function understand_blocjchain() {
    return (
        <div>
            <div className="sm:flex w-full border-b-0" style={{ background: `url(${underStandBlockChain.backgroundCImg})` }}>
                <div className="w-3/5 px-3">
                    <div className="py-5">
                        <h2 className="text-white px-3 text-3xl">{underStandBlockChain.understandingblockchain}</h2>
                        <h3 className="text-white px-3 text-5xl">{underStandBlockChain.blockchaintext}</h3>

                    </div>
                    <div className="py-5 ">
                        <p className="text-white px-3 text-sm">{underStandBlockChain.blockheadercontent}</p>
                    </div>
                    <div className="py-1 px-5 mt-5 ">
                        <img className="mt-5 w-48 h-48 " src={underStandBlockChain.blockchainHeaderlogo} alt="" />
                    </div>
                </div>
                <div className="sm:flex items-center w-1/2 px-4 py-5 mt-40">
                    <div className="max-w-sm  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-3 py-10">
                            <p className="p-2 text-xs">{underStandBlockChain.whotakecourse}</p>
                            <hr />
                            <p className="p-2 text-xs">{underStandBlockChain.whycourse}</p>
                            <hr />
                            <p className="p-2 text-xs">{underStandBlockChain.marketblockchain}</p>
                            <hr />
                            <p className="p-2 text-xs">{underStandBlockChain.programduration}</p>
                            <hr />
                            <p className="p-2 text-xs">{underStandBlockChain.courseoutcomes}</p>
                            <hr />
                            <p className="p-2 text-xs" >{underStandBlockChain.Trainers}</p>
                            <hr />
                            <p className="p-2 text-xs">{underStandBlockChain.CourseCurriculum}</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="sm:flex px-3">
                <div className="w-full w-1/2  py-5 px-3">
                    <img src={underStandBlockChain.shouldcourselogo} alt="" />

                    <div className="mt-3 w-4 h-3 ml-2">

                        <hr className="h-4" />
                    </div>
                    <h3 className="text-2xl px-2">{underStandBlockChain.shouldtakecourseheader}</h3>
                    <p className="text-sm px-2 py-3">{underStandBlockChain.shouldcontent}</p>

                </div>
                <div className="w-full w-1/2 py-5 px-3">
                    <img src={underStandBlockChain.shouldcourselogo} alt="" />

                    <div className="mt-3 w-4 h-3 ml-2">
                        <hr className="h-4" />
                    </div>
                    <h3 className="text-2xl px-2">{underStandBlockChain.whycourseHeader}</h3>
                    <div className="py-3">

                        <h4 className="text-md px-2">{underStandBlockChain.involvesindustryheading}</h4>
                        <p className="text-sm px-2 py-2">{underStandBlockChain.involvescontent}</p>
                    </div>
                    <div className="py-4">
                        <h4 className="text-md px-2">{underStandBlockChain.ExperimentalLearning}</h4>
                        <p className="text-sm px-2 py-2">{underStandBlockChain.experimentcontent}</p>

                    </div>
                </div>
                
                           </div>
                            {/* //content 2 */}
                           <div className="px-3">

                            <hr className="px-3"/>
                           </div>
               
                <div className="sm:flex">
                    <div className="w-full w-1/2">
                    <div className="mt-3 w-4 h-3 ml-2">
                        <hr className="h-4" />
                    </div>
                   
                   <div className="">
    <h3 className="text-2xl px-2 py-2">{underStandBlockChain.marketBlockchain}</h3>
    
    <p className="text-sm ml-2">{underStandBlockChain.marketcontent}</p>
   
    <ul className="list-disc">
    <li className="text-sm px-2 py-3">{underStandBlockChain.marketcontent1}</li>
    <li className="text-sm px-2">{underStandBlockChain.marketcontent2}</li>
  </ul>
  
  
                   </div>
                    </div>
                    <div className="w-full w-1/2 py-5 mt-4 px-3 ">
                    <p className="text-1xl font-bold px-2">{underStandBlockChain.blockchaininitives}</p>
    <span className="text-sm px-3">{underStandBlockChain.blockchaininitivescontent}</span>
<div className="py-3 px-3">
<ul className="list-disc ml-3">
    <li className="text-sm">{underStandBlockChain.content1}</li> 
    <li className="text-sm">{underStandBlockChain.content2}</li> 
    <li className="text-sm">{underStandBlockChain.content3}</li> 

</ul>
</div>
                    </div>

                </div>

{/* //content 3 */}
<div className="px-3">
<hr/>
</div>
<div className="sm:flex">
    <div className="w-full w-1/2">
<div className="py-3">
    <h3 className="text-xl px-3 py-3">{underStandBlockChain.pds}</h3>
    <p className="text-sm px-3 ">{underStandBlockChain.content4}</p>
</div>
    </div>
    <div className="w-full w-1/2">
    <div className="py-3">
    <h3 className="text-2xl px-3 py-3">{underStandBlockChain.courseoutcomesheader}</h3>
    <p className="text-sm px-3">{underStandBlockChain.content5}</p>
</div>
</div>

</div>
<div className="px-3 py-2">
<hr/>
</div>

{/* //content4 */}
<div>    
<div className="px-3 py-3">
    <h3 className="text-xl">{underStandBlockChain.Trainersheader}</h3>
    </div>
<div className="sm:flex">
    
    <div className="w-full w-1/3">
<div className="">
<img className="ml-3  object-center" src={underStandBlockChain.mohanLogo} alt=""/>
    <p className="text-center text-sm py-3 ">{underStandBlockChain.mohan}</p>
</div>
    </div>
    <div className="w-full w-1/3">
    <div className="">
<img className="ml-3" src={underStandBlockChain.muthulogo} alt=""/>
    <p className="text-center text-sm py-3">{underStandBlockChain.muthu}</p>
</div>
    </div>
    <div className="w-full w-1/3">
    <div className="">
<img className="ml-3" src={underStandBlockChain.umalogo} alt=""/>
    <p className="text-center text-sm py-3 ">{underStandBlockChain.uma}</p>
</div>
    </div>
    <div className="w-full w-1/3">
    <div className="">
<img className="ml-3" src={underStandBlockChain.umalogo} alt=""/>
    <p className="text-center text-sm py-3 ">{underStandBlockChain.uma}</p>
</div>
    </div>

</div>
</div>
{/* //content5 */}
<div className="px-3 py-2">
<hr/>
</div>
<div className="sm:flex">
    <div className="w-full w-3/4 px-3">
    <h3 className="text-2xl py-3">{underStandBlockChain.CourseCurriculumheader}</h3>
    <ul className="list-disc px-3">
    <li className="text-sm">{underStandBlockChain.BlockchainConcepts }</li>
    <li className="text-sm">{underStandBlockChain.blockchainworks}</li>
    <li className="text-sm">{underStandBlockChain.register}</li>
    </ul>
    </div>
    <div className="w-full w-1/4 px-3 mt-12">
        <ul className="list-disc">
    <li className="text-sm">{underStandBlockChain.industry}</li>
    <li className="text-sm">{underStandBlockChain.enterpriseadoption}</li>
        </ul>
    </div>

</div>
{/* //button */}
<div className="w-full flex justify-center py-3">
{/* <button className="bg-blue-600 p">aeqwe</button> */}
<button style={{background:"#422bb2"}} class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  {underStandBlockChain.registerNow}
</button>
</div>
        </div>
    )

}
export default understand_blocjchain