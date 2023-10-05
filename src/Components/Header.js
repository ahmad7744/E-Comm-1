import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{
        width: "100%",
        // backgroundColor:'red'
    }} >
      <Box
        sx={{
        //   backgroundColor: "red",
          padding: "24px 40px",
        }}
      >
        <img src="./images/logo.png" alt="logo" style={{cursor:'pointer'}} />
      </Box>
      <div  style={{border:"1px solid #1A202C"}} >
        </div>
    </Box>
  );
};

export default Header;
