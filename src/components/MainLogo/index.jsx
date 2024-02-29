import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const MainLogo = () => {
  return (
    <React.Fragment>
      <img
        src="./image/logimetrix_logo.png"
        alt="Logo"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          height: "10%",
          zIndex: -1,
          // opacity: 0.5,
        }}
      />
    </React.Fragment>
  );
};
export default MainLogo;
