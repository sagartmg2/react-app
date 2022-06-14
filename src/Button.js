

export default function Button(props) {

    console.log(props)

    function calculate(event) {
        // alert("clicked")
        console.log(event);
        console.log(event.target.type);
    }

    let style_obj = {
        color: "violet"
    }

    console.log("button render");


    return (
        <>
            {props.children}
            {/* <button type="button" onclick = "calculate()"> */}
            <button
                className="button"
                type="button"
                onClick={calculate}
                style={{
                    color: "violet",
                    backgroundColor: "orange",
                    margin: "20px",
                }}
            >
                {props.title}
            </button>

        </>


    )
}

// ES module export
// export default Button;