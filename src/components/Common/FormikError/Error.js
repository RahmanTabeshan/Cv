const Error = (props) => {
    return (
        <div className="text-red-600 text-sm">
            {props.children}
        </div>
    );
}
 
export default Error;