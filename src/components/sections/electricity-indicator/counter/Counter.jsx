import { useState, useEffect } from "react";

import { Produced, Units } from "./Counter.styled";

export const Counter = () => {
   const [counter, setCounter] = useState(1234567890);
   useEffect(() => {
      const interval = setInterval(() => {
         setCounter(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   function transformNumber(num) {
      const result = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      return result;
   }

   return (
      <Produced>
         {transformNumber(counter)}
         <Units>kWh</Units>
      </Produced>
   );
};

{
   /* <p>{producedEnergy.toLocaleString("de-DE")}</p> */
}
