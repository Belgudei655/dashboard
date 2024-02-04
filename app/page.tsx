import Image from "next/image";
import InfoBar from "./components/userDashboard/infoBar";
import UserCrud from "./components/userDashboard/search/userCrud";
import Footer from "./components/userDashboard/footer";
import UserList from "./components/userDashboard/userList";
export default function Home() {
  return (
    <div className="flex flex-col">
      <InfoBar />
      <UserCrud />
      <UserList />
      <div className="mt-[15px] ml-[30vw]">
        <Footer />
      </div>
    </div>
  );
}
