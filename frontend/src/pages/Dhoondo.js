import React , {useState,useEffect} from 'react'
import location from '../public/vector16.svg';
import { useLocation } from 'react-router-dom';
function Dhoondo({ username }) {
    const [data, setData] = useState(null);
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      let authWindow;
      console.log(username);    
  
      const fetchData = async (username) => {
        console.log(username);
        const response = await fetch(`https://bitshackathon2024.vercel.app/connect?username=${username}`);
         console.log(response); // Logs the status code of the response
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        setUserData(userData);
      };
  
      const handleAuthentication = async () => {
        authWindow = window.open('https://bitshackathon2024.vercel.app/auth/github', '_blank');
  
       const pollTimer = window.setInterval(async function () {
  if (authWindow && authWindow.closed !== false) { // Check if authWindow is not null before accessing its closed property
    window.clearInterval(pollTimer);
    const data = await fetchData(username); // Pass username as a parameter
    setData(data); // Set data state
    authWindow.close();
  }
}, 200);
      };
  
      handleAuthentication();
    }, [username]);
  
    console.log(userData);

  return (
    <div >
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@500;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', height: '1117px', position: 'relative', backgroundColor: '#0f061a', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '323px', letterSpacing: 'normal', textAlign: 'left', fontSize: '45px', color: '#fff', fontFamily: 'Roboto'}}>
      <section style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 13px 0px 0px', boxSizing: 'border-box', maxWidth: '100%', flexShrink: 0, textAlign: 'left', fontSize: '24px', color: '#fff', fontFamily: 'Glory'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '25px', maxWidth: '100%'}}>
       
       
       
        <div style={{display:'flex',flexDirection:'column', alignItems: 'center'}} >

  <h2 style={{margin: '0 !important', fontSize: '70px', fontWeight: 600, fontFamily: 'inherit', zIndex: 3, textAlign: 'center' }}>
      We've curated a community of talented developers you'll love connecting with!
  </h2>

  {userData && userData.map((user, index) => (
     
    <a href={user.githubProfileUrl} target="_blank" rel="noopener noreferrer" key={index} style={{textDecoration: 'none', color: 'inherit'}}>
      <div style={{position: 'relative', fontWeight: 600, zIndex: 2, width: '3532.33px'}}>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', position: 'relative', maxWidth: '100%', fontSize: '36px', fontFamily: 'Glory'}}>
          <div style={{height: '312px', width: '322px', position: 'absolute', margin: '0 !important', top: '-290px', left: '-41px', borderRadius: '50%', backgroundColor: '#83498c', filter: 'blur(350px)', zIndex: 1}} />
          <div style={{flex: 1, borderRadius: '35px', backgroundColor: '#0f061a', border: '3px solid #83498c', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '22px 47px 24px', maxWidth: '100%'}}>
            <div style={{width: '1645px', height: '318px', position: 'relative', borderRadius: '35px', backgroundColor: '#0f061a', border: '3px solid #83498c', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
            <img style={{width: '128px', height: '128px', position: 'relative', objectFit: 'cover', zIndex: 1}} loading="eager" alt="" src={user.githubProfilePictureUrl} />
            <h3 style={{margin: 0, height: '60px', position: 'relative', fontSize: '54px', fontWeight: 500, fontFamily: 'inherit', display: 'inline-block', zIndex: 1}}>
              {user.githubUsername}
            </h3>
            <div style={{position: 'relative', fontWeight: 500, display: 'inline-block', maxWidth: '100%', zIndex: 1}}>
              {user.bio ? user.bio : 'No bio available'}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '11px'}}>
              <img style={{height: '44px', width: '38px', position: 'relative', zIndex: 1}} loading="eager" alt="" src={location}/>
              <div style={{position: '', fontWeight: 500, zIndex: 1}}>
                {user.location ? user.location : 'No location available'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  ))}
</div>







        </div>
      </section>

    
    </div>
  </div>
  )
}

export default Dhoondo
