import MainHeader from "./MainHeader/MainHeader";

const MainLayout = ({ children , date }) => {
    return (
        <main className="w-full px-12 py-7">
            <div className="flex flex-col w-full h-full rounded-xl gap-y-5">
                <MainHeader/>
                {children}
            </div>
        </main>
    );
};

export default MainLayout;
