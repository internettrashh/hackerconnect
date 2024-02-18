import React from 'react'
import backgroundImage from '../public/landingbg.jpeg';
import { useNavigate } from 'react-router-dom';
function Landing() {
const navigation = useNavigate();

const Navlogin = () => {
    navigation('/login');
}
const navCreators = () => {
    navigation('/creators');
}
const navAbout = () => {
    navigation('/about');
}

  return (
    <div style={{backgroundColor:'black'}}>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@700&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', position: 'relative', backgroundColor: '#08090a',backgroundRepeat: 'no-repeat', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', letterSpacing: 'normal'}}>
      <main style={{flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '35px 83px 449px', boxSizing: 'border-box', gap: '180px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', maxWidth: '100%'}}>
     
        <header style={{width: '1006px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '142px', maxWidth: '100%', textAlign: 'left', fontSize: '32px', color: '#fff', backgroundColor:'transparent',fontFamily: 'Inter'}}>
          <div style={{width: '458px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', maxWidth: '100%'}}>
            <div onClick={navAbout}  style={{cursor:'pointer',height: '39px', position: 'relative', fontWeight: 500, display: 'inline-block', zIndex: 3}}>
              About
            </div>
            <div onClick={navCreators} style={{cursor:'pointer',height: '39px', position: 'relative', fontWeight: 500, display: 'inline-block', zIndex: 3}}>
              Creators
            </div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%', fontSize: '60px', fontFamily: 'Glory'}}>
            <div style={{width: '925px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', position: 'relative', maxWidth: '100%'}}>
             
              <h2 style={{margin: 0, height: '201px', flex: 1, position: 'relative', fontSize: 'inherit', fontWeight: 700, fontFamily: 'inherit', display: 'inline-block', maxWidth: '100%', zIndex: 1}}>
                Collaborate like never before. Build extraordinary apps with
                HackerConnect and GitHub
              </h2>
              
            </div>
          </div>
        </header>
       
        <button onClick={Navlogin} style={{
  cursor: 'pointer', 
  border: 'none', 
  padding: '16px', 
  backgroundColor: 'transparent', 
  width: '255px', 
  borderRadius: '30px 30px 30px 0px', 
  background: 'linear-gradient(95.98deg, #ba48ef, rgba(212, 133, 248, 0.58))', 
  boxShadow: '0px 20px 4px rgba(0, 0, 0, 0.25) inset, 0px 10px 9px rgba(255, 255, 255, 0.25)', 
  overflow: 'hidden', 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center', 
  boxSizing: 'border-box', 
  whiteSpace: 'nowrap', 
  zIndex: 1
}}>
  <b style={{
    height: '39px', 
    position: 'relative', 
    fontSize: '35px', 
    display: 'inline-block', 
    fontFamily: 'Glory', 
    color: '#fff', 
    textAlign: 'left'
  }}>
    Get Started
  </b>
</button>

      </main>
    </div>
  </div>
  )
}

export default Landing
