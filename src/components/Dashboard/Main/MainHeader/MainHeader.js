import { useSelector } from "react-redux";

const MainHeader = () => {
    const Admin = useSelector((state) => state.AdminInfo.Admin);
    const date = useSelector((state) => state.Date);
    return (
        <div className="px-5 pl-10">
            <div className="w-full flex justify-between py-5 border-b-2 border-b-neutral-100">
                <div className="flex flex-col gap-y-2">
                    <div className="font-extrabold text-2xl">سلام وقت بخیر</div>
                    <div className="flex gap-x-0.5 text-xs text-neutral-500">
                        <p>{date ? date.day : "Loading..."}</p>
                        <p>،</p>
                        <p>{date ? date.date : "Loading..."}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">{Admin.Name}</div>
                    <div className="text-neutral-500 text-sm">{Admin.Role}</div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
