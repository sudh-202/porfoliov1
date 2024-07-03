import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute b-[#ffffff] z-1;" id="footer">
      <div className="flex justify-between p-[ 20px 110px 20px 30px] bt-2 items-center">
        <div className="salv-copyright-content mb-0 sm-font inter-font-400 b-text light-copyright">
          Copyright © 2024 Sudhanshu ❤{" "}
          <Link href="https://1.envato.market/website-portfolio" className="b-text" target="_blank">
            the_deepknight
          </Link>
        </div>
        {/* <WeekendModeToggle /> */}
      </div>
    </footer>
  );
};

export default Footer;
