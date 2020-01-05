import React from "react";

class Users extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            message: "Halaman Users"
        };
    }
    changeState(){
        this.setState(state=>({
            message: 'Ini Pesan Baru Users'
        }));
    }

    render () {
        return (
            <div>
                <p> Users </p> | 
                <button onClick={() => this.changeState()}> Ubah Pesan </button><br></br>
                <p> State pesan adalah: <b> {this.state.message}</b></p>
            </div>
        )
    }
}

export default Users