import './Table.css'
import Thead from './Thead/Thead'
import Tbody from './Tbody/Tbody'

function Table({ investmentResults }) {
    return (
        <table id="result">
            <Thead />
            <Tbody Results={investmentResults} />
        </table>
    )
}

export default Table