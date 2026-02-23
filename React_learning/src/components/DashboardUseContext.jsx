import { useContext } from "react"
import usercontext from "./componetUserContext"
export default function DashBoardUseContext(){
    const user = useContext(usercontext)
    const menu = user.map((user) => {
        return(
            <header key={user} className="flex gap-1 bg-amber-400 text-white">
                <div className="m-5 border rounded ">{user}</div>
            </header>
        )
    })
    return(
        <>
          {menu}
        </>
    )
}