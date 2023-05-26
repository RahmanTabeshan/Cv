const Card = ({title,text}) => {
    return (
        <div className="flex flex-col bg-white border border-primary rounded-lg p-2 min-w-[8rem]">
            <div className="flex justify-center border-b-2 border-b-primary pb-1">
                <h1 className="font-bold">{title}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1 pt-1 h-full">
                {text.map((item,index)=>(
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}
 
export default Card;