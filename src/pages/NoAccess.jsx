import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

const NoAccessPage = ({ requiredTier, onUpgrade }) => {
    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f44336' }}>
                    Access Denied
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', marginTop: 1 }}>
                    You need the <strong>{requiredTier}</strong> subscription to access this page.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', marginTop: 1 }}>
                    Please upgrade your subscription to gain access to this feature.
                </Typography>
            </Box>
            <Button
                variant="contained"
                color="primary"
                onClick={onUpgrade}
                sx={{ marginTop: 3 }}
            >
                Upgrade Subscription
            </Button>
        </Container>
    );
};

export default NoAccessPage;
