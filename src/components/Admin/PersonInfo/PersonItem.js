import Skeleton from "react-loading-skeleton";
import EditInfoModal from "../EditInfoModal/EditInfoModal";
import { MdDeleteForever } from "react-icons/md";
import DeleteLink from "@/Hooks/ReactQuery/DeleteLink";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const PersonItem = ({ title, initialValue, name, loading }) => {
    const { value } = initialValue;
    const query = useQueryClient();

    const { isLoading , mutateAsync  } = DeleteLink();
    const deleteLink = async (personId, deletedId) => {
        try {
            const { data } = await mutateAsync({ id: personId, deletedId });
            query.invalidateQueries("Personal-Info");
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message) ;
            console.clear();
        }
    };

    return (
        <div className="flex flex-col gap-y-2 items-center p-5 bg-white rounded-xl h-full">
            <div className="text-neutral-600">
                {loading ? (
                    <Skeleton width={150} height={25} />
                ) : (
                    `${value.title || value[0].parentTitle} :`
                )}
            </div>
            <div className="flex flex-col w-full">
                {loading ? (
                    <div className="flex flex-col">
                        <Skeleton width={200} height={20} />
                        <Skeleton width={200} height={20} />
                    </div>
                ) : Array.isArray(value) ? (
                    value.map((val) => (
                        <div key={val._id} className="flex justify-between items-center gap-x-2">
                            <p className="line-clamp-1">{val.title_fa}</p>
                            <div className="flex gap-x-4 items-center">
                                <EditInfoModal
                                    name={`${name}/${val.title_en}`}
                                    type="text"
                                    value={{ id: initialValue.id, value: val.value }}
                                    label={`${title + "_" + val.title_fa} :`}
                                />
                                {isLoading ? (
                                    <div>
                                        <Oval
                                                wrapperClass="flex justify-center"
                                                strokeWidth={8}
                                                strokeWidthSecondary={8}
                                                width={20}
                                                height={20}
                                                color="gray"
                                                secondaryColor="gray"
                                            />
                                    </div>
                                ) : (
                                    <MdDeleteForever
                                        onClick={() => deleteLink(initialValue.id, val._id)}
                                        className="w-6 h-6 cursor-pointer text-red-800"
                                    />
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex justify-between items-center gap-x-2 ">
                        <p className="font-bold">{value.value}</p>
                        <EditInfoModal
                            name={name}
                            type="text"
                            value={{ id: initialValue.id, value: value.value }}
                            label={`${title} :`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonItem;
