import React from "react";

type footerEndProps = {};

const FooterEnd: React.FC<footerEndProps> = () => {
  return (
    <footer>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center pt-[40px] pb-[30px] bg-white text-primary">
          <p>copyright Hasan Rifat {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
export default FooterEnd;
