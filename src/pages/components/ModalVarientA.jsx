import React from "react";
import { DialogTitle, DialogContent, Typography } from "@mui/material";

const ModalVariantA = () => {
    return (
        <>
            <DialogTitle>Welcome to the LaunchDarkly Demo App</DialogTitle>
            <DialogContent dividers>
                <Typography variant="body1" gutterBottom>
                    This demo app is powered by LaunchDarkly, showcasing dynamic feature flagging,
                    real-time context management, and targeted feature rollouts.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>User Switcher:</strong> Switch between predefined user profiles with automatic context updates.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Real-Time Streaming:</strong> Instantaneous flag updates allow features like the beta dashboard to be released immediately without a page reload.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Settings Drawer:</strong> View user details and enable new features (e.g., the new AI feature) in real time.
                </Typography>
                <Typography variant="body1">
                    <strong>Demo Modal Experiment:</strong> Participate in an A/B test with two modal variants to help determine the best user experience.
                </Typography>
            </DialogContent>
        </>
    );
};

export default ModalVariantA;
