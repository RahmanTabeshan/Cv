import PersonalData from "@/Hooks/ReactQuery/PersonalInfo";
import EditInfoModal from "@/components/Admin/EditInfoModal/EditInfoModal";
import PersonItem from "@/components/Admin/PersonInfo/PersonItem";
import ProfileImage from "@/components/Admin/ProfileImage/ProfileImage";
import DashboardLayout from "@/components/Dashboard/Layout";
import MainLayout from "@/components/Dashboard/Main/MainLayout";
import ObjToArr from "@/utils/objectToArray";

const PersonalInfo = () => {
    const { data, isLoading, isFetching } = PersonalData();

    // if (data) console.log(data.data.info);
    // if (data) console.log(ObjToArr(data.data.info));

    return (
        <DashboardLayout>
            <MainLayout>
                <div className="w-full h-full px-5">
                    <div className="w-full h-full bg-neutral-100 rounded-lg overflow-hidden">
                        <div className="w-full bg-gradient-to-l from-primary to-secondary h-52"></div>
                        <div className="flex flex-col">
                            <div className="flex justify-between relative px-10 py-5 pb-16 h-max border-b-2 border-b-white">
                                <div className="flex pr-72">
                                    <ProfileImage
                                        info={data?.data?.info}
                                        loading={isLoading || isFetching}
                                    />
                                    <div className="flex flex-col gap-y-1">
                                        <div className="font-bold text-2xl flex flex-col gap-y-5 items-center gap-x-2">
                                            <div className="flex justify-between gap-x-2">
                                                {isLoading || isFetching ? (
                                                    "Loading..."
                                                ) : (
                                                    <>
                                                        <p>{data.data.info.Name.fa}</p>
                                                        <EditInfoModal
                                                            name="Name/fa"
                                                            label="نام:"
                                                            type="text"
                                                            value={{
                                                                id: data.data.info._id,
                                                                value: data.data.info.Name.fa,
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center gap-x-2">
                                                {isLoading || isFetching ? (
                                                    "Loading..."
                                                ) : (
                                                    <>
                                                        <p className="text-lg">{data.data.info.Name.en}</p>
                                                        <EditInfoModal
                                                            name="Name/en"
                                                            label="نام:"
                                                            type="text"
                                                            value={{
                                                                id: data.data.info._id,
                                                                value: data.data.info.Name.en,
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-repeat justify-around gap-y-8 p-10 ">
                                {isLoading
                                    ? "Loading..."
                                    : ObjToArr(data.data.info).map((info, index) => (
                                          <PersonItem
                                              key={index}
                                              loading={isFetching}
                                              name={Object.keys(info)[0]}
                                              title={
                                                  Object.values(info)[0].title || Object.values(info)[0][0].parentTitle
                                              }
                                              initialValue={{ id: data.data.info._id, value: info[Object.keys(info)] }}
                                          />
                                      ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </DashboardLayout>
    );
};

export default PersonalInfo;
