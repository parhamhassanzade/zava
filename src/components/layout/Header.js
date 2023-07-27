import React from "react";
import { CgMenuLeft } from "react-icons/cg";

function Header() {
    return (
        <div className="flex justify-between items-center p-3 w-full">
            <CgMenuLeft className="text-3xl " />
            <div className="flex justify-center items-center  w-full ">
                <p className="text-3xl font-black font-mono">ZAVA</p>
            </div>
        </div>
    );
}

export default Header;
