import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from "@mui/material";

const DemoModal = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Welcome to the LaunchDarkly Demo App</DialogTitle>
            <DialogContent dividers>
                <Typography variant="body1" gutterBottom>
                    This demo app is built with React, Material UI, and LaunchDarkly for feature flagging.
                    Explore how feature flags allow you to control new features and manage rollouts safely.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Use the navigation bar to switch users and open settings to see dynamic context updates.
                </Typography>
                <Typography variant="body1">
                    Enjoy exploring the demo and learning about safe, fast feature releases!
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="primary">
                    Got it!
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DemoModal;