import * as yup from "yup";

const predictionValidationSchema = yup.object().shape({
  fieldSize: yup
    .number()
    .required("Field Size is Required")
    .typeError("Field Size  should be a number"),
  cropType: yup
    .string()
    .required("Crop Type is Required")
    .typeError("Crop Type should be a string"),
  soilType: yup
    .string()
    .required("Soil Type is Required")
    .typeError("Soil Type  should be a string"),
});

export default predictionValidationSchema;
