import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
    img: {
        maxWidth: "50px",
        width: "100%",
        height: "auto",
        objectFit: "contain",
    },
};

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                position: "fixed",
                bottom: 0,
                left: 0,
                backgroundColor: "#333",
                color: "white",
                textAlign: "center",
                py: 2,
                px: 2,
                boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                <img src="/ld-icon.png" alt="ld-logo" style={styles.img} />
                <img src="/react-icon-white.png" alt="react-logo" style={styles.img} />
                <img src="/material-icon-white.png" alt="mui-logo" style={styles.img} />
                <img src="/netlify-icon-white.png" alt="netlify-logo" style={styles.img} />
            </Box>

            <Typography variant="body2" sx={{ opacity: 0.7, marginTop: 1 }}>
                LaunchDarkly Demo App
            </Typography>
        </Box>
    );
};

export default Footer;
