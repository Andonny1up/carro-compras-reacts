import { Component } from "react";

const styles ={
    button:{
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px 0'
    }

}
class Button extends Component{
    render(){
        const {children, onClick} = this.props;
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}
export default Button;