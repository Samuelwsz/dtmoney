import { useContext } from "react"
import Header from "../components/header"
import Summary from "../components/summary"
import SearchForm from "./components/searchForm"
import { TransactionsContext } from "../contexts/TransactionsContext"

export default function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <div>
        <Header />
        <Summary />
        <SearchForm />
        <table className="w-4/5 m-auto">
          <tbody className="text-white">
            {transactions.map((transaction) => {
              // Converter a string de data para um objeto Date
              const dateObject = new Date(transaction.createdAt)

              // Obter as partes da data
              const year = dateObject.getFullYear()
              const month = (dateObject.getMonth() + 1)
                .toString()
                .padStart(2, "0")
              const day = dateObject.getDate().toString().padStart(2, "0")

              // Formatar a data no formato desejado (no exemplo, YYYY-MM-DD)
              const formattedDate = `${day}-${month}-${year}`

              return (
                <tr
                  className="bg-gray-700 flex flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-28 xl:gap-56 p-3 my-3 rounded-md"
                  key={transaction.id}
                >
                  <td className="w-full md:w-2/4 lg:w-2/4 mb-2 lg:mb-0">
                    {transaction.description}
                  </td>
                  <td className="flex-shrink-0">R${transaction.price}</td>
                  <td className="flex-shrink-0">{transaction.category}</td>
                  <td className="flex-shrink-0">{formattedDate}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
