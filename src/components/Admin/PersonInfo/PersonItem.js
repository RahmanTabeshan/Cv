import Skeleton from "react-loading-skeleton";
import EditInfoModal from "../EditInfoModal/EditInfoModal";

const PersonItem = ({ title, initialValue, name, loading }) => {
    const { value } = initialValue;
    return (
        <div className=" flex flex-col gap-y-2 items-center p-5 bg-white rounded-xl">
            <div className="text-neutral-600">
                {loading ? <Skeleton width={150} height={25} /> : `${value.title || value[0].parentTitle} :`}
            </div>
            <div className="flex flex-col w-full">
                {loading ? (
                    <div className="flex flex-col">
                        <Skeleton width={200} height={20} />
                        <Skeleton width={200} height={20} />
                    </div>
                ) : Array.isArray(value) ? (
                    value.map((val) => (
                        <div key={val._id} className="flex justify-between items-center gap-x-2 ">
                            <p className="line-clamp-1">{loading ? "loading..." : val.value}</p>
                            <EditInfoModal
                                name={`${name}/${val.title_en}`}
                                type="text"
                                value={{ id: initialValue.id, value: val.value }}
                                label={`${title + "_" + val.title_fa} :`}
                            />
                        </div>
                    ))
                ) : (
                    <div className="flex justify-between items-center gap-x-2 ">
                        <p className="font-bold">{loading ? "loading..." : value.value}</p>
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
