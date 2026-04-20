import { Form } from "./Form";

export function Section() {
  return (
    <section className="bg-white w-full max-w-[1175px] flex flex-col items-center rounded-lg mx-auto min-h-screen px-4 overflow-hidden">

      <div className="flex flex-col items-center mt-20 w-full">
        <h1 className="text-[26px] font-medium text-center">
          Categorias e pratos
        </h1>

        <Form />
      </div>

      <h2 className="mt-10 font-medium text-[22px]">
        Categorias
      </h2>

    </section>
  );
}