import React, { useState,useEffect, createContext } from 'react';
import Mainbg from '../public/Mainbg.jpeg';
import { useNavigate } from 'react-router-dom';

export const DataContext = createContext();

function Main() { // Receive children as a prop
  const [Data, setData] = useState(null);
  const navigate = useNavigate();
  let authWindow;

  async function fetchData() {
    try {
      const response = await fetch('https://bitshackathon2024.vercel.app/starred');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      if (authWindow) {
        authWindow.close();
      }
      navigate('/Match', { state: { Data: data } }); // Pass data to Match component
      return data;
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(Data);
  }, [Data]);

  async function handleProceedClick() {
    authWindow = window.open('https://bitshackathon2024.vercel.app/auth/github', '_blank');
  
    const pollTimer = window.setInterval(async function () {
      if (authWindow.closed !== false) {
        window.clearInterval(pollTimer);
        const data = await fetchData(); // Wait for fetchData to resolve and assign its result to data
        setData(data); // Set data state
        authWindow.close();
      }
    }, 200);
  }
  
  return (
<div>
    <div style={{backgroundColor:'black'}}>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '72px', letterSpacing: 'normal', textAlign: 'left',backgroundImage:`url(${Mainbg})`,backgroundRepeat:'no-repeat',background:'cover', fontSize: '59px', color: '#fff', fontFamily: 'Glory'}}>
      <header style={{alignSelf: 'stretch', height: '51px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
        <div style={{height: '724px', width: '2492px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '144%', flexShrink: 0}}>
          <div style={{alignSelf: 'stretch', width: '3308px', position: 'relative', borderRadius: '50%', filter: 'blur(450px)', maxWidth: '133%', flexShrink: 0}} />
        </div>
      </header>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 20px', boxSizing: 'border-box', gap: '47px', minHeight: '228px', maxWidth: '100%'}}>
        <b style={{height: '65px', position: 'relative', display: 'inline-block', flexShrink: 0}}>Let us know more about you</b>
        <button onClick={fetchData} style={{cursor:'pointer',border: 'none',color:'white',fontSize:'30px',outline: 'none', backgroundColor: '#6b1f95', width: '274px', height: '64px', position: 'relative', borderRadius: '30px', boxShadow: '0px 9px 20px rgba(212, 180, 223, 0.57)'}} >Proceed</button>
      </div>
      <section style={{alignSelf: 'stretch', height: '694px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
        <div style={{width: '2023px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '117%', flexShrink: 0}}>
          <div style={{height: '1014px', width: '2223px', position: 'relative', maxWidth: '110%', flexShrink: 0}}>
            <div style={{position: 'absolute', top: '536px', left: '0px', borderRadius: '50%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', filter: 'blur(450px)', width: '2223px', height: '478px'}} />
            {/* <img style={{position: 'absolute', top: '558px', left: '295px', width: '1728px', height: '136px', objectFit: 'cover', zIndex: 1}} alt="" src={require("../public/bottom.png") }/> */}
            <img style={{position: 'absolute', top: '0px', left: '550px', width: '1219px', height: '635px', objectFit: 'cover', zIndex: 2}} loading="eager" alt="" src={require("../public/businessteamcommunicatingviasocialmedia-748555439-1@2x.png")} />
          </div>
        </div>
        


      </section>
    </div>
  </div>
  <DataContext.Provider value={Data}>

</DataContext.Provider>
</div>
  )
}

export default Main
