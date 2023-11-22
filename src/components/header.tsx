import logo from "../assets/Logo.svg"

export default function Header() {
  return (
    <>
      <header>
        <div className="flex py-12 justify-between px-16 bg-black items-center">
          <img src={logo} />
          <button className="bg-green-600 p-3 rounded-lg font-semibold text-white hover:bg-green-700 transition duration-300 ease-in-out">
            Nova transação
          </button>
        </div>
      </header>
    </>
  )
}
