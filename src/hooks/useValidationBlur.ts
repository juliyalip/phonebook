import {useState} from 'react';

type ValidationFunction = (value: string)=> boolean;

export const useValidationBlur = (validate: ValidationFunction, initionErrorState = false) =>{
    const [error, setError] = useState(initionErrorState)

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const isValid = validate(e.target.value)
        setError(!isValid)
    }
    return [error, handleBlur] as const
}