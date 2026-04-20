interface ButtonProps {
    onClick?: () => void;
}

export function Button ({onClick}: ButtonProps) {

    return (
        <>
            <button className="bg-[#0F172A] rounded-lg p-3 white text-[#FFFFFF] font-semibold" onClick={onClick}>Pesquisar</button>
        </>
    )
}