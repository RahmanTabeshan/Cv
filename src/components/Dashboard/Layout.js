import SideBar from "./SideBar/SideBar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex w-full gap-x-10">
            <SideBar />
            {children}
        </div>
    );
};

export default DashboardLayout;
