import React from "react";

class About extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            message: "Halaman About"
        };
    }
    changeState(){
        this.setState(state=>({
            message: 'Ini Pesan Baru About'
        }));
    }

    render () {
        return (
            <div>
                <p> About </p> | 
                <button onClick={() => this.changeState()}> Ubah Pesan </button><br></br>
                <p> State pesan adalah: <b> {this.state.message}</b></p>
            </div>
        )
    }
}

export default About