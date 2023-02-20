import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { Form, Formik } from "formik";
import Header from "../../../../components/Header";
import SubmitBtn from "../../../../components/SubmitBtn";
import { RegistrationService } from "../../service/AuthService";
import { Alert } from "../../../../helpers/SweetAlert";
import * as yup from "yup";

const Registration = () => {
    // initial values
    const initialValues = {
        firstname: "",
        middlename: "",
        lastname: "",
        nid: "",
        permanent_address: "",
        present_address: "",
        email: "",
        phone: ""
    };
    // validation check
    const validationSchema = yup.object().shape({
        firstname: yup.string().required("First Name is Required"),
        lastname: yup.string().required("First Name is Required"),
        nid: yup.string().required("NID is Required"),
        email: yup.string().required("Email is Required"),
        phone: yup.string().required("Phone Number is Required"),
    });

    // submit form
    const handleFormSubmit = async (values, formikBag) => {
        try {
            const result = await RegistrationService({ ...values });

            if (result.status === 201) {
                Alert(result.data.title, result.data.message, result.data.status)
                formikBag.resetForm();
            }
        } catch (error) {
            console.log("Error While add data. ", error);
            Alert();
        }
    };

    return (
        <>
            <Box m="20px">
                <Header title="CREATE USER" subtitle="Create a New User Profile" />
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
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstname}
                                        name="firstname"
                                        error={!!touched.firstname && !!errors.firstname}
                                        helperText={touched.firstname && errors.firstname}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Middle Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.middlename}
                                        name="middlename"
                                        error={!!touched.middlename && !!errors.middlename}
                                        helperText={touched.middlename && errors.middlename}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastname}
                                        name="lastname"
                                        error={!!touched.lastname && !!errors.lastname}
                                        helperText={touched.lastname && errors.lastname}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Phone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phone}
                                        name="phone"
                                        error={!!touched.phone && !!errors.phone}
                                        helperText={touched.phone && errors.phone}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="National ID"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.nid}
                                        name="nid"
                                        error={!!touched.nid && !!errors.nid}
                                        helperText={touched.nid && errors.n}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Present Address"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.present_address}
                                        name="present_address"
                                        error={!!touched.present_address && !!errors.present_address}
                                        helperText={touched.present_address && errors.present_address}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Permanent Address"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.permanent_address}
                                        name="permanent_address"
                                        error={!!touched.permanent_address && !!errors.permanent_address}
                                        helperText={touched.permanent_address && errors.permanent_address}
                                    />
                                </Grid>

                                <SubmitBtn title="Create New User" />
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </ >
    )
}

export default Registration;