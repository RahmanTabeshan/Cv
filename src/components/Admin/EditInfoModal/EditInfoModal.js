import { Form, Formik } from "formik";
import Input from "../AdminLogin/Input";
import { Oval } from "react-loader-spinner";
import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import EditInfo from "@/Hooks/ReactQuery/EditInfo";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import * as Yup from "yup";

const EditInfoModal = ({ name, label, type, value }) => {
    const [showModal, setShowModal] = useState(false);
    const modalCurrent = useRef();
    const overlayCurrent = useRef();
    const query = useQueryClient();

    const initialValues = {
        id: value.id,
        [name]: value.value,
    };

    let validationSchema;
    switch (name) {
        case "Name/fa": {
            validationSchema = Yup.object({
                "Name/fa": Yup.string()
                    .required("لطفا نام خود را وارد کنید")
                    .min(3, "نام نمیتواند کمتر از سه حرف باشد")
                    .matches(/[\u0600-\u06FF\s]+$/, "نام خود را به صورت فارسی وارد کنید"),
            });
            break;
        }

        case "Name/en": {
            validationSchema = Yup.object({
                "Name/en": Yup.string()
                    .required("لطفا نام خود را وارد کنید")
                    .min(3, "نام نمیتواند کمتر از سه حرف باشد")
                    .matches(/^[a-zA-Z\s]+$/, "نام خود را به صورت انگلیسی وارد کنید"),
            });
            break;
        }

        case "phone": {
            validationSchema = Yup.object({
                phone: Yup.string()
                    .required("لطفا شماره همراه خود را وارد کنید")
                    .matches(
                        /^(09)(0[1-5]|[1-3][0-9]|2[0-2]|9[0-3]|96)[0-9]{7}$/,
                        "لطفا شماره همراه خود را به شکل صحیح وارد کنید"
                    ),
            });
            break;
        }

        case "numProject": {
            validationSchema = Yup.object({
                numProject: Yup.number()
                    .typeError("لطفا مقدار ورودی را به صورت عددی وارد کنید")
                    .required("مقدار ورودی نمیتواند خالی باشد"),
            });
            break;
        }

        case "condition": {
            validationSchema = Yup.object({
                condition: Yup.string()
                    .oneOf(["آزاد", "مشغول به کار", "استخدام"], "لطفا مقدار مشخص شده را وارد کنید")
                    .required("مقدار ورودی نمیتواند خالی باشد"),
            });
            break;
        }

        case "socialLink/Telegram": {
            validationSchema = Yup.object({
                "socialLink/Telegram": Yup.string()
                    .required("مقدار ورودی نمیتواند خالی باشد")
                    .matches(/^(https:\/\/)/, "لینک مورد نظر باید با https:// شروع شود"),
            });
            break;
        }

        default:
            break;
    }

    const { mutateAsync, isLoading } = EditInfo();
    const submitHandler = async (value) => {
        try {
            const { data } = await mutateAsync({ url: name, data: value });
            query.invalidateQueries("Personal-Info");
            setShowModal(false);
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            console.clear();
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
                }, 700);
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
                    <h1 className="text-white text-2xl font-bold">ویرایش اطلاعات</h1>
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
                                    <Input label={label} type={type} name={name} />
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
                                            "ویرایش"
                                        )}
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
            <button onClick={() => setShowModal(true)}>
                <CiEdit className="w-8 h-8" />
            </button>
        </>
    );
};

export default EditInfoModal;
