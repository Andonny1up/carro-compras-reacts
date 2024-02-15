import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif'
    },
    container: {
        width: '1200px'
    }
}

class Layout extends Component{
    render(){
        const {children} = this.props;
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Layout;