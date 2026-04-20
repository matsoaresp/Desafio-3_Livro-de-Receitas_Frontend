import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container ({children}: ContainerProps){
    return (
        <main className="bg-[#F1F5F9] w-full max-w-[1240px] min-h-screen mx-auto px-4 py-8">
            {children}
        </main>
    )
}