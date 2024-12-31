import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    // sets bg color to slate-900
    <div className="bg-blue-600">
      {/*makes the div a container (which makes sure to set boundaries so that the content 
        inside is not streched out too far) with padding 2 and mx-auto is auto aligning it to center*/}
      <div className="container p-2 mx-auto">
        {/*Makes a Navigation area with y padding of 5*/}
        <nav className="py-5">
          <div className="text-base text-white">URL Shortner</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
