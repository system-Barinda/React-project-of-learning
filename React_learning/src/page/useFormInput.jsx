import { useState } from "react";

export default function useFormInput(initialValue){
  const[value,setValue]= useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const inputProps = {
    value:value,
    onchange:handleChange,
  }
  return inputProps
}