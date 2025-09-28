function Presenting(props) {
    return (
        <div className="presenting">
            <div>
                <i className={props.icon}></i>
            </div>
            <div>
                <h3>{props.text}</h3>
                <p className={props.pgap}>{props.title}</p>
            </div>
        </div>
    )

}

export default Presenting 