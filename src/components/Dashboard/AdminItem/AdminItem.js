const InfoItem = ({title , value}) => {
    return (
        <div className=" flex flex-col gap-y-2 items-center">
            <div className="text-neutral-600">{title}</div>
            <div className="font-bold">{value ? value : "وارد نشده"}</div>
        </div>
    );
};

export default InfoItem;
