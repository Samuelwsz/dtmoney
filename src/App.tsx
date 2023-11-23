import TransactionsProvider from "./contexts/TransactionsContext"
import "./global.css"
import Transactions from "./pages/transactions"

function App() {
  return (
    <>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </>
  )
}

export default App
