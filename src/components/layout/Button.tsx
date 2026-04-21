interface ButtonProps {
    onClick?: () => void;
    className?: String;
}

export function Button ({onClick, className}: ButtonProps) {

    return (
        <>
            <button
            className={`${className || ""}`}
             onClick={onClick}>Pesquisar</button>
             
        </>
    )
}