

export default function Button(props) {

    // console.log(props)

    function calculate(event) {
        // alert("clicked")
        console.log(event);
        console.log(event.target.type);
    }

    return (
        <>
            {/* {props.children} */}
            {/* <button type="button" onclick = "calculate()"> */}

            <button type="button" onClick={calculate}>
                {props.title}
            </button>

        </>


    )
}

// ES module export
// export default Button;