import logo from "../assets/Logo.svg"

export default function Header() {
  return (
    <>
      <header className="bg-black">
        <div className="flex py-12 pb-20 justify-between items-center w-4/5 m-auto">
          <img src={logo} />
          <button className="bg-green-600 p-3 rounded-lg font-semibold text-white hover:bg-green-700 transition duration-300 ease-in-out">
            Nova transação
          </button>
        </div>
      </header>
    </>
  )
}
