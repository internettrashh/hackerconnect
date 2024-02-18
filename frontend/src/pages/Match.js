import React from 'react';
import { useLocation } from 'react-router-dom';
import location from '../public/vector16.svg';

function Match() {
  const location = useLocation();
  const data = location.state ? location.state.Data : null; // Check if state is not null before accessing data

  console.log(data); // Logs the data

  if (!data || !data.data) {
    return <div>Loading...</div>;
  }

  return(
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@500;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', height: '1117px', position: 'relative', backgroundColor: '#0f061a', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', padding: '105px 0px 0px', boxSizing: 'border-box', gap: '195px', letterSpacing: 'normal'}}>
      <section style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 42px 0px 41px', boxSizing: 'border-box', maxWidth: '100%', flexShrink: 0, textAlign: 'left', fontSize: '45px', color: '#fff', fontFamily: 'Roboto'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '132px', maxWidth: '100%'}}>
          <div style={{width: '1389px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', maxWidth: '100%'}}>
            <div style={{position: 'relative', fontWeight: 600, zIndex: 2}}>
              We've identified something that aligns perfectly with your
              interests
            </div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', position: 'relative', maxWidth: '100%', fontSize: '36px', fontFamily: 'Glory'}}>
            <div style={{height: '312px', width: '322px', position: 'absolute', margin: '0 !important', top: '-290px', left: '-41px', borderRadius: '50%', backgroundColor: '#83498c', filter: 'blur(350px)', zIndex: 1}} />
            <div style={{flex: 1, borderRadius: '35px', backgroundColor: '#0f061a', border: '3px solid #83498c', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '22px 47px 24px', maxWidth: '100%'}}>
              <div style={{width: '1645px', height: '318px', position: 'relative', borderRadius: '35px', backgroundColor: '#0f061a', border: '3px solid #83498c', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
              <img style={{width: '128px', height: '128px', position: 'relative', objectFit: 'cover', zIndex: 1}} loading="eager" alt="" src={data.data.
githubProfilePictureUrl
} />
              <h3 style={{margin: 0, height: '60px', position: 'relative', fontSize: '54px', fontWeight: 500, fontFamily: 'inherit', display: 'inline-block', zIndex: 1}}>
                {data.data.githubUsername}
              </h3>
              <div style={{position: 'relative', fontWeight: 500, display: 'inline-block', maxWidth: '100%', zIndex: 1}}>
               {data.data.bio}
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '11px'}}>
                <img style={{height: '44px', width: '38px', position: 'relative', zIndex: 1}} loading="eager" alt="" src={location}/>
                <div style={{position: 'relative', fontWeight: 500, zIndex: 1}}>
                  {data.data.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{width: '394px', height: '432px', position: 'relative', borderRadius: '50%', backgroundColor: '#83498c', filter: 'blur(350px)', maxWidth: '100%'}} />
    </div>
  </div>
  )
}

export default Match;