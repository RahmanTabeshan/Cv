import AdminLogin from "@/Hooks/ReactQuery/AdminLogin";
import http from "@/Services/http";
import Input from "@/components/Admin/AdminLogin/Input";
import axios from "axios";
import cookieParser from "cookie-parser";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";
import * as Yup from "yup";

const initialValues = {
    UserName: "",
    Password: "",
};

const validationSchema = Yup.object({
    UserName: Yup.string()
        .required("لطفا نام کاربری خود را وارد کنید")
        .email("نام کاربری معتبر نیست"),
    Password: Yup.string()
        .required("لطفا رمز عبور خود را وارد کنید")
        .min(8, "رمز عبور اشتباه وارد شده است"),
});

const Admin = () => {
    const Router = useRouter();

    const login = AdminLogin();

    const onSubmit = async (values) => {
        try {
            const data = await login.mutateAsync(values);
            Router.push("/admin/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col gap-y-5 bg-neutral-100 border border-neutral-300 shadow-2xl px-10 py-5 rounded-lg">
            <div className="border-2 border-primary rounded-lg px-32 py-3 bg-primary">
                <h1 className="text-white text-2xl font-bold">
                    ورود به صفحه مدیریت سایت
                </h1>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
            >
                {({ isValid }) => {
                    return (
                        <Form className="flex flex-col gap-y-5 text-primary font-bold">
                            <Input
                                label="نام کاربری : "
                                type="text"
                                name="UserName"
                            />
                            <Input
                                label="رمز عبور : "
                                type="password"
                                name="Password"
                            />
                            <button
                                type="submit"
                                disabled={
                                    isValid && !login.isLoading ? false : true
                                }
                                className="bg-primary rounded-lg text-white py-3 text-xl transition-color ease-in-out duration-300 hover:bg-secondary disabled:transition-none disabled:hover:bg-primary h-14 "
                            >
                                {login.isLoading ? (
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
                                    "ورود"
                                )}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Admin;

export async function getServerSideProps(ctx) {
    const { cookies } = ctx.req; // object of cookies
    const cookie = ctx.req.headers.cookie; // string of cookie most send to backend for auth

    const { data } = await http.get("/auth/admintoken", {
        headers: {
            cookie,
        },
    });

    if (cookies.AdminToken && data.user && data.success) {
        return {
            redirect: {
                permanent: false,
                destination: "/admin/dashboard",
            },
        };
    }
    return {
        props: {
            data: null,
        },
    };
}
