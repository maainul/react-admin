import { Box, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";
import Header from "../../../../components/Header";

const AttributeCreation = ({ tables }) => {

    const initialValues = {
        name: "",
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required("Name is Required"),
    });

    const handleFormSubmit = async (values, formikBag) => { };

    return (
        <>
            <Box m="20px">
                <hr />
                <Header subtitle="Select Table" />
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={tables}
                                getOptionLabel={(option) => option.name}
                                sx={{ width: 300, mb: "20px" }}
                                renderInput={(params) => <TextField {...params} label="Tables" />}
                            />
                            <hr />
                            <Box mt="20px">
                                <Header subtitle="Select Table Attributes" />
                                <Grid container spacing={4} >
                                    <Grid item >
                                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                    </Grid>
                                    <Grid item >
                                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                    </Grid>
                                    <Grid item >
                                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default AttributeCreation;