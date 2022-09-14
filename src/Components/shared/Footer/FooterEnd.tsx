import React from "react";
import logo from "../../../images/logos/white logo.png";

type footerEndProps = {};

type socialLink = {
  id: number;
  link: string;
  icon: JSX.Element;
}[];

const socialLinks: socialLink = [
  {
    id: 1,
    link: "https://www.facebook.com/Dev.Hasan.Rifat",
    icon: (
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    link: "https://twitter.com/DevHasan_Rifat",
    icon: (
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    link: "https://www.instagram.com/hasan_rifat_/",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    ),
  },

  {
    id: 4,
    link: "https://www.linkedin.com/in/dev-hasan-rifat/",
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path
          stroke="none"
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        ></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    ),
  },
];

const FooterEnd: React.FC<footerEndProps> = () => {
  return (
    <footer className="py-[40px] bg-[#000] shadow-[0px_4px_80px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="">
              <img className="w-[150px]" src={logo} alt="" />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-white text-[18px]">
                  © copyright by -
                  <a
                    href="https://twitter.com/DevHasan_Rifat"
                    className="text-secondary ml-1"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Hasan Rifat
                  </a>
                  <span> {new Date().getFullYear()}</span>
                </p>
              </div>
            </div>
            <div
              className=" grid grid-cols-4 gap-5
            "
            >
              {socialLinks.map((social) => (
                <a key={social.id} href={social.link} className="text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterEnd;
