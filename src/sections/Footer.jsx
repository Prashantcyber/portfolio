import React from 'react'
import Resume from '../resume/Prashant-kumar.pdf';

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5' id='link'>
      <div className='text-white-500 flex gap-2'>
        <button className='field-btn' > 
        <a href={Resume} target='blank'>Download CV</a>
        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
        </button>

      </div>

      <div className='flex gap-3'>
        <div className='social-icon'>
          <a href="https://github.com/Prashantcyber" target='blank' className='display: contents'><img src="/assets/github.svg" alt="github" className='w-7' /></a>
        </div>

        <div className='social-icon'>
          <a href="https://www.linkedin.com/in/prashant-kumar-1161a9115/" target='blank' className='display: contents'><img src="/assets/link.png" alt="github" className='w-7' /></a>
        </div>

        <div className='social-icon'>
          <a href="//wa.me/8527748227 " target='blank'><img src="/assets/whatsapp.png" alt="whats app" className='w-7' /></a>
        </div>
      </div>

      <p className='text-white-500'>&#169; 2025 Prashant. All rights reserved.</p>
    </section>
  )
}

export default Footer