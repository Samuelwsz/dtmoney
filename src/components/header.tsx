import logo from "../assets/Logo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import Modal from "./modal"

export default function Header() {
  return (
    <>
      <header className="bg-black">
        <div className="flex py-12 pb-20 justify-between items-center w-4/5 m-auto">
          <img src={logo} />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="bg-green-600 p-3 rounded-lg font-semibold text-white hover:bg-green-700 transition duration-300 ease-in-out">
                Nova transação
              </button>
            </Dialog.Trigger>
            {/*em modal.tsx maneira simples de se criar um modal usando radix ui*/}
            <Modal />
          </Dialog.Root>
        </div>
      </header>
    </>
  )
}
