
function Heading(props) {

    return (
        <div className={props.hdName}>
            <span className="title-animation">{props.title}</span>
            <h2 className="title-animation">{props.heading}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Heading 