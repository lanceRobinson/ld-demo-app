import React from "react";
import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import {useLDClient, withLDConsumer} from 'launchdarkly-react-client-sdk';

import demo_data from "./demo_data.json"

const users = demo_data.users

const UserDrawer = ({ openDrawer, toggleDrawer, setCurrUser }) => {

    const ldClient = useLDClient();
    const handleClick = (user) => {
        setCurrUser(user)
        toggleDrawer()
        ldClient.identify(user).catch(e => console.log('ldClient error:', e))
    }

    return (
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
            <List>
                {users.map(u =>
                    <ListItemButton onClick={() => handleClick(u)}>
                        <ListItemText primary={u.name} secondary={u.tier} />
                    </ListItemButton>
                )}
                {/*<ListItemButton>*/}
                {/*    <ListItemText primary="Free User" />*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemText primary="Business User" />*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemText primary="Premium User" />*/}
                {/*</ListItemButton>*/}
            </List>
        </Drawer>
    );
};

// export default UserDrawer;
export default withLDConsumer()(UserDrawer);