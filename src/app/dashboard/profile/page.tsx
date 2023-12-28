import BreadCrumb from "src/components/breadcrumb";
import { CreateProfileOne } from "src/components/forms/user-profile-stepper/create-profile";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];

export default function PageProfile() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {/* <CreateProfileOne categories={[]} initialData={null} /> */}
      </div>
    </>
  );
}
