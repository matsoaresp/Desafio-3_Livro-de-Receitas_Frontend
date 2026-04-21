import { Button } from "./Button";

export function Form() {

    return (
        <>
            <form className="flex flex-col md:flex-row gap-3 md:gap-5 mt-7 w-full">
                <input
                    className="w-[1000px] p-2 border rounded-lg bg-[#3B3B3B] text-[#FFFFFF]  h-[60px]  text-[20px]"
                    type="text"
                    placeholder="  Pesquise algum prato"
                />
                <Button  className={"bg-[#0F172A] rounded-lg p-3 white text-[#FFFFFF] font-semibold cursor-pointer"}/>
            </form>
        </>
    )

}