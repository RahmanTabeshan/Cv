
const MainHead = ({title,icon}) => {
    return (
        <div className="flex gap-x-2 items-center border-b-2 border-b-neutral-300 pb-2 ">
            {icon}
            <h1 className="text-lg h-5 font-bold flex items-start text-neutral-600git">{title}</h1>
        </div>
    );
}
 
export default MainHead;