import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container ({children}: ContainerProps){
    return (
        <>
            <main className="bg-[#F1F5F9] w-[1232px] min-h-screen mx-auto">
                {children}
            </main>
        </>
    )
}