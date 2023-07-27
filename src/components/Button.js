import classNames from "classnames";

const Button = ({ title, className, clickHandler, typeBtn = "button" }) => {
    return (
        <button
            type={typeBtn}
            onClick={clickHandler}
            className={classNames(className, " rounded-full  py-2")}
        >
            {title}
        </button>
    );
};

export default Button;
