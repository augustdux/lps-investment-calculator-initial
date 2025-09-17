
import { formatter } from "../../../util/investment"

function Tbody({ Results }) {
    const results = [...Results]

    const initialInvestment = !results ?
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment : 0;

    return (
        <tbody>
            {results.map(items => {
                const totalInterest =
                    items.valueEndOfYear -
                    items.annualInvestment *
                    items.year -
                    initialInvestment;
                const totalAmountInvested = items.valueEndOfYear - totalInterest;
                return (
                    <tr key={items.year}>
                        <th scope="row">{items.year}</th>
                        <td>{formatter.format(items.valueEndOfYear)}</td>
                        <td>{formatter.format(items.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
        </tbody>
    );
}

export default Tbody;