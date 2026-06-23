import { useState } from "react";
import styled from "styled-components";

type CheckboxProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
};

export default function Checkbox({
                                     checked,
                                     defaultChecked,
                                     disabled,
                                     onChange,
                                 }: CheckboxProps) {
    const [internal, setInternal] = useState(defaultChecked ?? false);
    const isChecked = checked !== undefined ? checked : internal;

    const handleChange = () => {
        if (disabled) return;
        const newValue = !isChecked;
        setInternal(newValue);
        onChange?.(newValue);
    };

    return (
        <Label disabled={disabled} onClick={handleChange}>
            <Box data-checked={isChecked} disabled={disabled}>
                <svg
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: "12px",
                        height: "10px",
                        opacity: isChecked ? 1 : 0,
                        transform: isChecked ? "scale(1)" : "scale(0.5)",
                        transition: "opacity 0.15s, transform 0.15s",
                    }}
                >
                    <path
                        d="M1 5L4.5 8.5L11 1"
                        stroke="#2E4260"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Box>
        </Label>
    );
}

const Label = styled.label<{ disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Box = styled.span<{ disabled?: boolean }>`
    width: 22px;
    height: 22px;
    border: 2.5px solid #2E4260;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.18s, border-color 0.18s, box-shadow 0.18s;
    background: white;

    &[data-checked="true"] {
        background: #FDFC32;
        border-color: #2E4260;
        box-shadow: 0 2px 8px rgba(46, 66, 96, 0.18);
    }

    ${({ disabled }) =>
            disabled &&
            `
        opacity: 0.4;
        cursor: not-allowed;
    `}
`;