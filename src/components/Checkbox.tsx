/**
 * checked
 * onChange
 * size
 * label:string
 */
import { FC } from "react"

interface ICheckboxProps {
    checked?: boolean
    size?: "sm" | "md" | "lg"
    label?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const sizeTypes: Record<string, string> = {
    sm: "tw-w-4 tw-h-4",
    md: "tw-w-6 tw-h-6",
    lg: "tw-w-8 tw-h-8",
}

export const Checkbox: FC<ICheckboxProps> = ({ checked, size = "sm", label, onChange }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input
                id={"checkbox"}
                type="checkbox"
                checked={checked}
                className={`${sizeTypes[size]}`}
                onChange={onChange}
            />
            <label htmlFor={"checkbox"}>{label}</label>
        </div>
    )
}