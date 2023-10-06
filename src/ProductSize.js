import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ProductSize = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
  const [newSizeName, setNewSizeName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false); // Define isEditMode state
  const [editedSize, setEditedSize] = useState(null); // Define editedSize state
  const [data, setData] = useState([ // Define data state
    { id: "124124", sizeName: "11 x 8.5 One sided" },
    { id: "125215", sizeName: "11 x 8.5 Two sided" },
    { id: "125125", sizeName: "6.5 x 8" },
  ]);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const handleEdit = (row) => {
    setEditedSize(row);
    setNewSizeName(row.sizeName);
    setIsEditMode(true); // Set isEditMode to true for editing
    setIsAddNewOpen(true);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    handleClose();
  };

  const handleAddNew = () => {
    setIsEditMode(false); // Set isEditMode to false for adding new
    setIsAddNewOpen(true);
  };

  const handleSaveNew = () => {
    if (newSizeName.trim() !== "") {
      if (isEditMode && editedSize) {
        const updatedData = data.map((row) =>
          row.id === editedSize.id ? { ...row, sizeName: newSizeName } : row
        );
        setData(updatedData);
      } else {
        const newId = Math.floor(Math.random() * 1000000).toString();
        const newSize = { id: newId, sizeName: newSizeName };
        data.push(newSize);
        setData([...data]);
      }

      setNewSizeName("");
      setIsEditMode(false);
      setIsAddNewOpen(false);
    }
  };

  const handleCancelNew = () => {
    setNewSizeName("");
    setIsEditMode(false);
    setIsAddNewOpen(false);
  };

  return (
    <div style={{ width: "100%", overflow: "hidden", margin: "0 auto" }}>
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
          Product Size
        </Box>
      </Box>
      <div style={{ width: "100%", border: "1px solid #1A202C" }}></div>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1124px",
          margin: "0 auto",
          paddingTop: "37px",
          display: "flex",
          flexDirection: "column",
          gap: "17px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "1124px",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
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
            onClick={handleAddNew}
          >
            Add new
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  Size Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  sx={{ backgroundColor: "#F8FAFC", color: "#4B5563" }}
                  key={row.id}
                >
                  <TableCell
                    sx={{
                      color: "#4B5563",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell sx={{ color: "#4B5563" }}>{row.sizeName}</TableCell>
                  <TableCell sx={{ color: "#4B5563" }}>
                    <Button
                      aria-controls="row-menu"
                      aria-haspopup="true"
                      onClick={(e) => handleClick(e, row.id)}
                    >
                      <MoreHorizIcon />
                    </Button>
                    <Menu
                      id="row-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={() => handleEdit(row)}>Edit</MenuItem>
                      <MenuItem onClick={() => handleDelete(row.id)}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {isAddNewOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
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
                Size Name
              </Box>
              <TextField
                sx={{ width: "452px" }}
                placeholder="Please Add New Size"
                value={newSizeName}
                onChange={(e) => setNewSizeName(e.target.value)}
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
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
                  onClick={handleCancelNew}
                >
                  Cancel
                </Button>
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
                  onClick={handleSaveNew}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSize;
