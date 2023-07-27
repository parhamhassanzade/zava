import React from "react";
import { FaDoorOpen, FaLaptopCode } from "react-icons/fa";
import { HiOutlineUserGroup, HiOutlineHomeModern } from "react-icons/hi2";
import { GiCandlestickPhone } from "react-icons/gi";
import { CgDesignmodo } from "react-icons/cg";
function SidemMenu({ showSideBar, SiderMenuHandler }) {
    return (
        <>
            {showSideBar && (
                <div className="absolute h-[80vh] flex flex-col   bg-dark-brown w-[50vw] rounded-e-3xl animate-openmenu">
                    <div onClick={() => SiderMenuHandler()} className="p-2">
                        <FaDoorOpen className="text-3xl text-mainbg float-right " />
                    </div>
                    <div className="p-3  h-[80%] flex flex-col justify-evenly">
                        <div className="flex justify-start items-center gap-5 text-mainbg hover:text-dark-brown hover:bg-mainbg rounded-full p-2 ">
                            <HiOutlineHomeModern className="text-lg  " />
                            <p className="font-bold text-lg  font-mono">Home</p>
                        </div>
                        <div className="flex justify-start items-center gap-5 text-mainbg hover:text-dark-brown hover:bg-mainbg rounded-full p-2">
                            <HiOutlineUserGroup className="text-lg   " />
                            <p className="font-bold text-lg  font-mono">About Us</p>
                        </div>
                        <div className="flex justify-start items-center gap-5 text-mainbg hover:text-dark-brown hover:bg-mainbg rounded-full p-2">
                            <GiCandlestickPhone className="text-lg   " />
                            <p className="font-bold text-lg font-mono">Contact Us</p>
                        </div>
                        <div className="flex justify-start items-center gap-5 text-mainbg hover:text-dark-brown hover:bg-mainbg rounded-full p-2">
                            <FaLaptopCode className="text-lg - " />
                            <p className="font-bold text-lg  font-mono">Design</p>
                        </div>
                        <div className="flex justify-start items-center gap-5 text-mainbg hover:text-dark-brown hover:bg-mainbg rounded-full p-2">
                            <CgDesignmodo className="text-lg   " />
                            <p className="font-bold text-lg  font-mono">Studio</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SidemMenu;
