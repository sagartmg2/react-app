import React from "react";
export default class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "red",
            title: "calss based",
            items: [],
        };

        this.changeColor = this.changeColor.bind(this)
    }
    changeColor() {
        console.log("inside");
        // setColor({})  // replace all
        this.setState({
            color: "white"
        })

    }

    componentDidMount() {
        console.log("mounted");
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json);

                this.setState({
                    items: json
                })
            })

        // make api call
        //populate the value  in  items 
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(" updated");
        console.log(prevProps);
        console.log({ prevState });
        console.log(this.state);
        document.title = this.state.color
    }

    componentWillUnmount() {
        // Clean up
    }

    render() {
        // console.log("render")
        return <>
            <h1>Car</h1>
            <h2>I am a {this.state.color} Car!</h2>
            <button onClick={this.changeColor}>change color</button>
            {
                this.state.items.map(el => {
                    return <p>{el.title}</p>
                })
            }
        </>
    }
}