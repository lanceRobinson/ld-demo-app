import { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useLDClient } from "launchdarkly-react-client-sdk";
import demo_data from "../../demo_data.json"





const UserSwitcher = ({users, currUser, setCurrUser}) => {
    const [selectedUser, setSelectedUser] = useState(currUser);

    const ldClient = useLDClient();

    const handleUserChange = (event) => {
        const newUser = users.find((user) => user.key === event.target.value);
        setCurrUser(newUser)
        setSelectedUser(newUser);

        // Update LaunchDarkly context
        if (ldClient) {
            ldClient.identify(newUser).catch(e => console.log('ldClient error:', e))
        }
    };

    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel sx={{ color: "white" }}>Logged in as:</InputLabel>
            <Select value={currUser.key}
                    label="Logged in as:"
                    onChange={handleUserChange}
                    sx={{
                        color: "white", // Text color
                        "& .MuiSvgIcon-root": { color: "white" }, // Dropdown arrow color
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Border color
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Hover border color
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Focus border color
                    }}
            >
                {users.map((user) => (
                    <MenuItem key={user.key} value={user.key}>
                        {user.name} ({user.tier} Tier)
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    );
};

export default UserSwitcher;
