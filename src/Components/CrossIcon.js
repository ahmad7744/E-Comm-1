import React from "react";
import { Box } from "@mui/material";

const CrossIcon = () => {
  return (
    <div>
      <Box
        sx={{
          height: "37px",
          width: "37px",
          backgroundColor: "#F0F0F0",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.25 17.25L6.75 6.75"
            stroke="#1E293B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.25 6.75L6.75 17.25"
            stroke="#1E293B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
    </div>
  );
};

export default CrossIcon;
