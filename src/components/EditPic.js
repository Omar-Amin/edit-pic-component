import React from "react"
import './EditPic.css';

class EditPic extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }


    render() {

        return (
            <div>
                <button onClick={this.props.saveEdit}>Save</button>
            </div>
        )
    }
}

export default EditPic