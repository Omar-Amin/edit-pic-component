import React from "react"
import './EditForms.css'

class EditForm extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpen: true,
            isSaved: false
        }

        this.closeForm = this.closeForm.bind(this)
        this.openForm = this.openForm.bind(this)
        this.saveForm = this.saveForm.bind(this)
        this.deleteForm = this.deleteForm.bind(this)
        this.storeDescription = this.storeDescription.bind(this)
        this.storeTitle = this.storeTitle.bind(this)
    }

    componentWillMount() {
        const { editKey } = this.props
        this.setState({
            editKey: editKey,
            title: "",
            description: ""
        })
    }

    storeTitle(e) {
        this.setState({ title: e.target.value })
    }

    storeDescription(e) {
        this.setState({ description: e.target.value })
    }

    closeForm() {
        this.setState({ isOpen: false, isSaved: true })
    }

    openForm() {
        this.setState({ isOpen: true })
    }

    saveForm() {

    }

    deleteForm() {
        this.props.deleteFromList(this.state.editKey)
    }

    // TODO: Add functionality to "save" and "delete"
    // when pressing "close" it should autosave what's inside the component
    render() {
        const { isOpen, title, description } = this.state

        return (
            <div className="editform-container" style={{ height: 0, width: 0 }}>

                {isOpen ?
                    <div className="circleout" onClick={this.closeForm}>
                        <div className="circlein">
                        </div>
                    </div> : <div className="circleoutc" onClick={this.openForm}>
                        <div className="circleinc">
                        </div>
                    </div>}

                {isOpen ?
                    <div className="close-item" onClick={this.deleteForm}>
                        <span className="close-span">&#10005;</span>
                    </div> : null}

                {isOpen ?
                    <div>
                        <div className="edit-container">
                            <textarea
                                maxLength="50"
                                className="input-title-style"
                                type="text" name="Title"
                                placeholder="Title"
                                value={title}
                                onChange={this.storeTitle}></textarea>
                            <textarea
                                maxLength="220"
                                className="input-description-style"
                                type="text" name="Description"
                                placeholder="Description"
                                value={description}
                                onChange={this.storeDescription}></textarea>
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default EditForm