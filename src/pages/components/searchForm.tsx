import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"
import { memo } from "react"

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    }
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })
  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSearchTransactions)}
        className="flex w-4/5 m-auto mt-3 items-center gap-2"
      >
        <input
          type="text"
          placeholder="Busque um transação"
          {...register("query")}
          className="w-full p-1 pl-3 bg-gray-800 border border-gray-800 focus:border-green-600 outline-none text-white rounded-md"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="border-2 border-green-600 p-1 px-2 text-green-600 flex items-center rounded-md hover:text-green-700 hover:border-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MagnifyingGlassIcon className="w-5 h-5" /> Buscar
        </button>
      </form>
    </>
  )
}

export const SearchForm = memo(SearchFormComponent)
