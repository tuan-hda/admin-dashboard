import { Box } from "@mui/system";
import * as yup from "yup";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import { tokens } from "../../theme";

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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
                  "& .Mui-focused.MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: !errors.firstName ? colors.grey[200] : undefined,
                    },
                  },
                  "& label.Mui-focused": {
                    color: colors.grey[200],
                  },
                }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
