interface ButtonProps {
    onClick?: () => void;
}

export function Button ({onClick}: ButtonProps) {

    return (
        <>
            <button className="bg-[#334155]" onClick={onClick}>Pesquisar</button>
        </>
    )
}