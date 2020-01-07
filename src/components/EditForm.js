import React from "react"
import './EditForms.css'

class EditForm extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    // TODO: Add a "delete" or "save" for each edit for
    // when saving, the form closes but can be opened again and changed/deleted
    render() {

        return (
            <div className="editform-container">
                <div className="check-item">
                    <span className="check-span">&#10003;</span>
                </div>
                <div className="close-item">
                    <span className="close-span">&#10005;</span>
                </div>
                <div className="edit-container">
                    <textarea maxLength="50" className="input-title-style" type="text" name="Title" placeholder="Title"></textarea>
                    <textarea maxLength="220" className="input-description-style" type="text" name="Description" placeholder="Description"></textarea>
                </div>
            </div>

        )
    }
}

export default EditForm