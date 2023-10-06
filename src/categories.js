import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CrossIcon from "./Components/CrossIcon";

const Categories = () => {
  const [categoryList, setCategoryList] = useState(["Print Only"]);

  const addCategory = () => {
    setCategoryList([...categoryList, ""]);
  };

  const removeCategory = (index) => {
    const updatedList = [...categoryList];
    updatedList.splice(index, 1);
    setCategoryList(updatedList);
  };

  const handleCategoryChange = (index, value) => {
    const updatedList = [...categoryList];
    updatedList[index] = value;
    setCategoryList(updatedList);
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          padding: "32px 0px",
          width: "100%",
          maxWidth: "1093px",
          margin: "0 auto",
        }}
      >
        <Box
          style={{
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "130%",
          }}
        >
          Categories
        </Box>
      </Box>
      <div style={{ width: "100%", border: "1px solid #1A202C" }}></div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "32px 80px",
          gap: "32px",
          width: "100%",
          maxWidth: "1124px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineheight: "16px",
          }}
        >
          Categories
        </Box>
        {categoryList.map((category, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <TextField
              sx={{ width: "452px" }}
              placeholder="Category"
              value={category}
              onChange={(e) => handleCategoryChange(index, e.target.value)}
            />
            {index > 0 && (
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => removeCategory(index)}
              >
                <CrossIcon />
              </IconButton>
            )}
          </div>
        ))}
        <Button
          sx={{ width: "452px", backgroundColor: "#F0F0F0", height: "36px" }}
          variant="contained"
          onClick={addCategory}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M16.9705 24.3951V9.5459"
              stroke="#1E293B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.3951 16.9705H9.54584"
              stroke="#1E293B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Box
          sx={{
            display: "flex",
            maxWidth: "452px",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              width: "78px",
              padding: "12px 20px",
              borderRadius: "8px",
              borderColor: "black",
              color: "black",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
            variant="outlined"
          >
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Categories;
