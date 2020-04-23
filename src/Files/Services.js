import React from "react"
import serviceData from "../Datas/Service"
function Services() {
    return (
        <div>
            <div className="text-center bg-blue-100">
                <h4>{serviceData.services}</h4>
                <p>{serviceData.servheadercontent}</p>
            </div>
            <div className='md:flex sm:flex'>
                <div className="w-full w-1/2 p-3">
                    <img src={serviceData.shutterLogo} alt="shutter" />
                </div>
                <div className="w-full w-1/2">
                    <div>
                        <p className="font-bold  px-3 text-xl py-3">{serviceData.BIA}</p>
                        <p className="text-sm p-3">{serviceData.serviceshuter}</p>
                        <p className="text-sm p-3">{serviceData.serviceshuter1}</p>
                    </div>

                    <div className="p-3">
                        <h3>{serviceData.servshuttercont1}</h3>
                        <div className=" py-4">
                            <div className="flex">
                                <div className="flex">
                                    <img className="h-5 w-5" src={serviceData.pdlogo} alt="prlogo" />
                                    <label className="px-2 text-sm">{serviceData.Predictive}</label>
                                </div>
                                <div className="flex">
                                    <img className="h-5 w-5 ml-2" src={serviceData.dglogo} alt="prlogo" />
                                    <label className="px-3 text-sm">{serviceData.Diagnostic}</label>
                                </div>
                                <div className="flex">
                                    <img className="h-5 w-5" src={serviceData.dslogo} alt="prlogo" />
                                    <label className="px-2 text-sm">{serviceData.Descriptive}</label>
                                </div>
                            </div>
                            <div className="flex py-3">
                                <div className="flex">
                                    <img className="h-5 w-5" src={serviceData.prlogo} alt="prlogo" />
                                    <label className="px-2 text-sm">{serviceData.Prescriptive}</label>
                                </div>
                                <div className="flex">
                                    <img className="h-5 w-5" src={serviceData.sblogo} alt="prlogo" />
                                    <label className="px-2 text-sm">{serviceData.SearchBased}</label>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div >

                            </div>

                        </div>
                    </div>


                </div>


            </div>

            {/* //second schutter */}
            <div className="md:flex sm:flex bg-blue-100">
                <div className=" w-full w-1/2 ">
                    <div className="py-3">
                        <p className="font-bold  px-3 text-2xl py-3">{serviceData.BusinessConsulting}</p>
                        <div className="">
                            <p className="text-sm px-3 py-2">{serviceData.secondContent1}</p>
                            <p className="text-sm px-3 py-2">{serviceData.secondContent2}</p>
                            <p className="text-sm px-3 py-2">{serviceData.secondContent3}</p>
                        </div>

                    </div>
                </div>
                <div className=" w-full w-1/2  px-3 py-3">
                    <img src={serviceData.seconShutterLogo} alt="" />
                </div>

            </div>


            {/* //third shutter */}
            <div className='md:flex sm:flex'>
                <div className="w-full w-1/2 p-3">
                    <img src={serviceData.thirdShutterLogo} alt="shutter" />
                </div>
                <div className="w-full w-1/2">
                    <div>
                        <p className="font-bold  px-3 text-xl py-3">{serviceData.TechnologyConsulting}</p>
                        <p className="text-sm p-3">{serviceData.tecText}</p>
                    </div>
                </div>
            </div>

            {/* //fourth shutter */}
            <div className="bg-blue-100">
                <div className="md:flex sm:flex ">
                    <div className=" w-1/2 ">
                        <div className="p">
                            <p className="font-bold  px-3 text-2xl py-3">{serviceData.InfrastructureManagement}</p>
                            <div className="py-2">
                                <p className="text-sm px-3 py-2">{serviceData.imText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="  w-1/2  px-3 py-3">
                        <img className="" src={serviceData.infraLogo} alt="" />
                    </div>

                </div>
                <div className="px-3">
                    <h3>{serviceData.headingIm}</h3>
                    <div className=" py-4">
                        <div className="md:flex sm:flex">
                            <div className=" flex">
                                <img className="h-5 w-5" src={serviceData.serviceDeskLogo} alt="prlogo" />
                                <label className="px-2 text-xs">{serviceData.ServicDesk}</label>
                            </div>
                            <div className="flex">
                                <img className="h-5 w-5 " src={serviceData.ENSlogo} alt="prlogo" />
                                <label className="px-2 text-xs">{serviceData.EnterpriseNetworkServices}</label>
                            </div>
                            <div className="flex">
                                <img className="h-5 w-5" src={serviceData.CloudServicesLogo} alt="prlogo" />
                                <label className="px-2 text-xs">{serviceData.CloudServices}</label>
                            </div>
                        </div>
                        <div className="sm:flex py-3">
                            <div className="flex">
                                <img className="h-5 w-5" src={serviceData.SISlogo} alt="prlogo" />
                                <label className="px-2 text-xs">{serviceData.SystemIntegrationServices}</label>
                            </div>
                            <div className="flex">
                                <img className="h-5 w-5" src={serviceData.IESLogo} alt="prlogo" />
                                <label className="px-2 text-xs">{serviceData.InfrastructureEngineeringServices}</label>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div >

                        </div>

                    </div>
                </div>
            </div>
            {/* Fifth shutter */}
            <div className='md:flex sm:flex'>
                <div className="w-full w-1/2 p-3">
                    <img src={serviceData.EducationLogo} alt="shutter" />
                </div>
                <div className="w-full w-1/2">
                    <div>
                        <p className="font-bold  px-3 text-xl py-3">{serviceData.Education}</p>
                        <p className="text-sm p-3">{serviceData.innerContentEdu1}</p>
                        <p className="text-sm p-3">{serviceData.innerContentEdu2}</p>
                        <p className="text-sm p-3">{serviceData.innerContentEdu3}</p>

                    </div>

                </div>
            </div>
            <div className="w-full text-center py-3">
                <h3 className="font-bold">{serviceData.session}</h3>
                <div className="flex w-full justify-center">

                    <div className="w-1/4 text-right">
                        <img src={serviceData.helpblockChainlogo} alt="" />

                    </div>
                    <div className="w-3/4">
                        <p>{serviceData.helpblockChainText}</p>

                    </div>

                </div>
                <div className="flex w-full justify-center">
                    <div className="w-1/4 text-right">
                        <img src={serviceData.underStandlogo} alt="" />
                    </div>
                    <div className="w-3/4">
                        <p>{serviceData.understandText}</p>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <img src={serviceData.LeadershipPieceLogo} alt="" />
                    <p>{serviceData.LeadershipPieceText}</p>
                </div>
                <div className="flex w-full justify-center">
                    <img src={serviceData.explainBlockChainlogo} alt="" />
                    <p>{serviceData.explainBlockChainText}</p>
                </div>
                <div className="flex w-full justify-center">
                    <img src={serviceData.aspectsBlockchainLogo} alt="" />
                    <p>{serviceData.aspectsBlockchainText}</p>
                </div>

            </div>

        </div>
    )
}
export default Services