function Input({ labelName, value, id, onChange }) {
    return (
        <p>
            <label htmlFor={id}>{labelName}</label>
            <input
                type="number"
                id={id}
                value={value}
                onChange={(event) => onChange(id, event)}
            />
        </p>

    )
}

export default Input