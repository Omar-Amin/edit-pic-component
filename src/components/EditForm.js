import React from "react"
import './EditForms.css'

class EditForm extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {

        return (
            <div className="edit-container">
                <textarea maxLength="50" className="input-title-style" type="text" name="Title" placeholder="Title"></textarea>
                <textarea maxLength="220" className="input-description-style" type="text" name="Description" placeholder="Description"></textarea>
            </div>
        )
    }
}

export default EditForm