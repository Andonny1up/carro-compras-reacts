import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        margin: '20px'
    }
}

class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                shop
            </div>
        )
    }
}
export default Logo;