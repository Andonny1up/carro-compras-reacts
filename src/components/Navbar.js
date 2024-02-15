import { Component } from "react";
import Logo from './Logo';

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        height: '100px',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px #ccc'

    }
}

class Navbar extends Component{
    render(){
        return(
            <nav style={styles.navbar}>
                <Logo/>
            </nav>
        )
    }
}

export default Navbar;