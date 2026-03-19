import { useSelector } from "react-redux"

export default function Barinda(){
    const userBarinda = useSelector((state) => state.user.value)
    return(
        <>
        <h1>the page of barinda</h1>
        <div>
         the name:{userBarinda.name}
        </div>
        </>
    )
}