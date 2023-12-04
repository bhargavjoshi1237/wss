"use client"
import 'material-icons/iconfont/material-icons.css'
import { useState,useEffect } from "react"
import MyDivComponent from './tickite';
import { createClient } from '@supabase/supabase-js';
const AWS = require('aws-sdk');
import { S3Client } from "@aws-sdk/client-s3";
import { ListBucketsCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { NhostClient, NhostProvider } from '@nhost/react'
// import { createClient } from '@nhost/storage';


export default function(){
const [userxp , setUserxp] = useState();
const [imgids , setImgids] = useState();
const [selectedFile, setSelectedFile] = useState(null);
const [imageSrc, setImageSrc] = useState('https://animealley.online/dp.jpg');
const [location, setLocation] = useState('Vadodara India');
const [temp, setTemp] = useState('C');
const [submitpfp, setSubmitpfp] = useState(false);
const [city, setCity] = useState('');
const [noti, setNoti] = useState('True');
const [theam, setTheam] = useState('Dark');
const [name, setName] = useState('');
const [tik, setTik] = useState('');
const [join, setJoin] = useState('');
const [pro, setPro] = useState('FREE');
const [noloc, setNoloc] = useState(false);
const [isChecked, setIsChecked] = useState(false);
const [istempChecked, setIstempChecked] = useState(false);
const supabase = createClient('https://jfqepsctuctrnuwwfuqr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcWVwc2N0dWN0cm51d3dmdXFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTYzMjU5MywiZXhwIjoyMDE1MjA4NTkzfQ.N3lWQ2JjdsQ4s-upUhrn8wyn-BuSafcvKKr-g-J4GiY');
useEffect(() => {
  if (typeof window !== 'undefined') {
  // Use the useEffect hook to update the state when the component mounts
  setUserxp(window.sessionStorage.getItem('user'));
  
  }
}, []);
 
const nhost = new NhostClient({
  subdomain: 'unmbpgywyfnkrhckmtji',
  region: 'ap-south-1'
})

// const s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
//   accessKeyId: 'ySzIegXWIIUIVC6b',
//   secretAccessKey: 'lJ3emxFHe3uQRpUuHJWdeCUkmbhYKQVy8IKaPB1q',
//   endpoint: 'https://s3.tebi.io',
//   region: 'us-east-1',
//   s3ForcePathStyle: true
// });


const credentials = {
  accessKeyId: "ySzIegXWIIUIVC6b",
  secretAccessKey: "lJ3emxFHe3uQRpUuHJWdeCUkmbhYKQVy8IKaPB1q"
};

const s3Client = new S3Client({
  endpoint: "https://s3.tebi.io",
  credentials: credentials,
  region: "global"
});




  const sendNotification = async () => {
    try {
      const response = await fetch(`https://oga.onrender.com/set/notification/${window.sessionStorage.getItem('user')}`);      
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const changeunit = async () => {
    try {
      const response = await fetch(`https://oga.onrender.com/set/unit/${window.sessionStorage.getItem('user')}`);      
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } 

  const handletick = () => {
    console.log('Component clicked!');
    // Add your logic here
  };

const fileshit = (event) => {
  const file = event.target.files[0];
  console.log(submitpfp)
  setSubmitpfp(!submitpfp);
  console.log(submitpfp)
  
}
const handleFileChange = (event) => {
  console.log(submitpfp)
  setSubmitpfp(!submitpfp);
  console.log(submitpfp)
  const file = event.target.files[0];
  setSelectedFile(file);
  console.log(file)
//  async function wxx() {
//   const fileName = 'example.jpg'; // Specify the desired file name
//   nhost.storage.upload('/', fileName, file)
//   .then(response => {
//     console.log('File uploaded successfully:', response);
//   })
//   .catch(error => {
//     console.error('Error uploading file:', error);
//   });

// }
// wxx();
};



console.log(`pfp/${imageSrc}`)


const { data, error } = supabase.storage
  .from('pfp')
  .createSignedUrl('pfp.jpg', 3600)
  if (data) {
    console.log(data.signedUrl)
  }

  const handleUpload = async () => {


    const { error: deleteError } = await supabase.storage.from('pfp').remove([`pfp/${imgids}`]);


    if (deleteError) {
      console.error('Error deleting existing file:', deleteError);
      setSubmitpfp(!submitpfp);
      // Handle error while deleting existing file
      return;
    }
  



    if (!selectedFile) {
      alert('Please select a file');
      return;
    }
const fid = Math.floor(10000 + Math.random() * 90000);
    const filePath = `pfp/${fid}`;
    const jpgFile = new File([selectedFile], `${fid}.jpg`, { type: 'image/jpeg' });
    // Upload file using standard upload
    const { data, error } = await supabase.storage.from('pfp').upload(filePath, jpgFile, { upsert: true});

    if (error) {
      console.error('Error uploading file:', error);
      setSubmitpfp(!submitpfp);
      // Handle error
    } else {
      console.log('File uploaded successfully:', data);
      setSubmitpfp(!submitpfp);
      
      // Handle success
      const publicUrl = supabase.storage.from('pfp').getPublicUrl(filePath)
     
      try {
        const response = await fetch(`https://oga.onrender.com/set/pfp/${window.sessionStorage.getItem('user')}/${fid}`);      
        console.log(response)
        setImageSrc(publicUrl.data.publicUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
 

    }

  };

const uploadfile = async () => {
  console.log("Logic For Uploading PFP and getting url and updateing it to the database")
}

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://wsapi.up.railway.app/get/user/${window.sessionStorage.getItem('user')}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json()
      setImgids(data.pfp);
      setImageSrc("https://jfqepsctuctrnuwwfuqr.supabase.co/storage/v1/object/public/pfp/pfp/"+data.pfp);
      setName(data.name);
      setTik(data.tickets)
      setJoin(data.entry_date);
      setIstempChecked(data.celsius);
      setCity(data.location[1].city);
      setLocation(data.location[0].country);
      setIsChecked(data.notifications); 
      setNoloc(noti)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
const handleCheckboxChange = async () => {
  setIsChecked(!isChecked);
  await sendNotification();
  console.log("Notification has changed");
};

const handletempCheckboxChange = async () => {
  setIstempChecked(!istempChecked);
  await changeunit();
  console.log("Temp Unit has changed");
};

// FORMATEING DATE------------------------------
const date = new Date(join);
const day = date.getDate();
const month = date.getMonth() + 1; 
const year = date.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
// FORMATEING DATE ----------------------------





const proStatusText = pro ? "PRO" : "FREE";
    return(
      <>
      <center>
       <div  style={{width:"100%"}}>
        
        <div  className='columns-4 top-0 right-0 grid grid-cols-10 gap-4'  >
          
          
          <img loading="eager" className="h-8" style={{width:"70px", height:"70px", marginLeft:"50%",paddingTop:"25px"}} src="https://res.cloudinary.com/dwgt1fwjg/image/upload/v1699709370/yhtgtr2tegibimur6djj.png" alt="" />
          {/* <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"#F9FAFB", fontSize:"18px",marginLeft:"180px", paddingTop:"33px", fontFamily:'Openr',width:"100px"}}>YouTube</h2>
          <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"#F9FAFB", fontSize:"18px",marginLeft:"120px", paddingTop:"33px", fontFamily:'Openr',width:"100px"}}>Games</h2>
          <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"#F9FAFB", fontSize:"18px",marginLeft:"50px", paddingTop:"33px", fontFamily:'Openr',width:"100px"}}>Space</h2>
          <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"#F9FAFB", fontSize:"18px",marginLeft:"-25px", paddingTop:"33px", fontFamily:'Openr',width:"100px"}}>Blogs</h2> */}
          <div className="flex items-center">
            <div className="flex space-x-1 absolute top-7 right-5">
             
            <div><p  style={{color:"white",fontFamily:"Openr",marginTop:"7px",marginRight:"20px"}}>{window.sessionStorage.getItem('user')}</p>
           </div>
      
                <img src={imageSrc} alt="" style={{height:"40px",borderRadius:"50px",marginRight:"15px"}}/>
                {/* <span style={{marginTop:"7px",marginLeft:"10px"}} className="material-icons">language</span> */}
            </div>
        </div>
        
         </div> <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr></div>
         <br />
     <div className='flex' style={{width:"90%"}}>
<h2 className='float-left' style={{fontFamily:"Open",fontSize:"35px"}}>Your Account</h2><br /><br /><br /><br />

     </div></center><br />
  {/* <div  className='flex' style={{marginLeft:"5%", marginRight:"5%"}}>
<div style={{width:"100%",height:"300px",borderColor:"white",borderStyle:"solid",borderWidth:"1px",borderRadius:"15px", marginRight:"30px"}}>
<div className='flex' style={{}}> <img src="https://animealley.online/dp.jpg" style={{width:"70px",marginLeft:"40px",marginTop:"40px",borderRadius:"50px"}} alt="" />
<h3 style={{fontFamily:"Open",marginLeft:"40px",marginTop:"50px",fontSize:"30px"}}>{user}</h3>
</div>
</div>
<div style={{width:"100%",height:"300px",borderColor:"white",borderStyle:"solid",borderWidth:"1px",borderRadius:"15px" }}>
 
</div>
  </div> */}

  <section className="w-full" style={{marginLeft:"5%", marginRight:"5%"}}>
  <div className="flex px-4 md:px-6" >
    <div className=" grid gap-8 lg:grid-cols-2" style={{width:"90%"}}>
      <div style={{borderColor:"#333333",borderStyle:"solid",borderWidth:"1px",borderRadius:"11px"}}>
        <div className="flex items-center justify-between space-x-4" style={{marginLeft:"20px",marginTop:"20px", marginRight:"20px"}} >
          <div className="flex items-center space-x-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
               <img src={imageSrc} alt="" />
              </span>
            </span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="text-xl font-semibold"><p style={{fontFamily:"Openr",marginLeft:"5px"}}>{window.sessionStorage.getItem('user')}</p></div>
                <span style={{marginLeft:"15px"}} className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{proStatusText}</span>
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {city} , {location}
              </div>
            </div>
          </div>
          <div  className="flex items-center space-x-4">
          <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-gray-700 text-white rounded-md px-3 py-1">
              Update Location
            </button>
          
            <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <h2>Location Updeted Sucsessfully</h2>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-gray-700 text-white rounded-md px-3 py-1">
              Edit profile
            </button>
            <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Edit Your Profile</h3>
    <p className="py-4">Change PFP</p>
    <br />
    <input type="file"  onChange={handleFileChange}  className="file-input file-input-bordered w-full max-w-xs" />
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        
        {submitpfp && (
        <button className="btn" hidden={submitpfp} onClick={handleUpload} style={{marginRight:"5px"}}>Submit</button>
      )}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-gray-700 text-white rounded-md px-3 py-1">
              Share profile
            </button>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <ul className="flex justify-center mt-5 space-x-5">
    <li>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"></path>
            </svg>
        </a>
    </li>
    <li>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"></path>
            </svg>
        </a>
    </li>
    <li>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
            </svg>
        </a>
    </li>
    </ul>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row" ,marginLeft:"20px",marginTop:"20px", marginRight:"20px"}}  className=" mt-4 space-y-4">
         
        <div style={{ marginBottom:"20px", marginTop: "20px", marginLeft: "20px", display: "flex", flexDirection: "column", width:"50%" }}>
  <h2 style={{fontSize:"18px", fontFamily:"Open"}}>Account Information</h2>
  <h4 className='float-left' style={{ marginTop: "5px" }}>
    <b>ID:</b> {window.sessionStorage.getItem('user')}
  </h4>
  <h4 className='float-left' style={{}}>
    <b>Name:</b> {name}
  </h4>
  <h4 className='float-left' style={{}}>
    <b>Joining Date:</b> {formattedDate}
  </h4>
  <h4 className='float-left' style={{}}>
    <b>Location:</b> {city},{location}
  </h4>
</div>   


{/* <div style={{ marginBottom:"10px", marginTop: "15px", marginLeft: "8%", display: "flex", flexDirection: "column", width:"50%" }}>
  <h2 align="left" style={{marginLeft:"10%",fontSize:"25px", fontFamily:"Open"}}>Total Tickets Submited</h2><center>
  <h2 style={{fontSize:"65px", fontFamily:"Open"}}>10</h2></center>
</div>  */}


{/* TICKIT LOADING UI  */}
          {/* <div className="mt-4 space-y-4" style={{marginLeft:"20px"}}>
          <div style={{width:"300px"}} className="rounded-lg border border-zinc-200 p-4 md:p-6 dark:border-zinc-800">
            <h2 className="text-lg font-semibold">
              Previous Weather Information
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" h-6 w-6"
              >
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              </svg>
              <p className="text-sm">Temperature: 20°C</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" h-6 w-6"
              >
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
              </svg>
              <p className="text-sm">Wind: 10 km/h</p>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" h-6 w-6"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>
              <p className="text-sm">Cloud Density: Moderate</p>
            </div>
          </div>
        </div> */}


<br />

        </div>
  <p style={{marginBottom:"20px"}}></p>      
      </div>
      <div style={{borderColor:"#333333"}} className="rounded-lg border p-4 md:p-6 dark:border-zinc-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <label style={{fontFamily:"Open"}}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="temperature"
            >
              Temperature Unit
            </label>
            <br />
           <div className='flex'> <p style={{marginTop:"10px", marginRight:"10px"}}>F</p> <input style={{marginTop:"10px"}} type="checkbox"  checked={istempChecked} onChange={handletempCheckboxChange} className="toggle"  />
           <p style={{marginTop:"10px", marginLeft:"12px"}}>C</p>
           </div>
               </div>
      
          <div style={{marginTop:"25px"}} className="space-y-2">
            <label style={{fontFamily:"Open"}}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="notifications"
            >
              Notifications
            </label>
            <br />
            <div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Receive Notifications</span> 
 
      <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="toggle toggle-accent" 
        />
    </label>
  </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="theme"
            >
              Theme
            </label>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:rad:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              data-placeholder=""
              className="dropdown dropdown-bottom flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span style={{ pointerEvents: "none" }}>Select theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
  </ul>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className='flex mt-7' style={{width:"90%"}}>
<h2 className='float-left ml-24' style={{fontFamily:"Open",fontSize:"35px"}}>User Tickets</h2><br /><br /><br /><br />

     </div>
<center>
<div style={{ width:"85%", marginTop:"20px"}} className="flex items-center">
<MyDivComponent idx={4} corf="C" user={window.sessionStorage.getItem('user')} temp={13} cloud={9} wind={12} tlink="/random-tickite-1" date="10/10/23" location="New York, Central Park"/>

{/* <MyDivComponent onClick={handletick}  idx={13}  corf={"C"} user={window.sessionStorage.getItem('user')} temp={"10"} cloud={15} wind={12} tlink={"/tickite"} date={"10/10/23"} location={"New York, Central Park"}/>
<MyDivComponent idx={11} corf="C" user={window.sessionStorage.getItem('user')} temp={Math.floor(Math.random() * (30 - 10 + 1)) + 10} cloud={Math.floor(Math.random() * (50 - 10 + 1)) + 10} wind={Math.floor(Math.random() * (20 - 5 + 1)) + 5} tlink="/random-tickite-1" date="10/10/23" location="New York, Central Park"/>
<MyDivComponent idx={10} corf="C" user={window.sessionStorage.getItem('user')} temp={Math.floor(Math.random() * (30 - 10 + 1)) + 10} cloud={Math.floor(Math.random() * (50 - 10 + 1)) + 10} wind={Math.floor(Math.random() * (20 - 5 + 1)) + 5} tlink="/random-tickite-2" date="10/10/23" location="New York, Central Park"/>

<MyDivComponent idx={"09"} corf="C" user={window.sessionStorage.getItem('user')} temp={Math.floor(Math.random() * (30 - 10 + 1)) + 10} cloud={Math.floor(Math.random() * (50 - 10 + 1)) + 10} wind={Math.floor(Math.random() * (20 - 5 + 1)) + 5} tlink="/random-tickite-3" date="10/10/23" location="New York, Central Park"/> */}


</div>
          </center>

<div style={{height:"100px"}}></div>


<footer style={{backgroundColor:"#212121", width:"100%"}} className="bg-white rounded-lg shadow  m-4">
    <div className="w-full  mx-auto p-4 md:py-8" style={{width:"96%"}}>
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://res.cloudinary.com/dwgt1fwjg/image/upload/v1699709370/yhtgtr2tegibimur6djj.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather Spheares</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Weather Spheares™</a>. All Rights Reserved.</span>
    </div>
</footer>


     </>
    )
    // use upstash and supabase account page for refrance
  
  }

  