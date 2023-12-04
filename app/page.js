"use client"
import './globals.css';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function() {
  const [user, setUser] = useState();
  const [imageSrc, setImageSrc] = useState('https://animealley.online/dp.jpg');
  const [windval, setWindval] = useState("0");
  const [tempval, setTempval] = useState("0");
  const [logedin, setLogedin] = useState(false);
  const [cloudval, setCloudval] = useState("0");
  const [userxp , setUserxp] = useState();
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
            setUser(data.result)
           setLogedin(!logedin)
          }
        } else {
          console.log("Cookies Not Found. Need to Login");
          setLogedin(!logedin)
          
        }
      }
      else{loc
        setLogedin(!logedin)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  return () => {
    ignore = true;
  };
}, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://wsapi.up.railway.app/get/user/${window.sessionStorage.getItem('user')}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
  
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
 
const resettik = (event) => {
  setWindval("0")
  setCloudval("0")
  setTempval("0")
};

  const handlewind = (event) => {
    setWindval(parseInt(event.target.value, 10));
  };
  const handlecloud = (event) => {
    setCloudval(parseInt(event.target.value, 11));
  };
  const handletepm = (event) => {
    setTempval(parseInt(event.target.value, 10));
  };
    const [selectedTab, setSelectedTab] = useState("1");
  
    const handleTabChange = (event) => {
      setSelectedTab(event.target.getAttribute('aria-label'));
    };
  useEffect(() => {
    // Use the useEffect hook to update the state when the component mounts
    setUser(window.sessionStorage.getItem('user') || '');
  }, []);

  useEffect(() => {
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
              setUsername(window.sessionStorage.getItem('user') || '');
            }
          } else {
            console.log("Cookies Not Found. Need to Login");
          }
        }
        else{}
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  
    return () => {
      ignore = true;
    };
  }, []);
  


  function logout() {
    window.sessionStorage.removeItem('user');
    cookies.remove('login');
    setUsername(''); // Update the state to trigger a re-render
  }
  const profilex = () => {
    window.location.href = '/profile';
  };
  const login = () => {
    window.location.href = '/login';
  };
  
  return (
    <>
      <h1>{user}</h1>
     
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" style={{}} onClick={()=>document.getElementById('my_modal_4').showModal()}>Submit A Tickiet</button>
<dialog id="my_modal_4" className="modal">
  <div style={{backgroundColor:"#212121", width:"100%"}} className="modal-box">
  <div
  className="rounded-lg bg-card text-card-foreground shadow-sm"
  data-v0-t="card"
>
  <div className="flex flex-col space-y-1.5 p-6">
    <div className="flex"><h3 className="text-2xl font-semibold leading-none tracking-tight">
      Submit Weather Data
    </h3><br /><img src={imageSrc} style={{width:"28px", height:"28px" ,marginLeft: "auto", borderRadius:"50px"}} alt="" />
    </div>
    
    
    <p className="text-sm text-muted-foreground">
      Input your local weather conditions
    </p>
  </div>
  <div className="p-6">
    <form>
      <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
          <label
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="windspeed"
          >
            Wind Speeds
          </label>
          <input type="range" min={0} max="100" value={windval} onChange={handlewind} className="mt-2 range" step="25" />
<div className="w-full flex justify-between text-xs px-2">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <label
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="windspeed"
          >
            Temperature
          </label>
          <input type="range" min={0} max="100" value={tempval} onChange={handletepm} className="mt-2 range" step="25" />
<div className="w-full flex justify-between text-xs px-2">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <label
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="windspeed"
          >
            Cloud Density
          </label>
          <input type="range" min={0} max="100" value={cloudval} onChange={handlecloud} className="mt-2 range" step="25" />
<div className="w-full flex justify-between text-xs px-2">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>
        </div>
      </div>
     <br />
      <div dir="ltr" data-orientation="horizontal" className=" mt-4">
      <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Sunny"
        onChange={handleTabChange}
      />
       

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Windy"
        
        onChange={handleTabChange}
      />
       

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Snowy"
        onChange={handleTabChange}
      />
       
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Rainy"
        onChange={handleTabChange}
      />
       
      {/* The selected tab is stored in the 'selectedTab' state */}
  
    </div>
      </div>
      <p className='mt-4'>Images:</p>
      <input type="file" className="mt-4 mb-4 file-input file-input-bordered w-full max-w-xs" />
      
      <div className="mt-2  flex flex-col space-y-1.5">
        <label
          className="mb-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="notes"
        >
          Note:
        </label>
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          id="notes"
          rows={4}
          defaultValue={""}
        />
      </div>
      
      <p className="mt-4 text-sm text-gray-500">
        Username and date-time will be submitted automatically.
      </p>
      <div style={{width:"100%"}}><button className="mt-4 btn btn-accent" style={{marginLeft:"auto"}}>Submit</button>
      <button className="btn mt-4" style={{marginLeft:"5%"}} > Close </button></div>
    </form>
  </div>

</div>

  </div>
</dialog>
<button className="btn" style={{marginLeft:"10px"}} onClick={profilex}>Profile</button>
<button className='btn' onClick={()=>document.getElementById('my_modal_4').showModal()} style={{marginLeft:"1.5em"}}><span className="material-icons">edit</span></button>
{!logedin && (
<button className="btn btn-outline float-right" style={{marginRight:"1.5em"}}  onClick={logout}>Logout</button>
)}
{logedin && (
      <button className="btn btn-outline float-right" style={{marginRight:"1.5em"}}  onClick={login}>Login</button>
      )}

    </>
  );
}
