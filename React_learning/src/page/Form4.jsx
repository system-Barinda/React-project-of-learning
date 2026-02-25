import { useFormInput } from "./useFormInput"
export default function Form4(){
  const fnameP = useFormInput('barinda');
  const LnameP = useFormInput('system');
  return(
    <>
    
    <label htmlFor=""> first name</label><br />
    <input {...fnameP} />
    <label htmlFor=""> last name</label> <br />
    <input {...LnameP} />

    <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  )
}