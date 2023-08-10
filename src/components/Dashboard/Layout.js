import SideBar from "./SideBar/SideBar";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <SideBar />
            {children}
        </>
    );
};

export default DashboardLayout;
