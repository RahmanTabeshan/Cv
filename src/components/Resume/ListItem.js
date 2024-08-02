import Link from "next/link";

const ListItem = ({ ProjectName, ProjectLink, GithubLink, details }) => {
    return (
        <li className="mt-3">
            <div className="flex gap-x-2 items-end">
                <p className="font-bold text-base">نام پروژه :</p>
                <p className="text-sm">{ProjectName}</p>
            </div>
            <div className="flex gap-x-2 items-end mt-2">
                <p className="font-bold text-base">لینک پروژه :</p>
                <p className="text-sm">
                    <Link href={ProjectLink} className="text-blue-500">
                        {ProjectLink}
                    </Link>
                </p>
            </div>
            <div className="flex gap-x-2 items-end mt-2">
                <p className="font-bold text-base">لینک گیت هاب پروژه :</p>
                <p className="text-sm">
                    <Link href={GithubLink} className="text-blue-500">
                        {GithubLink}
                    </Link>
                </p>
            </div>
            <div className="flex gap-x-2 mt-2">
                <p className="font-bold text-base whitespace-nowrap">توضیحات : </p>
                <p className="text-sm">{details}</p>
            </div>
        </li>
    );
};

export default ListItem;
