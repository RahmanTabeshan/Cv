import { Form, Formik } from "formik";
import Input from "../AdminLogin/Input";
import { Oval } from "react-loader-spinner";
import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import EditInfo from "@/Hooks/ReactQuery/EditInfo";
import { QueryClient, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const EditInfoModal = ({ name, label, type, value }) => {
    const [showModal, setShowModal] = useState(false);
    const modalCurrent = useRef();
    const overlayCurrent = useRef();
    const query = useQueryClient();

    const initialValues = {
        id: value.id,
        [name]: value.value,
    };

    const { mutateAsync , isLoading } = EditInfo();

    const submitHandler = async (value) => {
        try {
            const {data} = await mutateAsync({ url: name, data: value });
            query.invalidateQueries("Personal-Info");
            setShowModal(false) ;
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message);
            console.clear() ;
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
                    <Formik initialValues={initialValues} onSubmit={submitHandler}>
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
