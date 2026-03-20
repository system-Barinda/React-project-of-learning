import { useDispatch, useSelector } from "react-redux"

export default function UserPage(){
    const stateData = useSelector((state) => state.userbarinda.value);

    const dispatch = useDispatch();
    return(
        <div>
            <h1>the page of user data</h1> <br />
            <strong>the name:{stateData.name}</strong>
        </div>
    )
}