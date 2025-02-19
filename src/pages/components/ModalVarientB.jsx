import React from "react";
import { DialogTitle, DialogContent, Typography } from "@mui/material";

const ModalVariantB = () => {
    return (
        <>
            <DialogTitle>Welcome!</DialogTitle>
            <DialogContent dividers>
                <Typography variant="body1" gutterBottom>
                    Welcome! Explore the demo to see how feature flags enable fast, safe releases.
                </Typography>
            </DialogContent>
        </>
    );
};

export default ModalVariantB;
