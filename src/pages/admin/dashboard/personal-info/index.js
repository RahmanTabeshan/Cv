import PersonalData from "@/Hooks/ReactQuery/PersonalInfo";
import AddSocialLink from "@/components/Admin/AddSocialLink/AddSocialLink";
import EditInfoModal from "@/components/Admin/EditInfoModal/EditInfoModal";
import PersonItem from "@/components/Admin/PersonInfo/PersonItem";
import ProfileImage from "@/components/Admin/ProfileImage/ProfileImage";
import DashboardLayout from "@/components/Dashboard/Layout";
import MainLayout from "@/components/Dashboard/Main/MainLayout";
import ObjToArr from "@/utils/objectToArray";
import Skeleton from "react-loading-skeleton";

const PersonalInfo = () => {
    const { data, isLoading, isFetching } = PersonalData();

    // if (data) console.log(data.data.info);
    // if (data) console.log(ObjToArr(data.data.info));

    return (
        <DashboardLayout>
            <MainLayout>
                <div className="w-full h-full px-5">
                    <div className="w-full h-full bg-neutral-100 rounded-lg overflow-hidden">
                        <div className="w-full bg-gradient-to-r from-neutral-300 to-neutral-400 h-52"></div>
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
                                                    <Skeleton width={250} height={30} />
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
                                                    <Skeleton width={250} height={25} />
                                                ) : (
                                                    <>
                                                        <p className="text-lg h-4">
                                                            {data.data.info.Name.en}
                                                        </p>
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
                                <div>
                                    <button className="border-2 border-primary rounded-xl py-3 px-4 text-sm font-bold bg-primary text-white transition-colors duration-200 hover:bg-secondary">
                                        افزودن اطلاعات
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-repeat justify-around gap-y-8 p-10 ">
                                {isLoading
                                    ? Array(4)
                                          .fill(1)
                                          .map((key, index) => (
                                              <PersonItem
                                                  key={index}
                                                  loading={isLoading || isFetching}
                                                  initialValue={{ value: null }}
                                              />
                                          ))
                                    : ObjToArr(data.data.info).map((info, index) => (
                                          <div key={index} className="relative">
                                              <PersonItem
                                                  loading={isLoading || isFetching}
                                                  name={Object.keys(info)[0]}
                                                  title={
                                                      Object.values(info)[0].title ||
                                                      Object.values(info)[0][0].parentTitle
                                                  }
                                                  initialValue={{
                                                      id: data.data.info._id,
                                                      value: info[Object.keys(info)],
                                                  }}
                                              />
                                              {Object.keys(info)[0] === "socialLink" ? (
                                                  <AddSocialLink id={data.data.info._id} />
                                              ) : null}
                                          </div>
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
