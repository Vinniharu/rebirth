import React from 'react'

const Footer = () => {
  return (
    <div className="p-[1rem] md:p-[3rem] bg-[#f9f9f9] border-t flex items-center justify-between flex-wrap gap-6">
      <p>Copyright © 2024 Rebirth4Change</p>
      <span className='flex items-center gap-4'>
        <a
          href="https://www.linkedin.com/company/rebirth4change/"
          target="_blank"
        >
          <img src="/linkedin.svg" alt="" />
        </a>
        <a
          href="https://mobile.twitter.com/rebirth4change"
          target="_blank"
        >
          <img src="/twitter.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/rebirth4change/" target="_blank">
          <img src="/instagram.svg" alt="" />
        </a>
      </span>
    </div>
  );
}

export default Footer