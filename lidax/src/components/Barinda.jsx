import { useSelector } from "react-redux"

export default function Barinda(){
    const userBarinda = useSelector((state) => state.user.value)
    const changecolor = useSelector((state) => state.theme.value)
    return(
        <>
        <h1>the page of barinda</h1>
        <div style={{background:changecolor}}>
         the name:{userBarinda.name}
         <br />
         <strong>email:{userBarinda.email}</strong>
         
        </div>
        </>
    )
}