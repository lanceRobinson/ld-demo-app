import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import { Typography, Box, Card, CardContent } from "@mui/material";

const Ai = ({ flags }) => {
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
                    flex: 1,   // Flex to make sure it fills available space
                }}
            >
                <CardContent sx={{ textAlign: 'center', padding: 4 }}>
                    {flags.newAiFeature ? (
                        <div>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1a73e8', marginBottom: 3 }}>
                                Artificial Intelligence
                            </Typography>
                            <img src="/ai.png" alt="AI Feature" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
                        </div>
                    ) : (
                        <div>
                            <img src="/coming-soon.png" alt="Coming Soon" style={{ maxWidth: '40%', margin: 'auto', borderRadius: '10px' }} />
                            <Typography variant="h5" sx={{ color: '#555', marginTop: 3 }}>
                                Our new AI feature is currently in Beta.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#888', marginTop: 1 }}>
                                If you would like to be an early adopter, you can opt in to the AI feature in the settings.
                            </Typography>
                        </div>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default withLDConsumer()(Ai);
