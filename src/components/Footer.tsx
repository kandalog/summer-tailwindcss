import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerContents = {
  title: "TRAVEL",
  sns: [
    {
      img: "/assets/instagram.png",
      alt: "instagram"
    },
    {
      img: "/assets/facebook.png",
      alt: "facebook"
    }
  ],
  nav: [
    {
      href: "#features",
      label: "FEATURES"
    },
    {
      href: "#tour",
      label: "TOUR"
    },
    {
      href: "#voice",
      label: "VOICE"
    },
    {
      href: "#contact",
      label: "CONTACT"
    },
  ]
}

function Footer() {
  return (
  <footer className="bg-[#F5F1ED] py-4">
    <div className="container py-4 mx-auto max-w-[1000px]">
      <div className="lg:flex justify-between items-center">
        {/* 左 */}
      <div>
        <p className="font-bold text-2xl max-lg:text-center">{footerContents.title}</p>
        <div className="flex space-x-3 mt-2 max-lg:justify-center">
          {footerContents.sns.map((item, index) => (
          <div key={index}>
            <Image src={item.img} width={24} height={24} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    
        {/* 右 */}
      <div className="hidden lg:block">
        <ul className="lg:flex lg:space-x-7">
          {footerContents.nav.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
          ))}
        </ul>
      </div>
    
      </div>
        {/* 下 */}
        <p className="text-center max-lg:mt-2">&copy;2021 TRAVEL</p>
      </div>
  </footer>
  )
}

export default Footer;
