import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
    label: string
}


const DateInput = ({label, ...props}: InputProps) => {
    return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input id={label} name={label} type="date" {...props}/>
    </div>
    )
}

export default DateInput