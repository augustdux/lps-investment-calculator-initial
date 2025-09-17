import { COLUMN_NAME } from "../../../data/data";

function Thead() {
    return (
        <thead>
            <tr>
                {COLUMN_NAME.map((name) => (
                    <th scope="col" key={name.ColumnName}>{name.ColumnName}</th>
                ))}
            </tr>
        </thead>
    );
}

export default Thead;