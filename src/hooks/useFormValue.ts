import React, { useState } from 'react'

export const useFormValue = (initialValue: string): [string, (value: string | React.ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState(initialValue ?? '');

    const updateValue = (input: string | React.ChangeEvent<HTMLInputElement>) => {
        if (typeof input === "string") {
            setValue(input);
        } else {
            setValue(input.target.value);
        }
    };
    return [value, updateValue];
};

