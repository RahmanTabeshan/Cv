import Error from "@/components/Common/FormikError/Error";
import { ErrorMessage, Field } from "formik";

const Input = ({ name, type, label }) => {

    return (
        <div className="flex flex-col gap-y-3">
            <label htmlFor={name} className="text-[15px]">{label}</label>
            <Field
                className="input_admin focus:input_focus text-sm"
                type={type}
                name={name}
                id={name}
            />
            <ErrorMessage name={name} component={Error} />
        </div>
    );
};

export default Input;
