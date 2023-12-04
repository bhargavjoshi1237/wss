"use client"
import Cookies from 'universal-cookie';
import React, { useState,useEffect } from 'react';


export default function(){
  const cookies = new Cookies(); 
  
  const [token, setToken] = useState(false);          
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [stat, setStat] = useState('');
    const [vis, setVis] = useState(false);
  const rando = Math.floor(Math.random()*90000)
    const handleNameChange = (event) => {
      
      setName(event.target.value);
      
      
    };

    // useEffect(() => {
    //   let ignore = false;
    //   if (window.sessionStorage.getItem("user")  !== "") {
    //     if (cookies.get('login') !== "undefined") {
        
    //       async function op() {
    //         try {
    //           const response = await fetch(`https://just-warthog-38772.upstash.io/get/${cookies.get('login')}`, {
    //             headers: {
    //               Authorization: "Bearer AZd0ACQgODI2NDg1MmItNzhlNC00NjU5LTkzYjgtOGYwODM0NmFiM2I0NDFjZDY0ODM1NGU3NDNiZWI3YTYzYWFlMmE1MmRiNGE="
    //             }
    //           });
    //           const data = await response.json();
    //           console.log(data)
    //           if (data.result != "null") {window.sessionStorage.setItem("user", data.result )  }
              
    //         } catch (error) {
    //           console.error('Error:', error);
    //         }
            
    //       }op()
    //     }
    //     else{console.log("Coockies Not Found Need TO Login")}
    //   }
    //   else{}
    //   return () => { ignore = true; }
    //   },[]);


 useEffect(() => {
  document.body.style.overflow = 'hidden';
  let ignore = false;

  const fetchData = async () => {
    try {
      // Check if user data is already in session storage
      const existingUserData = window.sessionStorage.getItem("user");

      if (!existingUserData) {
        const loginCookie = cookies.get('login');

        if (loginCookie && loginCookie !== "undefined") {
          const response = await fetch(`https://just-warthog-38772.upstash.io/get/${loginCookie}`, {
            headers: {
              Authorization: "Bearer AZd0ACQgODI2NDg1MmItNzhlNC00NjU5LTkzYjgtOGYwODM0NmFiM2I0NDFjZDY0ODM1NGU3NDNiZWI3YTYzYWFlMmE1MmRiNGE="
            }
          });

          const data = await response.json();
          console.log(data);

          if (data.result !== "null") {
            // Set user data in session storage
            window.sessionStorage.setItem("user", data.result);
            window.location.href = '/';
          }
        } else {
          console.log("Cookies Not Found. Need to Login");
        }
      }
      else{window.location.href = '/';}
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  return () => {
    ignore = true;
  };
}, []);




    const handleEmailChange = (event) => {
      setEmail(event.target.value);    }; 

      function showredwarning() {
        setVis(true);
        const timer = setTimeout(() => {
          setVis(false);
          // console.log("ww")
        }, 2000);
      };

      const seecheck = () => {setToken(!token);}

      // useEffect(() => {
      //   const timer = setTimeout(() => {
      //     setV(true);
      //   }, 5000); // 5000 milliseconds = 5 seconds
    
      //   // Clear the timer when the component unmounts or when the dependency changes
      //   return () => clearTimeout(timer);
      // }, []); 

// const trylogin =  async () => {

//   try {
//   fetch(`https://tender-lamb-35092.upstash.io/exists/${email}`, {headers: { Authorization: "Bearer AYkUACQgMGI1MTljNGMtMWIyYy00MDE0LWEzNWYtMmUxM2U2ZmQyNzcwNzMwMTZiNDhkNWJmNGM2OTllZmI4NmFiODkwMTc4OWI="}})
// .then(response => response.json())
// .then(data => console.log(data.result));
//   } catch (error) {
//     console.log(error)
//   }

// }
async function tokengen() {
 
    try {
      const response = await fetch(`https://just-warthog-38772.upstash.io/set/${rando}/${email}`, {
        headers: {
          Authorization: "Bearer AZd0ACQgODI2NDg1MmItNzhlNC00NjU5LTkzYjgtOGYwODM0NmFiM2I0NDFjZDY0ODM1NGU3NDNiZWI3YTYzYWFlMmE1MmRiNGE="
        }
      });
      const data = await response.json();
      if (data.result === "OK") {
        cookies.set('login', rando, { path: '/' });
        console.log(rando)
        ttltoken()
      } 
       else if (data.result === 0) {
        console.log('Issue With Token Genration');
        showredwarning()
        // console.log('Not Success');
        
      } else {
        console.log('User Error');
        // console.log('Unexpected result:', data.result);
        
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
}

async function ttltoken() {
  try {
    const response = await fetch(`https://just-warthog-38772.upstash.io/EXPIRE/${rando}/864000`, {
      headers: {
        Authorization: "Bearer AZd0ACQgODI2NDg1MmItNzhlNC00NjU5LTkzYjgtOGYwODM0NmFiM2I0NDFjZDY0ODM1NGU3NDNiZWI3YTYzYWFlMmE1MmRiNGE="
      }
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

  const openLink = () => {
    // Replace 'https://example.com' with the actual URL you want to open
    window.open('https://x.com', '_blank');
  };

  const loginsuc = () => {
    window.sessionStorage.setItem("user", email );
    // Replace 'https://example.com' with the actual URL you want to open
    window.location.href = '/';
  };

async function xpx() {
  try {
    const response = await fetch(`https://tender-lamb-35092.upstash.io/exists/${email}`, {
      headers: {
        Authorization: "Bearer AYkUACQgMGI1MTljNGMtMWIyYy00MDE0LWEzNWYtMmUxM2U2ZmQyNzcwNzMwMTZiNDhkNWJmNGM2OTllZmI4NmFiODkwMTc4OWI="
      }
    });
    const data = await response.json();
    if (data.result === 1) {
      console.log('Found User');
      tokengen()
      xpxr()
      function handleButtonClick() {
        // setStat("Sucsess");
      };
      handleButtonClick()
    } else if (data.result === 0) {
      console.log('User Not Found');
      showredwarning()
      // console.log('Not Success');
      
    } else {
      console.log('User Error');
      // console.log('Unexpected result:', data.result);
      
      
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function xpxr() {
  try {
    const response = await fetch(`https://tender-lamb-35092.upstash.io/get/${email}`, {
      headers: {
        Authorization: "Bearer AYkUACQgMGI1MTljNGMtMWIyYy00MDE0LWEzNWYtMmUxM2U2ZmQyNzcwNzMwMTZiNDhkNWJmNGM2OTllZmI4NmFiODkwMTc4OWI="
      }
    });
    const data = await response.json();
    if (data.result === name) {
      // console.log(data.result)
      console.log('Password Correct');
      const timer = setTimeout(() => {
        loginsuc()
      }, 200);
      
    }  else {
      showredwarning()
      console.log('Password Wrong');
      
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

return(
  <>
  <div className='mt10'><p style={{fontSize:"1px"}}>.</p></div>
  <center style={{marginTop:"150px", }}>
    {vis && <div style={{ display: 'block' }} className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Wrong Password</span> - reset your password if you cant remember</div>}
    
<br />
<br />
    <img src="https://res.cloudinary.com/dwgt1fwjg/image/upload/v1699709370/yhtgtr2tegibimur6djj.png" style={{width:"120px", marginBottom:"40px"}} alt="" />
    {/* <p style={{marginBottom:"10px"}}>Login to Weather Spheares</p> */}
  {/* <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label> */}
<div style={{width:"350px"}} className="relative mb-6">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input value={email} onChange={handleEmailChange} type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" />
</div>
{/* <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label> */}
<div style={{width:"350px"}} className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
  </span>
  <input value={name} onChange={handleNameChange} type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
</div>
<br />

<button onClick={xpx}  style={{width:"350px"}} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
<br  />
<div style={{marginTop:"5px"}}>
    <input id="link-checkbox" type="checkbox" checked={token} onChange={seecheck} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label style={{paddingBottom:"10px"}} htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember  <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>

<br />

<br />  
<b><p style={{marginTop:"30px",fontFamily:"'Open'",fontSize:"15px"}}>Or Login Using Socials</p></b>

<button style={{marginTop:"15px"}} type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">


<img onClick={openLink} style={{height:"30px", width:"30px"}}  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgo8cGF0aCBkPSJNIDExIDQgQyA3LjEzNCA0IDQgNy4xMzQgNCAxMSBMIDQgMzkgQyA0IDQyLjg2NiA3LjEzNCA0NiAxMSA0NiBMIDM5IDQ2IEMgNDIuODY2IDQ2IDQ2IDQyLjg2NiA0NiAzOSBMIDQ2IDExIEMgNDYgNy4xMzQgNDIuODY2IDQgMzkgNCBMIDExIDQgeiBNIDEzLjA4NTkzOCAxMyBMIDIxLjAyMzQzOCAxMyBMIDI2LjY2MDE1NiAyMS4wMDk3NjYgTCAzMy41IDEzIEwgMzYgMTMgTCAyNy43ODkwNjIgMjIuNjEzMjgxIEwgMzcuOTE0MDYyIDM3IEwgMjkuOTc4NTE2IDM3IEwgMjMuNDM3NSAyNy43MDcwMzEgTCAxNS41IDM3IEwgMTMgMzcgTCAyMi4zMDg1OTQgMjYuMTAzNTE2IEwgMTMuMDg1OTM4IDEzIHogTSAxNi45MTQwNjIgMTUgTCAzMS4wMjE0ODQgMzUgTCAzNC4wODU5MzggMzUgTCAxOS45Nzg1MTYgMTUgTCAxNi45MTQwNjIgMTUgeiI+PC9wYXRoPgo8L3N2Zz4="/>


</button>
<img src="" className='mt-56 max-h-32' alt="" />
</center>

</>
)
  

}





