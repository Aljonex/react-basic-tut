import "./Accordion.css";

export function Accordion({ children, labelText, open, id, onClick }) { // This is destructuring of props, if passed (props) then would grab each with props.Name
    //const [open, setOpen] = useState(false); //closed by default

    // function handleClick() {
    //     // setOpen(!open); stateUpdates are Asynchronous so not ideal
    //     setOpen((prevValue) => {
    //         return !prevValue;
    //     }); //by doing this React stops stale states
    // }

    const handleClick = () => {
        onClick(id);
    }

    return (
        <div className="accordion" >
            <div className="label-text" onClick={handleClick}>{labelText} </div>
            {!!open &&
            <div>{children} </div> }
        </div>
    )//always return markup from react component
}

// If `export default function Accordion' then can name it
// if not then must import {functionName}