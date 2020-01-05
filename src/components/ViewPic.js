import React from "react"
import './EditPic.css';

class ViewPic extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {

        return (
            <div className="container">
                <button className="button-style" onClick={this.props.switchToEditing}>Edit</button>
                <img alt="Item to be viewed" className="image-style" src="https://cnet3.cbsistatic.com/img/sMJz61a5p3QEOwkK6aIT3R2skgw=/2019/08/15/5dda0e7e-8042-4317-9ee8-8256b04b5dda/samsung-galaxy-note-10-plus-13.jpg"></img>
            </div>
        )
    }
}

export default ViewPic