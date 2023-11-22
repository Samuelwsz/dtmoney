import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid"

export default function Summary() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 text-white items-center text-center justify-center mt-[-50px] w-4/5 m-auto">
        <div className="bg-gray-700 p-8 rounded-lg">
          <header className="flex items-center pb-5 justify-between">
            <span>Entradas</span>
            <ArrowUpCircleIcon className="w-5 h-5 text-green-500" />
          </header>
          <strong className="flex text-xl">R$ 17.400,00</strong>
        </div>
        <div className="bg-gray-700 p-8 rounded-lg ">
          <header className="flex items-center pb-5 justify-between">
            <span>Saídas</span>
            <ArrowDownCircleIcon className="w-5 h-5 text-red-600" />
          </header>
          <strong className="flex text-xl">R$ 1.259,00</strong>
        </div>
        <div className="bg-gray-700 p-8 rounded-lg">
          <header className="flex items-center pb-5 justify-between">
            <span>Entradas</span>
            <CurrencyDollarIcon className="w-5 h-5 text-white" />
          </header>
          <strong className="flex text-xl">R$ 17.400,00</strong>
        </div>
      </div>
    </>
  )
}
