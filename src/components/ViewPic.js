import React from "react"
import './ViewPic.css';

class ViewPic extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {

        return (
            <div>
                <button onClick={this.props.switchToEditing}>Edit</button>
            </div>
        )
    }
}

export default ViewPic