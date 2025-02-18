import React from "react";
import {
    Drawer,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    FormControlLabel,
    Switch,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLDClient } from "launchdarkly-react-client-sdk";

const SettingsDrawer = ({ open, onClose, currUser, setUsers, user, setCurrUser }) => {
    const [editedUser, setEditedUser] = React.useState(currUser);
    const ldClient = useLDClient();

    const handleChange = (event) => {
        setEditedUser({
            ...editedUser,
            [event.target.name]: event.target.value,
        });
    };

    // Handle the toggle switch change for "Opt In for AI Beta"
    const handleToggleChange = (event) => {
        setEditedUser({
            ...editedUser,
            [event.target.name]: event.target.checked,
        });
    };

    const updateUserContext = (updatedUser) => {
        if (ldClient) {
            ldClient
                .identify(updatedUser)
                .then(() => {
                    console.log("Updated LaunchDarkly user context:", updatedUser);
                })
                .catch((e) => console.log("ldClient error:", e));
        }
    };

    const handleSave = () => {
        // Update current user state
        setCurrUser(editedUser);

        // Update the user record in the users array
        setUsers((prevUsers) =>
            prevUsers.map((u) => (u.key === editedUser.key ? { ...u, ...editedUser } : u))
        );

        // Update LaunchDarkly context with the updated user
        updateUserContext(editedUser);

        onClose(); // Close drawer after saving
    };

    // Update the component's state if the passed in user changes
    React.useEffect(() => {
        setEditedUser(currUser);
    }, [currUser]);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 300, p: 2 }}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">Settings</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={editedUser?.name || ""}
                    onChange={handleChange}
                    margin="normal"
                    disabled
                    InputProps={{ readOnly: true }}
                />

                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={editedUser?.email || ""}
                    onChange={handleChange}
                    margin="normal"
                    disabled
                    InputProps={{ readOnly: true }}
                />

                <TextField
                    fullWidth
                    label="Subscription Tier"
                    name="subscriptionTier"
                    value={editedUser?.tier || ""}
                    onChange={handleChange}
                    margin="normal"
                    disabled
                    InputProps={{ readOnly: true }}
                />

                {/* Toggle for "Opt In for AI Beta" */}
                <FormControlLabel
                    control={
                        <Switch
                            checked={editedUser.aiBeta || false}
                            onChange={handleToggleChange}
                            name="aiBeta"
                            color="primary"
                        />
                    }
                    label="Opt In for AI Beta"
                />

                <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
                    Save Changes
                </Button>
            </Box>
        </Drawer>
    );
};

export default SettingsDrawer;
