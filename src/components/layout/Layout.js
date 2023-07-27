import React from "react";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div className="bg-mainbg">
            <Header />
            {children}
        </div>
    );
}

export default Layout;
