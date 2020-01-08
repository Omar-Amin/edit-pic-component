import React from "react"
import './EditForms.css'

const editformElement = (
    <div>
        <div className="edit-container">
            <textarea maxLength="50" className="input-title-style" type="text" name="Title" placeholder="Title"></textarea>
            <textarea maxLength="220" className="input-description-style" type="text" name="Description" placeholder="Description"></textarea>
        </div>
    </div>
);

class EditForm extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpen: true
        }

        this.closeForm = this.closeForm.bind(this)
        this.openForm = this.openForm.bind(this)
    }

    componentWillMount() {
        const { editKey } = this.props
        this.setState({
            editKey: editKey
        })
    }

    closeForm() {
        this.setState({ isOpen: false })
    }

    openForm() {
        this.setState({ isOpen: true })
    }

    // TODO: Add functionality to "save" and "delete"
    // when pressing "close" it should autosave what's inside the component
    render() {
        const { isOpen } = this.state
        return (
            <div className="editform-container" style={{ height: 0, width: 0 }}>
                {isOpen ? <div className="circleout" onClick={this.closeForm}>
                    <div className="circlein">
                    </div>
                </div> : <div className="circleoutc" onClick={this.openForm}>
                        <div className="circleinc">
                        </div>
                    </div>}
                {isOpen ? <div className="check-item">
                    <span className="check-span">&#10003;</span>
                </div> : null}
                {isOpen ? <div className="close-item">
                    <span className="close-span">&#10005;</span>
                </div> : null}
                {isOpen ? (editformElement) : null}
            </div>
        )
    }
}

export default EditForm