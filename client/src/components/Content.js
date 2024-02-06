import React from 'react';
import { Box, Card, CardHeader, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { JobPosts } from '../utils/JobPosts';

const Content = () => {
    return (
        <Box sx={{
            mt: 5,
            backgroundColor: 'white',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: "space-evenly",
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {JobPosts.map((job) =>
                < Card sx={{ mb: 5, width: '70vw' }}>
                    <CardHeader
                        title={job.position}
                        subtitle={job.title}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {job.location}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {job.type}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {job.posted}
                        </Typography>
                        <Typography variant="body2">
                            {job.description}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Box >
    );
};

export default Content;