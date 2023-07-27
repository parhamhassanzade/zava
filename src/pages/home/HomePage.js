import React from "react";
import logo from "../../assets/images/zavalogo.png";
import { Button } from "../../components";
function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-mainbg">
            <img src={logo} width={"70%"} height={"70%"} />
            <div className="mt-5">
                <p className="text-dark-brown text-2xl font-black">
                    Be The Best Version Of You
                </p>
                <div className="flex justify-center items-center gap-5 mt-10">
                    <Button
                        title={"Studio"}
                        className={
                            "border border-blur-light-orange text-2xl font-bold px-4 hover:text-mainbg hover:bg-dark-brown"
                        }
                    />
                    <Button
                        title={"Design"}
                        className={
                            "border border-blur-light-orange text-2xl font-bold px-4 hover:text-mainbg hover:bg-dark-brown"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
