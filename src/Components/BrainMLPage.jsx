import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Paper, InputAdornment } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import PatientInfoForm from './PatientInfoForm';

const BrainMLPage = () => {
    const [patientInfo, setPatientInfo] = useState(null);
    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = () => {
        setResult("Brain scan analysis result would appear here");
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
                Brain ML Model Analysis
            </Typography>
            {!patientInfo ? (
                <PatientInfoForm onInfoSubmit={setPatientInfo} />
            ) : (
                <Box sx={{ gap: 2, flexDirection: 'column' }}>
                    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                        <Typography>Patient: {patientInfo.name}</Typography>
                        <Typography>Age: {patientInfo.age}</Typography>
                    </Paper>
                    <TextField
                        variant="outlined"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ImageIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 2 }}
                    />
                    {image && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            fullWidth
                        >
                            Analyze Image
                        </Button>
                    )}
                    {result && (
                        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Analysis Result:
                            </Typography>
                            <Typography>{result}</Typography>
                        </Paper>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default BrainMLPage;