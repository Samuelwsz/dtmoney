import Header from "../components/header"
import Summary from "../components/summary"
import { SearchForm } from "./components/searchForm"
import { TransactionsContext } from "../contexts/TransactionsContext"
import { dateFormatter, priceFormatter } from "../utils/formatter"
import { useContextSelector } from "use-context-selector"
import { TrashIcon } from "@heroicons/react/24/solid"

export default function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.deleteTransaction
  )

  const handleDelete = async (id: number) => {
    try {
      await deleteTransaction(id)
    } catch (error) {
      console.error("Error deleting transaction:", error)
    }
  }

  return (
    <>
      <div>
        <Header />
        <Summary />
        <SearchForm />
        <table className="w-4/5 m-auto overflow-x-auto">
          <tbody className="text-white">
            {transactions.map((transaction) => {
              return (
                <tr
                  className="bg-gray-700 flex flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-24 xl:gap-48 p-3 my-3 rounded-md md:items-center lg:items-center xl:items-center"
                  key={transaction.id}
                >
                  <td className="w-full md:w-2/4 lg:w-2/4 mb-2 lg:mb-0">
                    {transaction.description}
                  </td>
                  <td
                    className={`flex-shrink-0 ${
                      transaction.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </td>
                  <td className="md:w-2/4 lg:w-2/4 mb-2 lg:mb-0">
                    {transaction.category}
                  </td>
                  <td className="flex-shrink-0">
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td
                    className="text-gray-300 cursor-pointer"
                    onClick={() => handleDelete(transaction.id)}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
