import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({ style, links, logo, copyright, demo }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>

      <div className="logo-container" >
        {logo}
        <p className="blurb" >Automate your business growth with Rapid Platform.</p>
      </div>

      <div className="links-container" >
        {links}
      </div>

      <div className="cta-container" >
        <a className="cta-button" href={demo.href} target="_blank" >
          {demo.text}
        </a>
      </div>

      {(copyright) && (
        <div className="copyright-container footer__bottom text--center">
          {copyright}
        </div>
      )}
    </footer>
  );
}
