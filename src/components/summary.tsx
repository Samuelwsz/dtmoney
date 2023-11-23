import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid"
import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export default function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price
      } else {
        acc.outcome += transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 text-white items-center text-center justify-center mt-[-50px] w-4/5 m-auto">
        <div className="bg-gray-700 p-8 rounded-lg">
          <header className="flex items-center pb-5 justify-between">
            <span>Entradas</span>
            <ArrowUpCircleIcon className="w-6 h-6 text-green-500" />
          </header>
          <strong className="flex text-xl">R$ 17.400,00</strong>
        </div>
        <div className="bg-gray-700 p-8 rounded-lg ">
          <header className="flex items-center pb-5 justify-between">
            <span>Saídas</span>
            <ArrowDownCircleIcon className="w-6 h-6 text-red-600" />
          </header>
          <strong className="flex text-xl">R$ 1.259,00</strong>
        </div>
        <div className="bg-green-800 p-8 rounded-lg">
          <header className="flex items-center pb-5 justify-between">
            <span>Total</span>
            <CurrencyDollarIcon className="w-6 h-6 text-white" />
          </header>
          <strong className="flex text-xl">R$ 16.141,00</strong>
        </div>
      </div>
    </>
  )
}
