import './InputGroup.css'
import Input from "../Input/Input"
import { useState, useEffect } from 'react'

function InputGroup({ setResultslData }) {

    const [data, setData] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    useEffect(() => {
        setResultslData(data)
    }, [data])

    function handleResultsData(prop, event) {
        setData(prevUserInput => {
            return {
                ...prevUserInput,
                [prop]: +event.target.value
            }
        });
    }

    return (
        <section id="user-input">

            <div className='input-group'>
                <Input
                    labelName="Initial Investment"
                    value={data.initialInvestment}
                    id="initialInvestment"
                    onChange={handleResultsData}
                />

                <Input
                    labelName="Annual Investment"
                    value={data.annualInvestment}
                    id="annualInvestment"
                    onChange={handleResultsData}
                />
            </div>

            <div className='input-group'>
                <Input
                    labelName="Expect Return"
                    value={data.expectedReturn}
                    id="expectedReturn"
                    onChange={handleResultsData}
                />

                <Input
                    labelName="Duration"
                    value={data.duration}
                    id="duration"
                    onChange={handleResultsData}
                />
            </div>

        </section>
    )
}

export default InputGroup