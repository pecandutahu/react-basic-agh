import React from "react";

class Home extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            message: "state pesan disini"
        };
    }
    changeState(){
        this.setState(state=>({
            message: 'Ini Pesan Baru'
        }));
    }

    render () {
        return (
            <div>
                <p> Home </p> | 
                <button onClick={() => this.changeState()}> Ubah Pesan </button><br></br>
                <p> State pesan adalah: <b> {this.state.message}</b></p>
            </div>
        )
    }
}

export default Home