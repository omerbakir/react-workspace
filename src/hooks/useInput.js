import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useInput = (key, INITIAL_STATE) => {
    const [storage, setStorage] = useLocalStorage(key, INITIAL_STATE);
    const [inputs, setInputs] = useState(storage);

    useEffect(() => {
        setStorage(inputs);
    }, [inputs]);
    const handleChange = (fieldName, event) => {
        setInputs({ ...inputs, [fieldName]: fieldName === "age" ? event : event.target.value })
    }
    return [inputs, handleChange];
}