import { Box, Grid, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../../../components/Header";
import SubmitBtn from "../../../../components/SubmitBtn";
import { TableService } from "../../service/TableService";
import { Alert } from "../../../../helpers/SweetAlert";
import * as yup from "yup";
import { useState } from "react";

const TableCreation = () => {

    const [isTableExists, setIsTableExists] = useState(false);

    const initialValues = {
        tableName: "",
    };

    const validationSchema = yup.object().shape({
        tableName: yup.string().required("Table Name is Required"),
    });


    const handleFormSubmit = async (values, formikBag) => {
        try {
            const result = await TableService({ ...values });

            if (result.status === 201) {
                Alert(result.data.title, result.data.message, result.data.status)
                formikBag.resetForm();
            }
            if (result.data.status === "exists") {
                setIsTableExists(true);
                formikBag.setSubmitting(false);
            }
        } catch (error) {
            console.log("Error While add data. ", error);
            Alert();
        }
    };

    return (
        <>
            <Box m="20px">
                <Header title="CREATE Table" subtitle="Create a New Table" />
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
                        isSubmitting
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Table Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.tableName}
                                        name="tableName"
                                        error={!!touched.tableName && !!errors.tableName}
                                        helperText={
                                            (touched.tableName && errors.tableName) ||
                                            (isTableExists && <span style={{ color: "red", fontSize: "12px" }}>Table already exists</span>)
                                        }
                                    />
                                </Grid>

                                <SubmitBtn title="Create New Table" isSubmitting={isSubmitting} />
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </ >
    )
}

export default TableCreation;