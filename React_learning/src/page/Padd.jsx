export default function Padd(props){
    console.log(props)
    return(
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
        ></button>
    )
}