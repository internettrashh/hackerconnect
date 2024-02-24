import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
import Github from '../public/github.svg';
import Loginbg from '../public/loginbg.jpeg';
import { auth, provider } from '../config';
import { signInWithPopup } from "firebase/auth";


function Login() {
    const navigate = useNavigate()
    const  [user, setUser] = useState(null);

    const signInWithGithub = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          setUser(result.user);
        
            navigate('/Main');
           
        } catch (error) {
          console.error(error);
        }
      };

  return (
   
    <div>
    <meta charSet="utf-8" />

    <style dangerouslySetInnerHTML={{ __html: `
      body {
        margin: 0;
        line-height: normal;
      }

      @media (max-width: 768px) { /* Adjust this breakpoint as needed */
        body {
          zoom: 0.8; /* Adjust the zoom level to your preference */
        }
      }
    ` }} />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{
  width: '100%', 
  position: 'relative', 
  overflow: 'hidden', 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', // This centers children vertically in the middle
  justifyContent: 'center', // This centers children horizontally in the middle
  padding: '0px 37px 240px', 
  boxSizing: 'border-box', 
  letterSpacing: 'normal', 
  textAlign: 'left', 
  fontSize: '29.2px', 
  color: '#fff', 
  fontFamily: 'Inter',
  backgroundImage: `url(${Loginbg})`, 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat'
}}>
      <div style={{height: '428px', width: '411px', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', padding: '64px 13px 64px 19px', boxSizing: 'border-box', maxWidth: '100%'}}>
       
      </div>
     

      <div style={{width: '915px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '297px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
        <div style={{width: '677px', height: '485px', position: 'relative', maxWidth: '100%'}}>
          <div style={{position: 'absolute', top: '315px', left: '677px', borderRadius: '50%', backgroundColor: 'rgba(186, 98, 224, 0.7)', width: '170px', height: '170px', transform: 'rotate(90deg)', transformOrigin: '0 0'}} />
          <div style={{position: 'absolute', top: '31px', left: '71px', borderRadius: '50%', backgroundColor: '#8125aa', filter: 'blur(350px)', width: '540px', height: '379px', zIndex: 1}} />
          <div style={{position: 'absolute', top: '0px', left: '142px', borderRadius: '50%', backgroundColor: 'rgba(255, 204, 229, 0.8)', width: '142px', height: '142px', transform: 'rotate(90deg)', transformOrigin: '0 0', zIndex: 2}} />
        <div style={{position: 'absolute', top: '36px', left: '71px', borderRadius: '34px', background: 'radial-gradient(\
            50% 50% at 50% 50%,\
            rgba(255, 255, 255, 0.4),\
            rgba(255, 255, 255, 0)\
        )', backdropFilter: 'blur(42px)', width: '540px', height: '379px', zIndex: 3}}>
            <div style={{position: 'absolute', top: '0px', left: '0px', borderRadius: '34px', background: 'radial-gradient(\
                50% 50% at 50% 50%,\
                rgba(255, 255, 255, 0.4),\
                rgba(255, 255, 255, 0)\
            )', backdropFilter: 'blur(42px)', width: '100%', height: '100%', display: 'none'}} />
            <img style={{position: 'absolute', top: '49px', left: '225px', width: '90px', height: '90px', overflow: 'hidden', zIndex: 4}} loading="eager" alt="" src={Github} />
            <button onClick={signInWithGithub} style={{cursor: 'pointer', border: 'none', padding: '24px 11px', backgroundColor: '#1e0909', position: 'absolute', top: '184px', left: '104px', borderRadius: '36px', height: '63px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', whiteSpace: 'nowrap', zIndex: 4}}>
                <b style={{position: 'relative', fontSize: '36px', fontFamily: 'Urbanist', color: '#fff', textAlign: 'left'}}>Sign in with Github</b>
            </button>
        </div>
      </div>
     
      </div>
    </div>
  </div>
  )
}

export default Login
