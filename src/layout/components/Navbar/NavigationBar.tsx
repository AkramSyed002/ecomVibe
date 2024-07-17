import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { LANDING_PAGES } from "constant/routes";
import { COLORS } from "constant/colors";
import { Typography } from "@mui/material";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
export default function NavigationBar(props: Props) {
  const [open, setOpen] = React.useState(false);
  const { window } = props;
  const params = useParams();
  const PRODUCT_VIEW_PAGE = `${LANDING_PAGES.PRODUCTS_ID}/${params.productId}`;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();
  const isSelectedAllCegoriesUrl = pathname === LANDING_PAGES.ALL_CATEGORIES;
  const isSelectedWomenUrl = pathname === LANDING_PAGES.WOMEN;
  const isSelectedMenUrl = pathname === LANDING_PAGES.MEN;
  const isSelectedAccessories = pathname === LANDING_PAGES.ACCESSORIES;
  const isDynamicProductUrl = pathname === PRODUCT_VIEW_PAGE;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ListItem sx={{ fontSize: "2em" }}>
        <Link
          to={LANDING_PAGES.HOME_PAGE}
          style={{
            textDecoration: "none",
          }}
        >
          <img
            src={"/logo.png"}
            alt="logo"
            style={{
              height: "60px",
              width: "100px",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          />
          <Typography
            position={"absolute"}
            bottom={-5}
            color={"black"}
            left={25}
            fontWeight={800}
            sx={{
              textShadow: "2px 2px 3px white",
            }}
          >
            <span
              style={{
                color: COLORS.light.white,
                fontSize: ".8em",
                textShadow: "2px 3px 4px gray",
              }}
            >
              Ecom
            </span>
            Vibe
          </Typography>
        </Link>
      </ListItem>
      <Divider />
      <List>
        <ListItem>
          <NavLink
            to={LANDING_PAGES.ALL_CATEGORIES}
            style={({ isActive }: any) => {
              return isActive
                ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                : {
                    color: COLORS.light.white,
                    textDecoration: "none",
                  };
            }}
          >
            Everything
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={LANDING_PAGES.WOMEN}
            style={({ isActive }: any) => {
              return isActive
                ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                : {
                    color: COLORS.light.white,
                    textDecoration: "none",
                  };
            }}
          >
            Women
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={LANDING_PAGES.MEN}
            style={({ isActive }: any) => {
              return isActive
                ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                : {
                    color: COLORS.light.white,
                    textDecoration: "none",
                  };
            }}
          >
            Men
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={LANDING_PAGES.ACCESSORIES}
            style={({ isActive }: any) => {
              return isActive
                ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                : {
                    color: COLORS.light.white,
                    textDecoration: "none",
                  };
            }}
          >
            Accessories
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={LANDING_PAGES.ABOUT_PAGE}
            style={({ isActive }: any) => {
              return isActive
                ? { color: COLORS.blue.blue, textDecoration: "none" }
                : {
                    color: COLORS.light.white,
                    textDecoration: "none",
                  };
            }}
          >
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={LANDING_PAGES.CONTACT_PAGE}
            style={({ isActive }: any) => {
              return isActive
                ? { color: COLORS.blue.blue, textDecoration: "none" }
                : {
                    color: COLORS.light.white,
                    textDecoration: "none",
                  };
            }}
          >
            Contact
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background:
            isSelectedAllCegoriesUrl ||
            isSelectedAccessories ||
            isSelectedMenUrl ||
            isSelectedWomenUrl ||
            isDynamicProductUrl
              ? "#185d7fe9"
              : "rgba(4%,4%,4%,0.1)",
          position: "absolute",
          width: "100%",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box
            display={{ md: "none", sm: "none", xs: "flex" }}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Box
              component={"a"}
              href={LANDING_PAGES.HOME_PAGE}
              sx={{
                textDecoration: "none",
                display: { md: "none", sm: "none" },
              }}
            >
              <img
                src={"/logo.png"}
                alt="logo"
                style={{
                  height: "40px",
                  width: "70px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  filter: "drop-shadow(2px 3px 8px black)",
                }}
              />
              <Typography
                position={"absolute"}
                bottom={0}
                left={20}
                color={"black"}
                fontSize={".6em"}
                fontWeight={900}
                sx={{
                  textShadow: "2px 2px 3px white",
                }}
              >
                <span
                  style={{
                    color: COLORS.light.white,
                    textShadow: "2px 5px 3px black",
                  }}
                >
                  Ecom
                </span>
                Vibe
              </Typography>
            </Box>
            <Box display={"flex"} alignItems={'center'} gap={2}>
              <Box sx={{ cursor: "pointer" }}>
                <ShoppingCart open={open} setOpen={setOpen} />
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <List
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              alignItems: "center",
              justifyItems: "start",
            }}
          >
            <ListItem sx={{ fontSize: "2em" }}>
              <Link
                to={LANDING_PAGES.HOME_PAGE}
                style={{
                  textDecoration: "none",
                }}
              >
                <img
                  src={"/logo.png"}
                  alt="logo"
                  style={{
                    height: "60px",
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    filter: "drop-shadow(2px 3px 8px black)",
                  }}
                />
                <Typography
                  position={"absolute"}
                  bottom={-5}
                  color={"black"}
                  fontWeight={800}
                  sx={{
                    textShadow: "2px 2px 3px white",
                  }}
                >
                  <span
                    style={{
                      color: COLORS.light.white,
                      textShadow: "2px 5px 3px black",
                    }}
                  >
                    Ecom
                  </span>
                  Vibe
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <NavLink
                to={LANDING_PAGES.ALL_CATEGORIES}
                style={({ isActive }: any) => {
                  return isActive
                    ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                    : {
                        color: COLORS.light.white,
                        textDecoration: "none",
                      };
                }}
              >
                Everything
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={LANDING_PAGES.WOMEN}
                style={({ isActive }: any) => {
                  return isActive
                    ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                    : {
                        color: COLORS.light.white,
                        textDecoration: "none",
                      };
                }}
              >
                Women
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={LANDING_PAGES.MEN}
                style={({ isActive }: any) => {
                  return isActive
                    ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                    : {
                        color: COLORS.light.white,
                        textDecoration: "none",
                      };
                }}
              >
                Men
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={LANDING_PAGES.ACCESSORIES}
                style={({ isActive }: any) => {
                  return isActive
                    ? { color: COLORS.blue.lightBlue, textDecoration: "none" }
                    : {
                        color: COLORS.light.white,
                        textDecoration: "none",
                      };
                }}
              >
                Accessories
              </NavLink>
            </ListItem>
          </List>
          <Box flexGrow={1}></Box>
          <List sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            <ListItem>
              <NavLink
                to={LANDING_PAGES.ABOUT_PAGE}
                style={({ isActive }: any) => {
                  return isActive
                    ? { color: COLORS.blue.blue, textDecoration: "none" }
                    : {
                        color: COLORS.light.white,
                        textDecoration: "none",
                      };
                }}
              >
                About
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={LANDING_PAGES.CONTACT_PAGE}
                style={({ isActive }: any) => {
                  return isActive
                    ? { color: COLORS.blue.blue, textDecoration: "none" }
                    : {
                        color: COLORS.light.white,
                        textDecoration: "none",
                      };
                }}
              >
                Contact
              </NavLink>
            </ListItem>
            <ListItem>
              <Box sx={{ cursor: "pointer" }}>
                <ShoppingCart open={open} setOpen={setOpen} />
              </Box>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: COLORS.black.black,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
