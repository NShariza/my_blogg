import React from "react";
import AboutCard from "./AboutCard";
import PopularPosts from "./PopularPosts";
import Tags from "./Tags";

const IntroMenu = () => {
    return (
    <div className="w3-col l4">
    <AboutCard/>
    <PopularPosts/>
    <Tags/>
    
    {/* END Introduction Menu */}
  </div>
    );
}

export default IntroMenu;