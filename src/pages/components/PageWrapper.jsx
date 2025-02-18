import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PageWrapper = ({ title, children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f4f4f4',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: '80%',
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    flex: 1,
                }}
            >
                <CardContent sx={{ textAlign: 'center', padding: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
                        {title}
                    </Typography>
                    {children}
                </CardContent>
            </Card>
        </Box>
    );
};

export default PageWrapper;
