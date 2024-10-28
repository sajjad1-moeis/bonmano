import React from "react";
import HocIntervalAboutUs from "../../../../Hoc/HocIntervalAbout-Us";
function ItemInterval({count, title, isType}) {
   return (
      <div className='text-center mb-8'>
         <h1 className='text-6xl md:text-8xl h-max  text-white ' style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
            {count + isType}
         </h1>
         <p>{title}</p>
      </div>
   );
}
export default HocIntervalAboutUs(ItemInterval);
