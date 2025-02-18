import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import UserSwitcher from "./pages/components/UserSwitcher";
import { Box, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDrawer from "./pages/components/SettingsDrawer";

const tabs = [
    { route: "/", label: "Dashboard" },
    { route: "/products", label: "Manage Products" },
    { route: "/orders", label: "Manage Orders" },
    { route: "/analytics", label: "Analytics" },
    { route: "/ai", label: "Beta AI" },
];

const NavBar = ({ users, setUsers, currUser, setCurrUser, onOpenModal }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const location = useLocation();

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ boxShadow: "none", backgroundColor: "#1c1c1e" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="ld-icon.png" alt="logo" style={{ maxWidth: "30px", height: 'auto' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff" }}>
                            LD Commerce Demo
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <IconButton color="inherit" onClick={onOpenModal}>
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        {tabs.map((tab, index) => (
                            <Button
                                key={index}
                                color="inherit"
                                component={Link}
                                to={tab.route}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: location.pathname === tab.route ? "bold" : "normal",
                                    color: location.pathname === tab.route ? "#76c7c0" : "white",
                                    "&:hover": {
                                        backgroundColor: "rgba(118, 199, 192, 0.2)",
                                    },
                                }}
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <UserSwitcher users={users} setUsers={setUsers} currUser={currUser} setCurrUser={setCurrUser} />
                        <IconButton color="inherit" onClick={toggleDrawer} sx={{ marginLeft: 2 }}>
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <SettingsDrawer
                    open={openDrawer}
                    onClose={toggleDrawer}
                    currUser={currUser}
                    setCurrUser={setCurrUser}
                    setUsers={setUsers}
                />
            </AppBar>
        </React.Fragment>
    );
};

export default NavBar;
