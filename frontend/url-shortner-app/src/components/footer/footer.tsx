import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-blue-600 text-white text-base text-center py-5">
      {/* the &#169 is code for the copyright symbol */}
      Copyright &#169; URLShortner | Chirag M Nayak
    </div>
  );
};

export default Footer;
