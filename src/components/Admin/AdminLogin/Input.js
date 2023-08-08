import { ErrorMessage, Field } from "formik";

const Input = ({ name, type, label }) => {

    return (
        <div className="flex flex-col gap-y-3">
            <label htmlFor={name}>{label}</label>
            <Field
                className="input_admin focus:input_focus"
                type={type}
                name={name}
                id={name}
            />
            <ErrorMessage name={name} component="div" />
        </div>
    );
};

export default Input;
