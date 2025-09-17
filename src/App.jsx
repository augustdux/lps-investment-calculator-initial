import Header from "./component/Header/Header"
import InputGroup from "./component/InputGroup/InputGroup"
import Table from "./component/Table/Table"

import { calculateInvestmentResults } from "./util/investment"
import { useState } from "react"

function App() {
  const [resultsData, setResultslData] = useState({})
  const inputIsValid = resultsData.duration >= 1
  const investmentResults = calculateInvestmentResults(resultsData)

  return (
    <>
      <Header />
      <InputGroup setResultslData={setResultslData} />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <Table investmentResults={investmentResults} />}
    </>
  )
}

export default App
