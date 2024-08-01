/*
 * Copyright (c) 2023.
 * File Name: index.tsx
 * Author: Coderthemes
 */

import {Box, Button, Divider, FilledInput, IconButton, InputAdornment, InputBase, Paper} from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { styled } from "@mui/material";
import { WithSetting } from "@src/types";
import { useLayoutContext } from "@src/states";
import MenuToggler from "./MenuToggler";
import MaximizeScreen from "./MaximizeScreen";
import LayoutThemeToggler from "./LayoutThemeToggler";
import ThemeCustomizerToggler from "./ThemeCustomizerToggler";
import AppsDropdown from "./AppsDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import LanguageDropdown from "./LanguageDropdown";
import { notifications } from "./data";
import UserProfile from "./UserProfile";
import SearchIcon from "@mui/icons-material/Search";
import {TabPanel} from "@mui/lab";
import logo from "@src/assets/images/logo-clarytas.png";
import {MdOutlineLogout, MdRestore} from "react-icons/md";
import {Link} from "react-router-dom";

const TopBarWrapper = styled("div")<WithSetting>(({ theme, settings }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    minHeight: "70px",
    borderRadius: 0,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / .1)",
    zIndex: 2,
    width: "100%",
    position: "relative",
    top: 0,
  };
});


const Topbar = () => {
  const { settings } = useLayoutContext();

  return (
    <TopBarWrapper settings={settings} className="topbar-header-do-not-remove">
      <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
        <img src={logo} alt="logo" height={100}/>
      </Box>

      <Box
          sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1.5 }}
        alignItems={"center"}>


        <LayoutThemeToggler />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <MaximizeScreen />
        </Box>
        <Link to={"/auth/login"}>
          <Button variant="text" color="primary" startIcon={<MdOutlineLogout />}>
            Logout
          </Button>
        </Link>
      </Box>
    </TopBarWrapper>
  );
};

export default Topbar;
