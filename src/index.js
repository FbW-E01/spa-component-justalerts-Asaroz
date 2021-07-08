import React from "react";
import ReactDOM from "react-dom";

const Box = (prop) => {
  if(prop.hide){
    return <div className={`alert alert-primary`} style={{display:"none"}} role="alert">
                    {prop.message}
           </div>
  }
    return <div>
                <div className={`alert alert-primary`} style={{backgroundColor:prop.type}} role="alert">
                     {prop.message}
                </div>

    </div>
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
