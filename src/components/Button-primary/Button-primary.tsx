import "./Button-primary.scss";

type ButtonPrimaryProps = {
    title?: string;
    subtitle?: string;
    func?: () => void;
    className?: string;
};

function ButtonPrimary({
    title = "Text",
    subtitle,
    func,
    className,
}: ButtonPrimaryProps) {
    return (
        <>
            <button
                onClick={func}
                className={`buttonPrimary flex flex-col items-center ${
                    className || ""
                }`}
            >
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </button>
        </>
    );
}
export default ButtonPrimary;
