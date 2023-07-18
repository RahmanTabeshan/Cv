import http from "@/Services/http";
import Card from "@/components/AboutMe/InfoCard/Card";
import SkillCard from "@/components/AboutMe/SkillCard/SkillCard";
import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import { FaUser } from "react-icons/fa";

const AbouteMe = ({skills}) => {
    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 pr-6 ">
                <MainHead
                    title="درباره من"
                    icon={<FaUser className="text-primary w-6 h-6" />}
                />
                <div className="flex flex-col w-full h-full">
                    <div className="w-full flex flex-col gap-y-1">
                        <p>سلام.</p>
                        <p>
                            من رحمان تابشان توسعه دهنده فرانت با بیش از 2 سال
                            سابقه آموزش و کار تخصصی در حوزه فرانت و به خصوص ریکت
                            هستم.
                        </p>
                        <p>
                            هر روز و هر لحظه در حال یادگیری ، کار و تمرین با
                            فریمورک ها و کتابخانه های مرتبط با فرانت و به خصوص
                            ریکت هستم.
                        </p>
                        <p>
                            یادگیری و تمرین من در این مسیر در جایی متوقف نخواهد
                            شد و این راه ادامه خواهد داشت .
                        </p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <Card title="تعداد پروژه" text={["5+"]} />
                        <Card title="سابقه" text={["2+ سال"]} />
                        <Card
                            title="شرایط شغلی"
                            text={["فریلنسر", "دورکاری", "حضوری"]}
                        />
                        <Card title="وضعیت شغلی" text={["آزاد"]} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <h1 className="font-bold text-lg">مهارت ها : </h1>
                        <div className="flex flex-wrap gap-x-2 gap-y-4 mt-2 items-center">
                            {skills.map((skill) => (
                                <SkillCard key={skill._id} title={skill.en_title} />
                            ))}
                            <SkillCard title="و بسیاری دیگر از کتابخانه ها و فریمورک های مرتبط" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <h1 className="font-bold text-lg">توضیحات : </h1>
                        <div className="mt-2">
                            <p>
                                در زمینه استفاده از کتابخانه ها و فریمورک ها
                                برای ایجاد کامپوننت های مختلف تمام سعی خودم این
                                است که تا حد امکان از کتاب خانه یا فریمورک
                                استفاده نشود و با استفاده از کلاس ها و کدهای
                                جاوااسکریپت و ریکت و به صورت شخصی سازی شده
                                کامپوننت ها رو بسازم.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AbouteMe;

export async function getServerSideProps() {

    const {data} = await http.get("/skills") ;

    return {
        props:{
            skills : data.skills 
        } 
    }
}

