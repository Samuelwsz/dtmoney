import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function SearchForm() {
  return (
    <>
      <div className="flex w-4/5 m-auto mt-3 items-center gap-2">
        <input
          type="text"
          placeholder="Busque um transação"
          className="w-full p-1 pl-3 bg-gray-800 border border-gray-800 focus:border-green-600 outline-none text-white rounded-md"
        />

        <button className="border-2 border-green-600 p-1 px-2 text-green-600 flex items-center rounded-md">
          <MagnifyingGlassIcon className="w-5 h-5" /> Buscar
        </button>
      </div>
    </>
  )
}
