import { Component } from "react";

const style = {
    title: {
        marginBottom: '50px'
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={style.title}>Lista de Productos</h1>
        )
    }
}

export default Title;