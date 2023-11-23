import { XMarkIcon } from "@heroicons/react/20/solid"
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { api } from "../lib/axios"

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function Modal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, price, category, type } = data

    await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })
    reset()
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 p-8 rounded-sm shadow-md w-auto sm:w-1/2 md:w-2/5 lg:w-2/5 border-2 border-green-600">
          <Dialog.Title className="text-white text-lg font-bold mb-4">
            Nova transação
          </Dialog.Title>
          <Dialog.Close className="absolute top-2 right-2 text-white cursor-pointer">
            <XMarkIcon className="w-6 h-6" />
          </Dialog.Close>

          <form
            onSubmit={handleSubmit(handleCreateNewTransaction)}
            className="flex flex-col"
          >
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
              className="w-full p-2 pl-3 bg-gray-800 border border-gray-800 focus:border-green-600 outline-none my-1 text-white"
            />
            <input
              type="number"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
              className="w-full p-2 pl-3 bg-gray-800 border border-gray-800 focus:border-green-600 outline-none my-1 text-white"
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register("category")}
              className="w-full p-2 pl-3 bg-gray-800 border border-gray-800 focus:border-green-600 outline-none my-1 text-white"
            />

            {/*radio group*/}
            <div className="flex my-2">
              <Controller
                control={control}
                name="type"
                render={({ field }) => {
                  return (
                    <RadioGroup.Root
                      className="flex m-auto gap-10"
                      aria-label="View density"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <div className="flex items-center">
                        <RadioGroup.Item
                          className="bg-white w-[20px] h-[20px] rounded-full outline-none cursor-default"
                          value="income"
                          id="r1"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-black" />
                        </RadioGroup.Item>
                        <label
                          className="text-white text-[15px] leading-none pl-[5px]"
                          htmlFor="r1"
                        >
                          <div className="flex items-center gap-1">
                            Entrada
                            <ArrowUpCircleIcon className="w-6 h-6 text-green-600" />
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroup.Item
                          className="bg-white w-[20px] h-[20px] rounded-full outline-none cursor-default"
                          value="outcome"
                          id="r2"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-black" />
                        </RadioGroup.Item>
                        <label
                          className="text-white text-[15px] leading-none pl-[5px]"
                          htmlFor="r2"
                        >
                          <div className="flex items-center gap-1">
                            Saída
                            <ArrowDownCircleIcon className="w-6 h-6 text-red-600" />
                          </div>
                        </label>
                      </div>
                    </RadioGroup.Root>
                  )
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white p-3 mt-3 rounded-md hover:bg-green-700 hover:border-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

{
  /*
    <button className="bg-gray-600 p-3 w-1/2 text-white flex items-center justify-center gap-2 hover:bg-gray-500">
                <ArrowUpCircleIcon className="w-6 h-6 text-green-600" /> Entrada
              </button>
              <button className="bg-gray-600 p-3 w-1/2 text-white flex items-center justify-center gap-2 hover:bg-gray-500">
                <ArrowDownCircleIcon className="w-6 h-6 text-red-600" />
                Saída
              </button>
*/
}
