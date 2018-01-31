import React from 'react';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt'
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }

    render(){
        return (
            <div>
                <div id="divHeader">

                    <img src="Drop_logo.png" alt="logo" id="logoImg"></img>
                </div>


                <div id="barBottom">

                </div>


                <div id="DropDiv">

                </div>

                <div id="CentreDiv">

                    <form id="addButton" action="upload.php" method="post" enctype="multipart/form-data">
                        <input type="file" name="fileToUpload" id="fileToUpload"></input>

                    </form>
                    <input id="text" type="text" value="123456" style="width:80%" />
                    <br />
                    <div id="QRCode"></div>
                </div>
            </div>

        )
    }
}

export default App;