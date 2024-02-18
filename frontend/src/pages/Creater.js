import React from 'react'
import line5 from '../public/line-5.svg';
import github from '../public/-icon-github.svg';
import twitter from '../public/-icon-rounded-twitterbird.svg';
import linkedin from '../public/-icon-rounded-linkedin.svg';
import figma from '../public/figma.svg';

function Creater() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap" />
        <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
        <div style={{width: '100%', position: 'relative', backgroundColor: '#0f061a', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '29px 51px 134px 65px', boxSizing: 'border-box', gap: '106px', letterSpacing: 'normal'}}>
          <section style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0px 0px 0px 40px', boxSizing: 'border-box', maxWidth: '100%', textAlign: 'left', fontSize: '90px', color: '#fff', fontFamily: 'Glory'}}>
            <div style={{width: '1572px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '26px', maxWidth: '100%'}}>
              <div style={{width: '1498px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 36px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '100%'}}>
                  <div style={{width: '376px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 20px 0px 0px', boxSizing: 'border-box', maxWidth: '100%', flexShrink: 0}}>
                    <h1 style={{margin: 0, height: '101px', flex: 1, position: 'relative', fontSize: 'inherit', fontWeight: 600, fontFamily: 'inherit', display: 'inline-block', maxWidth: '100%'}}>
                      Our Team
                    </h1>
                  </div>
                  <img style={{alignSelf: 'stretch', position: 'relative', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'contain', marginTop: '-4px'}} loading="eager" alt="" src={line5}/>
                </div>
              </div>
              <div style={{alignSelf: 'stretch', position: 'relative', fontSize: '23px', fontWeight: 600, fontFamily: 'Urbanist'}}>
                As budding developers, venturing through the world of Information
                Technology Engineering in our second year at Goa Engineering
                College, we craft ingenious solutions for every challenge,
                transforming the ordinary into the extraordinary!
              </div>
            </div>
          </section>
          <section style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 15px 0px 0px', boxSizing: 'border-box', maxWidth: '100%', textAlign: 'left', fontSize: '50px', color: '#fff', fontFamily: 'Glory'}}>
            <div style={{flex: 1, overflowX: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0px 1px 0px 0px', boxSizing: 'border-box', gap: '20px', maxWidth: '100%'}}>
              <div style={{width: '464px', borderRadius: '30px 0px 30px 0px', backgroundColor: '#0f061a', boxShadow: '0px 5px 10px #83498c', border: '1px solid #83498c', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '58px 53px 53px 52px', gap: '29px'}}>
                <div style={{width: '464px', height: '664px', position: 'relative', borderRadius: '30px 0px 30px 0px', backgroundColor: '#0f061a', boxShadow: '0px 5px 10px #83498c', border: '1px solid #83498c', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
                <img style={{width: '300px', height: '300px', position: 'relative', borderRadius: '50%', objectFit: 'cover', zIndex: 1}} loading="eager" alt="" src={require ("../public/contributor2.jpeg")} />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 14px 0px 0px'}}>
                    <div style={{height: '56px', position: 'relative', fontWeight: 600, display: 'inline-block', zIndex: 1}}>
                      Nischal Naik
                    </div>
                  </div>
                  <div style={{position: 'relative', fontSize: '40px', fontWeight: 500, fontFamily: 'Urbanist', zIndex: 1, marginTop: '-5px'}}>
                    Back-end developer
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 20px 0px 19px', gap: '12px'}}>
                  <img style={{alignSelf: 'stretch', width: '102.4px', position: 'relative', maxHeight: '100%', minHeight: '96px', zIndex: 1}} loading="eager" alt="" src={github}/>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '3px 11px 0px 0px'}}>
                    <img style={{width: '90.3px', height: '90.3px', position: 'relative', zIndex: 1}} loading="eager" alt="" src={twitter} />
                  </div>
                  <img style={{height: '90.3px', width: '90.3px', position: 'relative', zIndex: 1}} loading="eager" alt="" src={linkedin}/>
                </div>
              </div>
              <div style={{width: '464px', borderRadius: '30px 0px 30px 0px', backgroundColor: '#0f061a', boxShadow: '0px 5px 10px #83498c', border: '1px solid #83498c', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '58px 41px 48px 59px', gap: '27px'}}>
                <div style={{width: '464px', height: '664px', position: 'relative', borderRadius: '30px 0px 30px 0px', backgroundColor: '#0f061a', boxShadow: '0px 5px 10px #83498c', border: '1px solid #83498c', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
                <img style={{width: '300px', height: '300px', position: 'relative', borderRadius: '50%', objectFit: 'cover', zIndex: 1}} loading="eager" alt="" src={require("../public/contributor.jpeg")} />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 0px 9px'}}>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 18px 0px 0px'}}>
                    <div style={{height: '56px', position: 'relative', fontWeight: 600, display: 'inline-block', zIndex: 1}}>
                      Parth Kamat
                    </div>
                  </div>
                  <div style={{position: 'relative', fontSize: '40px', fontWeight: 500, fontFamily: 'Urbanist', zIndex: 1, marginTop: '-5px'}}>
                    Front-end developer
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 32px 0px 12px'}}>
                  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '12px'}}>
                    <img style={{alignSelf: 'stretch', width: '102.4px', position: 'relative', maxHeight: '100%', minHeight: '96px', zIndex: 1}} alt="" src={github}/>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '3px 11px 0px 0px'}}>
                      <img style={{width: '90.3px', height: '90.3px', position: 'relative', zIndex: 1}} alt="" src={twitter} />
                    </div>
                    <img style={{height: '90.3px', width: '90.3px', position: 'relative', zIndex: 1}} alt="" src={linkedin}/>
                  </div>
                </div>
              </div>
              <div style={{width: '464px', borderRadius: '30px 0px 30px 0px', backgroundColor: '#0f061a', boxShadow: '0px 5px 10px #83498c', border: '1px solid #83498c', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '58px 50px 50px', gap: '33px'}}>
                <div style={{width: '464px', height: '664px', position: 'relative', borderRadius: '30px 0px 30px 0px', backgroundColor: '#0f061a', boxShadow: '0px 5px 10px #83498c', border: '1px solid #83498c', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
                <img style={{width: '300px', height: '300px', position: 'relative', borderRadius: '50%', objectFit: 'cover', zIndex: 1}} loading="eager" alt="" src={require("../public/contributor3.jpeg")} />
                <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 25px', gap: '21px'}}>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <div style={{height: '56px', position: 'relative', fontWeight: 600, display: 'inline-block', zIndex: 1}}>
                      Meher Aga
                    </div>
                    <div style={{position: 'relative', fontSize: '40px', fontWeight: 500, fontFamily: 'Urbanist', zIndex: 1, marginTop: '-1px'}}>
                      UI UX designer
                    </div>
                  </div>
                  <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start', gap: '21px'}}>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '9px', minWidth: '131px'}}>
                      <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 3px', boxSizing: 'border-box', minWidth: '66px'}}>
                        <img style={{alignSelf: 'stretch', height: '96px', position: 'relative', maxWidth: '100%', overflow: 'hidden', flexShrink: 0, zIndex: 1}} alt="" src={github}/>
                      </div>
                      <img style={{height: '90.3px', width: '90.3px', position: 'relative', zIndex: 1}} loading="eager" alt="" src={figma}/>
                    </div>
                    <img style={{height: '90.3px', width: '90.3px', position: 'relative', zIndex: 1}} alt="" src={linkedin}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default Creater
