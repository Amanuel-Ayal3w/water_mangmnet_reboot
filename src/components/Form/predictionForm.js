import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Grid, Typography, TextField, Button } from "@mui/material";
import predictionValidationSchema from "./validation/preditionValidation";

export default function PredictionForm({ onSubmit, initialValues, isLoading }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={predictionValidationSchema}
      onSubmit={onSubmit}
    >
      <Form style={{ width: "100%" }}>
        <Grid 
          container 
          spacing={2} 
          justifyContent="center" 
          sx={{
            padding: 3,
            background: 'linear-gradient(135deg, #333333 30%, #1a1a1a 100%)', // Gradient dark background
            borderRadius: '8px', // Optional: to give the form a slight rounded corners
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)' // Optional: adds shadow for depth
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ marginBottom: 1, color: 'white' }}>Field Size (km²)</Typography>
            <Field
              id="fieldSize"
              name="fieldSize"
              as={TextField}
              variant="outlined"
              fullWidth
              placeholder="Enter field size"
              sx={{ marginBottom: 2, backgroundColor: 'white', borderRadius: '4px' }}
            />
            <ErrorMessage name="fieldSize" component="div" sx={{ color: 'error.main', fontSize: '0.875rem' }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ marginBottom: 1, color: 'white' }}>Crop Type</Typography>
            <Field
              name="cropType"
              as={TextField}
              select
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2, backgroundColor: 'white', borderRadius: '4px' }}
              SelectProps={{ native: true }}
            >
              <option value="">Select crop type</option>
              <option value="red">wheat</option>
              <option value="green">Maize</option>
              <option value="blue">Rice</option>
            </Field>
            <ErrorMessage name="cropType" component="div" sx={{ color: 'error.main', fontSize: '0.875rem' }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ marginBottom: 1, color: 'white' }}>Soil Type</Typography>
            <Field
              name="soilType"
              as={TextField}
              select
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2, backgroundColor: 'white', borderRadius: '4px' }}
              SelectProps={{ native: true }}
            >
              <option value="">Select soil type</option>
              <option value="red">sandy</option>
              <option value="green">clay</option>
              <option value="blue">slit</option>
            </Field>
            <ErrorMessage name="soilType" component="div" sx={{ color: 'error.main', fontSize: '0.875rem' }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained" color="primary" disabled={isLoading} type="submit" fullWidth sx={{ height: 56 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}