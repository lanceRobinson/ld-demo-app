import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Link, useLocation} from "react-router-dom";
import UserDrawer from "./pages/components/UserDrawer";
import UserSwitcher from "./pages/components/UserSwitcher";
import {Box,} from "@mui/material";
import {useLDClient} from 'launchdarkly-react-client-sdk';

const NavBar = ({currUser, setCurrUser}) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const location = useLocation();

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            selected={location.pathname === "/"}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/products"
                            selected={location.pathname === "/products"}
                        >
                            Products
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/orders"
                            selected={location.pathname === "/orders"}
                        >
                            Orders
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/dashboards"
                            selected={location.pathname === "/dashboards"}
                        >
                            Dashboards
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/ai"
                            selected={location.pathname === "/ai"}
                        >
                            AI
                        </Button>
                        {/*<Button*/}
                        {/*    color="inherit"*/}
                        {/*    component={Link}*/}
                        {/*    to="/profile"*/}
                        {/*    selected={location.pathname === "/profile"}*/}
                        {/*>*/}
                        {/*    profile*/}
                        {/*</Button>*/}
                    </Box>
                    <Box>
                        <UserSwitcher currUser={currUser} setCurrUser={setCurrUser} />
                        {/*<Button*/}
                        {/*    edge="end"*/}
                        {/*    color="inherit"*/}
                        {/*    aria-label="menu"*/}
                        {/*    onClick={toggleDrawer}*/}
                        {/*    align="right"*/}
                        {/*    setCurrUser={setCurrUser}*/}

                        {/*>*/}
                        {/*    Change User*/}
                        {/*</Button>*/}
                    </Box>
                </Toolbar>
            </AppBar>
            <UserDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} setCurrUser={setCurrUser}/>
        </React.Fragment>
    );
};

export default NavBar
