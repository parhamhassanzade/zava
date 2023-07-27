import { useState } from "react";
import Header from "./Header";
import SidemMenu from "./SidemMenu";

function Layout({ children }) {
    const [showSideBar, setShowSideBar] = useState(false)
    const SiderMenuHandler = () => {
        console.log("here");
        setShowSideBar(!showSideBar)
    }
    return (
        <div className="bg-mainbg relative">
            <SidemMenu SiderMenuHandler={SiderMenuHandler} showSideBar={showSideBar} />
            <Header SiderMenuHandler={SiderMenuHandler} />
            {children}
        </div>
    );
}

export default Layout;
