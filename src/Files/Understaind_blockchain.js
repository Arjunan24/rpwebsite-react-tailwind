import React from "react";
 import underStandBlockChain from "../Datas/Understanding_blockchain"

function understand_blocjchain() {
    return(
        <div>
            <div className="sm:flex w-full border-b-0" style={{background:`url(${underStandBlockChain.backgroundCImg})`}}>
<div className="w-3/5 px-3">
<div className="py-5">
    <h2 className="text-white px-3 text-3xl">{underStandBlockChain.understandingblockchain}</h2>
    <h3 className="text-white px-3 text-5xl">{underStandBlockChain.blockchaintext}</h3>

</div>
<div className="py-5 ">
    <p className="text-white px-3 text-sm">{underStandBlockChain.blockheadercontent}</p>
</div>
<div className="py-1 px-5 mt-5 ">
<img className="mt-5 w-48 h-48 " src={underStandBlockChain.blockchainHeaderlogo} alt=""/>
</div>
</div>
<div className="sm:flex items-center w-1/2 px-4 py-5 mt-40">
<div className="max-w-sm  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-3 py-10">
    <p className="p-2 text-xs">{underStandBlockChain.whotakecourse}</p>
    <hr/>
    <p className="p-2 text-xs">{underStandBlockChain.whycourse}</p>
    <hr/>
    <p className="p-2 text-xs">{underStandBlockChain.marketblockchain}</p>
    <hr/>
    <p className="p-2 text-xs">{underStandBlockChain.programduration}</p>
    <hr/>
    <p className="p-2 text-xs">{underStandBlockChain.courseoutcomes}</p>
    <hr/>
    <p className="p-2 text-xs" >{underStandBlockChain.Trainers}</p>
    <hr/>
    <p className="p-2 text-xs">{underStandBlockChain.CourseCurriculum}</p>
    </div>

</div>
</div>
            </div>
            
            
            <div>
                <h2>sadada</h2>
            </div>
        </div>
    )
    
}
export default understand_blocjchain