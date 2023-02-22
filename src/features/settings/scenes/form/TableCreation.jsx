import { Box, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../../../components/Header";
import SubmitBtn from "../../../../components/SubmitBtn";
import { GetTablesService, TableService } from "../../service/TableService";
import { Alert } from "../../../../helpers/SweetAlert";
import * as yup from "yup";
import { useEffect, useState } from "react";
import AttributeCreation from "./AttributeCreation";

const TableCreation = () => {

    const [isTableExists, setIsTableExists] = useState(false);
    const [tables, setTables] = useState([]);

    useEffect(() => {
        async function fetchTables() {
            const res = await GetTablesService();
            setTables(res.data.data.tables);
        }
        fetchTables();
    }, []);

    const initialValues = {
        tableName: "",
    };

    const validationSchema = yup.object().shape({
        tableName: yup.string().required("Table Name is Required"),
    });

    const setTableCreated = () => {
        setIsTableExists(false);
    }

    const handleFormSubmit = async (values, formikBag) => {
        try {
            const result = await TableService({ ...values });

            if (result.status === 201) {
                Alert(result.data.title, result.data.message, result.data.status);
                setTableCreated();
                formikBag.resetForm();
            }
            if (result.data.status === "exists") {
                setIsTableExists(true);
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
                                            isTableExists ? (
                                                <span style={{ color: "red" }}>Table already exists</span>
                                            ) : touched.tableName && errors.tableName ? (
                                                <span style={{ color: "red" }}>Table Name is Required</span>
                                            ) : null
                                        }
                                    />
                                </Grid>

                                <SubmitBtn title="Create New Table" />
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>

            <Box>

                <AttributeCreation tables={tables} />
            </Box>

        </ >
    )
}

export default TableCreation;