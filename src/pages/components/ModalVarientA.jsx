import React from "react";
import { DialogTitle, DialogContent, Typography } from "@mui/material";

const ModalVariantA = () => {
    return (
        <>
            <DialogTitle>Welcome to the LaunchDarkly Demo App</DialogTitle>
            <DialogContent dividers>
                <Typography variant="body1" gutterBottom>
                    This demo app is built with React, Material UI, and LaunchDarkly for feature flagging.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Explore how feature flags allow you to control new features and manage rollouts safely.
                </Typography>
                <Typography variant="body1">
                    Use the navigation bar to switch users and open settings to see dynamic context updates.
                </Typography>
            </DialogContent>
        </>
    );
};

export default ModalVariantA;
