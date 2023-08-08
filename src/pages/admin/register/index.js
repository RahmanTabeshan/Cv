import Input from "@/components/Admin/AdminLogin/Input";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Oval } from "react-loader-spinner";
import AdminRegister from "@/Hooks/ReactQuery/AdminRegister";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import http from "@/Services/http";
import { useRef } from "react";

const initialValues = {
    Name: "",
    Email: "",
    Mobile: "",
    Password: "",
    RePassword: "",
};

const validationSchema = Yup.object({
    Name: Yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
    Email: Yup.string()
        .required("لطفا ایمیل خود را وارد کنید")
        .matches(
            /[a-zA-z0-9]@(gmail|yahoo)(.com)$/,
            "لطفا ایمیل خود را به شکل صحیح وارد کنید"
        )
        .test("Email-Valid", "نام کاربری از قبل وجود دارد", async (value) => {
            try {
                const { data } = await http.post("/admin/check", {
                    type: "Email",
                    Email: value,
                });
                return true;
            } catch (error) {
                return false;
            }
        }),
    Mobile: Yup.string()
        .required("لطفا شماره همراه خود را وارد کنید")
        .matches(
            /^(09)(0[1-5]|[1-3][0-9]|2[0-2]|9[0-3]|96)[0-9]{7}$/,
            "لطفا شماره همراه خود را به شکل صحیح وارد کنید"
        )
        .max(11, "شماره همراه نمیتواند بیشتر از 11 رقم باشد")
        .test("Mobile-Valid", "کاربر با این شماره موبایل وجود دارد", async (value) => {
            try {
                const {data}= await http.post("/admin/check" , {type:"Mobile" , Mobile:value})
                return true ;
            } catch (error) {
                return false ;
            }
        }),
    Password: Yup.string()
        .required("لطفا رمز عبور خود را وارد کنید")
        .min(8, "رمز عبور باید حداقل 8 عبارت باشد")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/,
            "رمز عبور باید شامل حداقل یک عدد و یک حرف باشد"
        ),
    RePassword: Yup.string()
        .required("لطفا رمز عبور خود را دوباره وارد کنید")
        .oneOf(
            [Yup.ref("Password"), null],
            "رمز عبور و تکرار آن همخوانی ندارند"
        ),
});

const AdminSignup = () => {
    const formik = useRef();

    const Register = AdminRegister();
    const onSubmit = async (values) => {
        const { RePassword, ...value } = values;
        try {
            const { data } = await Register.mutateAsync(value);

            toast.success(data.message, { theme: "colored" });
        } catch (error) {
            toast.error(error.response.data.message || error.message, {
                theme: "colored",
            });
            console.clear();
        }
    };

    return (
        <div className="flex flex-col gap-y-5 bg-neutral-100 border border-neutral-300 shadow-2xl px-10 py-5 rounded-lg">
            <div className="border-2 border-primary rounded-lg px-32 py-3 bg-primary">
                <h1 className="text-white text-2xl font-bold">
                    ثبت نام مدیر سایت
                </h1>
            </div>
            <Formik
                innerRef={formik}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
            >
                {({
                    isValid,
                    handleBlur,
                    errors,
                    setFieldError,
                    setStatus,
                }) => {
                    return (
                        <Form className="flex flex-col gap-y-5 text-primary font-bold">
                            <Input
                                label="نام و نام خانوادگی : "
                                type="text"
                                name="Name"
                            />
                            <Input label="ایمیل : " type="text" name="Email" />
                            <Input
                                label="شماره همراه : "
                                type="phone"
                                name="Mobile"
                            />
                            <Input
                                label="رمز عبور : "
                                type="password"
                                name="Password"
                            />
                            <Input
                                label="تکرار رمز عبور : "
                                type="password"
                                name="RePassword"
                            />
                            <button
                                type="submit"
                                disabled={
                                    isValid && !Register.isLoading
                                        ? false
                                        : true
                                }
                                className="bg-primary rounded-lg text-white py-3 text-xl transition-color ease-in-out duration-300 hover:bg-secondary disabled:transition-none disabled:hover:bg-primary h-14 "
                            >
                                {Register.isLoading ? (
                                    <Oval
                                        wrapperClass="flex justify-center"
                                        strokeWidth={8}
                                        strokeWidthSecondary={8}
                                        width={25}
                                        height={25}
                                        color="white"
                                        secondaryColor="white"
                                    />
                                ) : (
                                    "ثبت نام"
                                )}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default AdminSignup;
