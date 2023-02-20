import { Box, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../../../components/Header";
import SubmitBtn from "../../../../components/SubmitBtn";
import { RegistrationService } from "../../service/AuthService";
import { Alert } from "../../../../helpers/SweetAlert";
import * as yup from "yup";

const Registration = ({ input }) => {
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
                                {input.map((input) => (
                                    <Grid item xs={input.xs} key={input.id}>
                                        <TextField
                                            fullWidth
                                            variant={input.variant}
                                            type={input.type}
                                            label={input.label}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values[input.name]}
                                            name={input.name}
                                            error={!!touched[input.name] && !!errors[input.name]}
                                            helperText={touched[input.name] && errors[input.name]}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <SubmitBtn title="Create New User" />
                        </Form>
                    )}
                </Formik>
            </Box>
        </ >
    )
}

export default Registration;