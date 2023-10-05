import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { ListItemIcon } from "@mui/material";
// import SettingsWithBreadcrumbs from "./SettingsWithBreadcrumbs";
// import Products from "./Products";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";

const breadcrumbNameMap = {
  "/settings": "Settings",
  "/settings/categories": "Categories",
  "/settings/product-type": "Product Type",
  "/settings/product-size": "Product Size",
  "/settings/attributes": "Attributes",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem component={RouterLink} to={to} {...other}>
        {to === "/settings" && (
          <ListItemIcon>
            <img src="./images/icon-1.png" alt="aa" />
          </ListItemIcon>
        )}
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    // <MemoryRouter initialEntries={["/products"]} initialIndex={0}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 260,
        backgroundColor: "#EDF0F7",
        height: "884px",
      }}
    >
      {/* <Routes>
          
          <Route path="/products" element={<Products />} />

          
          <Route path="/settings" element={<SettingsWithBreadcrumbs />} />
        </Routes> */}
      <List>
        <ListItem  component={LinkRouter} to="/products">
          <ListItemIcon>
            <img src="./images/icon-1.png" alt="Product Icon" />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItemLink to="/settings" open={open} onClick={handleClick} />
        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemLink sx={{ pl: 4 }} to="/settings/categories" />
            <ListItemLink sx={{ pl: 4 }} to="/settings/product-type" />
            <ListItemLink sx={{ pl: 4 }} to="/settings/product-size" />
            <ListItemLink sx={{ pl: 4 }} to="/settings/attributes" />
          </List>
        </Collapse>
      </List>
    </Box>
    // </MemoryRouter>
  );
}
