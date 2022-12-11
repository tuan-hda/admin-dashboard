import { Box } from "@mui/system";
import * as yup from "yup";
import { Button, TextField, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email("invalid email"),
  contact: yup
    .string()
    .required()
    .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, {
      message: "Invalid phone number",
    }),
  address1: yup.string().required(),
  address2: yup.string().required(),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values: Object) => {
    console.log(values);
  };

  return (
    <Box m='20px'>
      <Header title='CREATE USER' subtitle='Create a New User Profile' />
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                color='secondary'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                color='secondary'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                color='secondary'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                color='secondary'
                type='text'
                label='Contact Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                color='secondary'
                type='text'
                label='Address 1'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name='address1'
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                color='secondary'
                type='text'
                label='Address 2'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='address2'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 4",
                }}
              />
            </Box>

            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained'>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
