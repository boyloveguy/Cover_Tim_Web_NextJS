import React from 'react'

export default function headerHome() {
  return (
    <div id='oti-kit'>
      <div style={{
        backgroundImage: `url(/images/imageHome.jpg)`,
        minHeight: '75vh',
        maxWidth: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
          maxWidth: '50%',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            fontFamily: `"Roboto Slab", sans-serif`,
            color: 'white'
          }}
          >Otis Kit<span style={{
            position: 'relative',
            fontSize: '0.75rem',
            backgroundColor: 'white',
            padding: '10px 15px',
            color: 'black',
            borderRadius: '9px',
            top: '-25px',
            marginLeft: '10px',
          }}>PRO</span></h1>
          <div>
            <p style={{
              color: 'white',
              fontSize: '1.25rem',
            }}>
              Start the Development with a ReactJS & MUI Design System inspired by Material Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
