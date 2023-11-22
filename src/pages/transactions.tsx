import Header from "../components/header"
import Summary from "../components/summary"
import SearchForm from "./components/searchForm"

export default function Transactions() {
  return (
    <>
      <div>
        <Header />
        <Summary />
        <SearchForm />
        <table className="w-4/5 m-auto">
          <tbody className="text-white">
            <tr className="bg-gray-700 flex flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-28 xl:gap-56 p-3 my-3 rounded-md">
              <td className="w-full md:w-2/4 lg:w-2/4 mb-2 lg:mb-0">
                Desenvolvimento de site
              </td>
              <td className="flex-shrink-0">R$12.000,00</td>
              <td className="flex-shrink-0">Venda</td>
              <td className="flex-shrink-0">13/04/2022</td>
            </tr>
            <tr className="bg-gray-700 flex flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-28 xl:gap-56 p-3 my-3 rounded-md">
              <td className="w-full md:w-2/4 lg:w-2/4 mb-2 lg:mb-0">
                Desenvolvimento de site
              </td>
              <td className="flex-shrink-0">- R$12.000,00</td>
              <td className="flex-shrink-0">Venda</td>
              <td className="flex-shrink-0">13/04/2022</td>
            </tr>
            <tr className="bg-gray-700 flex flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-28 xl:gap-56 p-3 my-3 rounded-md">
              <td className="w-full md:w-2/4 lg:w-2/4 mb-2 lg:mb-0">
                Desenvolvimento de site
              </td>
              <td className="flex-shrink-0">R$12.000,00</td>
              <td className="flex-shrink-0">Venda</td>
              <td className="flex-shrink-0">13/04/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
