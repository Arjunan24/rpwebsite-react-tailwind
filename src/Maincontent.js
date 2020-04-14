import React from "react"
import homeData from "./Datas/Home_page"

function mainContent(){
    return(
<div className="flex ">
    <div className=" w-full md:w-1/2 h-screen">

<div className="flex  py-3">
  <img className="w-16 h-16 m-2" src={homeData.rlogo} alt="rapidimage"/>  
<div className="ml-3">
<div className='flex p-2 text-sm w-full ml-3 border-b-2 border-gray-600'>
    <div className="w-full w-1/3">
<h3>Product and solution</h3>
    </div>
    <div className=" w-full w-1/3">
<h3>Whitepaper</h3>
    </div>
    <div className=" w-full w-1/3">
<h3>Framework</h3>
    </div>
</div>
<div className="flex text-sm w-full justify-between ml-3 p-3 border-b-2 border-gray-600">
<div className="w-full w-1/3">
    <h3>{homeData.habout}</h3>
    </div>
    <div className=" w-full w-1/3">
<h3>{homeData.hcontactus}</h3>
    </div>
    <div className=" w-full w-1/3">
    <h3>{homeData.hcarrer}</h3>
    </div>
</div>
</div>

</div>
<div className=" mt-10 p-3">
    <p className="text-2xl font-light">{homeData.headtext}</p>
<p className="text-4xl leading-tight font-bold">{homeData.htextblock}</p>
<p className="text-sm">{homeData.hparagraph}</p>

</div>
    
    <div className="p-3">
    <h3 >{homeData.ourSpec}</h3>
        <div className="flex justify-around ">
<div className="w-full w-1/4">
    <h3>Etherum</h3>
</div>
<div className="w-full w-1/4">
    <h3>Hyperledger</h3>
</div>
<div className="w-full w-1/4">
    <h3>Multichain</h3>
</div>
<div className="w-full w-1/4">
    <h3>Nem</h3>
</div>
</div>
    </div>
    
    
    </div>
    <div className="w-full  md:w-1/2 h-screen">
    <img className="h-screen" src={homeData.hbannerlogo} alt="header_banner"/>
    </div>

</div>

  )
}
export default mainContent