// MyDivComponent.js
import React, { useEffect, useState } from 'react';




const MyDivComponent = ({id,idx,  pfp , user, location, date , temp , cloud , wind, tlink,corf}) => {


  const [userxp , setUserxp] = useState();


 async function x(){
  try {
    const response = await fetch(`https://wsapi.up.railway.app/get/ticket/id/${idx}`);     
    console.log(response)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }

  useEffect(() => {
    x(); // Call the function when the component mounts
  
    // If you need to clean up something when the component unmounts,
    // you can return a cleanup function from useEffect
    return () => {
      // Cleanup logic here (if needed)
    };
  }, []);


 
  

  return (
<div onClick={()=>document.getElementById('tiket').showModal()}  className='ml-3 p-4 hover:transform hover:scale-105 transition-transform duration-300' style={{borderColor:"#333333", borderWidth:"1px", borderStyle:"solid", width:"210px"}}>
<dialog id="tiket" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<center>
<h2 className='mt-3' style={{fontFamily:"Open", fontSize:"25px"}}>{temp}°{corf}</h2>
<img src={`https://openweathermap.org/img/wn/${idx}d@2x.png`} alt="" />

<div className='flex'>
<div className='rows-2 flex ml-5 mr-2'>
<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        
        className=" h-6 w-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
      <p style={{fontFamily:"Open"}}>{cloud}%</p>
</div>

<div className='rows-2 flex'>
<svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" h-6 w-6 ml-2"
      >
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
      </svg>
      <div className="flex"><p style={{fontFamily:"Open"}}>{wind}</p><p style={{fontSize:"12px",marginTop:"3px"}}>KM/h</p></div>
</div>
</div>
</center>
<div className=" " style={{fontFamily:"Open"}}>
  <p className='mt-3 ml-3 mr-3'>{date}</p>
<p className='mt-1 mb-3 '>{location}</p>
</div>
</div>









  );
};

export default MyDivComponent;
