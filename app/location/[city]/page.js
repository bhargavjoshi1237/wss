'use client'

import { useParams } from 'next/navigation'
export default function () {
    const params = useParams()
    console.log(params)


    
    return <>
   
    <div className='flex' style={{width:"100%", marginTop:"20px"}}>
    <img className='ml-10 ' src="https://animealley.online/xd.svg" style={{width:"63px",height:"41px"}} alt="" />
 <div className="input-container" style={{marginLeft:"35%"}}>
      <input type="text" placeholder="Search City..." />
      <span className="icon mb-2 ml-4 material-icons">search</span>
    </div>
    <span className="mt-2 material-icons" style={{marginLeft:"18.2%"}}>
location_on
</span>
<b><h4  className='mt-3 ml-2'>Vadodara, India</h4></b>
<span class="mt-2 ml-4 material-icons">
notifications
</span>
<span class="mt-2 ml-4 material-icons">
arrow_drop_down
</span>
<b><h4  className='mt-3 ml-2 '>Bhargav Joshi</h4></b>
<img className='ml-8 mt-1.5' src="https://animealley.online/dp.jpg" style={{width:"35px", height:"35px", borderRadius:"50px"}} alt="" />
    </div>
    <center>
  
   <div style={{marginTop:"80px"}}><img src="https://animealley.online/hr.svg" style={{height:"130px", width:"150px",filter:"invert(1) brightness(10) contrast(100)"}} alt="" /></div>

   <hr style={{width:"23%"}} className="mt-9 h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
   <b>  <p className='mt-8' style={{ fontSize: "100px", fontFamily: "Open", display: "inline-block" }}>22°</p>  <p style={{ fontSize: "100px", fontFamily: "Open", display: "inline-block" }}>C</p></b>
    <p className='mb-10 mt-3' style={{fontFamily:"Open", fontSize:"17px"}}>Vadodara, India</p>
    <div className='mt-6' style={{backgroundColor:"black", height:"65px", width:"300px", borderRadius:"50px"}}>
    <b><p className='mt-5 mr-8 float-right' style={{color:"white",fontFamily:"Openr"}}>Air Quality</p></b>
<div className="float-left" style={{backgroundColor:"white", width:"160px", height:"65px", borderRadius:"50px" }}>
    <b><p className='mt-5' style={{color:"black",fontFamily:"Openr"}}>Temprature</p></b>
</div>
    </div>

    <hr style={{width:"100%"}} className="mt-20 h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>

<center>
    <div style={{fontFamily:"Open", marginLeft:"38.5%"}} className='flex mt-12'>
        <p className='ml-6 text-2xl'>Today</p>
        <p className='ml-6 text-2xl'>Tomorow</p>
        <p className='ml-6 text-2xl'>Next 5 Days</p>
        <span className="material-icons mt-1.5 ml-1">arrow_forward</span></div>
</center></center>
<div className='mt-24 ml-16' style={{height:"600px", width:"40%", backgroundColor:"black", borderRadius:"15px"}}>

    <p className='float-left text-4xl ml-7 mt-5'  style={{fontFamily:"Open"}}  >Current Summary</p>
    <p className='float-left text-1xl ml-7 mt-5'  style={{fontFamily:"Open"}}  >Current Summary</p>

</div>
    

    


    
    </>

}