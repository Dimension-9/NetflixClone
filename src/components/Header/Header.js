import React, { useEffect, useState } from 'react'
import "./header.css"

function Header() {
    const [showNav, handleShowNav] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShowNav(true);
            }
            else{
                handleShowNav(false);
            }
        });
        
    }, [showNav]);

  return (
    <div className={`nav ${showNav && "nav__background"}`}>
        {/* https://culturess.com/files/2018/07/1528209888209.jpg */}
        {/* https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png */}
        {/* https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png */}
        {/* https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg */}
        <img 
            className='nav__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
            alt='Netflix logo'
        />
        <img 
            className='nav__avatar'
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
            alt='Netflix Logo'
        />
        
    </div>
  )
}

export default Header