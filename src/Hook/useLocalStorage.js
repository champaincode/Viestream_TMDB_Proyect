import { useState } from "react";

export function  useLocalStorage(key,initialValue) {
    const [storedValue, setStoredvalue] = useState(()=> {
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch(error){
            return initialValue
        }
    })

    const setValue = (value) => {
    try{
        setStoredvalue(value)
        window.localStorage.setItem(key,JSON.stringify(value))

    }catch(error) {
        console.error(error)
    }

    }
    return [storedValue, setValue]
}