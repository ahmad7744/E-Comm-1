import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  console.log(children,"------")
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
  <a href="/">
          <Header />
        </a>   
    <Box
      sx={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "260px",
          flexShrink: 0,
          backgroundColor: "#EDF0F7",
          height: "883px",
          display:"flex",
          flexDirection:"column",
          padding:"24px 40px"
         
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
            padding: "8px",
            color:'#717D96',
            fontWeight:500
          }}
        >
          <img src="./images/icon-1.png" alt="" />
          <span>Product</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
            padding: "8px",
            color:"#2D3648",
            fontWeight:500
          }}
          onClick={toggleSettings}
        >
          <img src="./images/icon-1.png" alt="" />
          <span>Settings</span>
          {showSettings ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              style={{
                marginLeft: "auto",
                transition: "transform 0.3s",
                transform: "rotate(180deg)",
              }}
            >
              <path
                d="M1 5.25L5.5 0.75L10 5.25"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              style={{
                marginLeft: "auto",
                transition: "transform 0.3s",
                transform: "rotate(0deg)",
                opacity: 0,
              }}
            >
              <path
                d="M1 5.25L5.5 0.75L10 5.25"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {showSettings && (
          <ul style={{ marginLeft: "16px", listStyle: "none", padding: 0 }}>
            <a href="/categories">
            <li
              style={{
                cursor: "pointer",
                padding: "8px",
                color:"#717D96",
                fontWeight:500
              }}
            >
              Categories
            </li>
            </a>
           <a href="/producttype">
           <li
              style={{
                cursor: "pointer",
                padding: "8px",
                color:"#717D96",
                fontWeight:500
              }}
            >
              Product Type
            </li>
           </a>
           <a href="/productsize">
            <li
              style={{
                cursor: "pointer",
                padding: "8px",
                color:"#717D96",
                fontWeight:500,
                
              }}
            >
              Product Size
            </li>
            </a>
            <li
              style={{
                cursor: "pointer",
                padding: "8px",
                color:"#717D96",
                fontWeight:500
              }}
            >
              Attributes
            </li>
          </ul>
        )}
      </div>
      <div class="vertical-line"></div>

    
        {children}
     
    </Box>
    </>
  );
};

export default Layout;
