import { Form, Formik } from "formik";
import Input from "../AdminLogin/Input";
import { Oval } from "react-loader-spinner";
import { useEffect, useRef, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AddLink from "@/Hooks/ReactQuery/AddLink";

const AddSocialLink = ({ id }) => {
    const [showModal, setShowModal] = useState(false);
    const modalCurrent = useRef();
    const overlayCurrent = useRef();
    const query = useQueryClient();

    const initialValues = {
        title_fa: "",
        title_en: "",
        link: "",
    };

    const validationSchema = Yup.object({
        title_fa: Yup.string()
            .required("لطفا عنوان را وارد کنید")
            .matches(/[\u0600-\u06FF\s]+$/, "عنوان را به صورت فارسی وارد کنید"),
        title_en: Yup.string()
            .required("لطفا عنوان را وارد کنید")
            .matches(/^[a-zA-Z\s]+$/, "عنوان را به صورت انگلیسی وارد کنید"),
        link: Yup.string()
            .required("لطفا آدرس مورد نظر را وارد کنید")
            .matches(/^(https:\/\/)/, "لینک مورد نظر باید با https:// شروع شود"),
    });

    const { mutateAsync, isLoading } = AddLink();

    const submitHandler = async (values , action) => {
        values.id = id;
        try {
            const { data } = await mutateAsync(values);
            query.invalidateQueries("Personal-Info");
            toast.success(data.message);
            action.resetForm() ;
            setShowModal(false);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const modal = modalCurrent.current;
        const overlay = overlayCurrent.current;

        if (showModal) {
            modal.classList.add("block");
            overlay.classList.add("block");
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
            setTimeout(() => {
                modal.classList.add("top-1/2");
                modal.classList.remove("-top-96");

                overlay.classList.add("opacity-40");
                overlay.classList.remove("opacity-0");
                overlay.classList.add("visible");
                overlay.classList.remove("collapse");
            });
        } else {
            modal.classList.remove("block");
            overlay.classList.remove("block");

            modal.classList.add("-top-96");
            modal.classList.remove("top-1/2");

            overlay.classList.add("opacity-0");
            overlay.classList.remove("opacity-40");
            overlay.classList.add("collapse");
            overlay.classList.remove("visible");

            if (!modal.classList.contains("hidden")) {
                setTimeout(() => {
                    modal.classList.add("hidden");
                    overlay.classList.add("hidden");
                }, 500);
            }
        }
    }, [showModal]);

    return (
        <>
            <div
                onClick={() => {
                    setShowModal(false);
                }}
                ref={overlayCurrent}
                className={`fixed top-0 left-0 bg-black w-full h-full z-[9999] opacity-0 collapse transition-all duration-700`}
            ></div>
            <div
                ref={modalCurrent}
                className={`hidden fixed border z-[10000] border-neutral-300 rounded-lg shadow-xl bg-neutral-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mr-auto p-5 transition-all duration-700`}
            >
                <div className="border-2 border-primary rounded-lg px-32 py-3 bg-primary">
                    <h1 className="text-white text-2xl font-bold">افزودن لینک</h1>
                </div>
                <div className="mt-5">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={submitHandler}
                    >
                        {() => {
                            return (
                                <Form className="flex flex-col gap-y-5 text-primary font-bold">
                                    <Input label="عنوان فارسی :" type="text" name="title_fa" />
                                    <Input label="عنوان انگلیسی :" type="text" name="title_en" />
                                    <Input label="آدرس :" type="text" name="link" />
                                    <button
                                        type="submit"
                                        className="bg-primary rounded-lg text-white py-3 text-xl transition-color ease-in-out duration-300 hover:bg-secondary disabled:transition-none disabled:hover:bg-primary h-14 mt-5 "
                                    >
                                        {isLoading ? (
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
                                            "افزودن"
                                        )}
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
            <button
                className="absolute left-1 top-5"
                title="افزودن لینک"
                onClick={() => setShowModal(true)}
            >
                <MdAddBox className="w-6 h-6 text-green-800" />
            </button>
        </>
    );
};

export default AddSocialLink;
