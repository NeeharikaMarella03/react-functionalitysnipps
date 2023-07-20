
export default function Input({ type,
    label,
    placeholder,
    onChange,
    value,
    dropdownOptions,
    heading,
    selectionOptions,
    error
}) {
    switch (type) {
        case 'text':
        case 'email':
            return <div className="form-field">
                <label>{label}</label>
                <input
                    className={error ? 'error' : ''}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                {error && <div className="error">{error}</div>}
            </div>
    }

}