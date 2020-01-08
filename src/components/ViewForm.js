import React from "react"
import './EditForms.css'

class ViewForm extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpen: false,
            isSaved: false
        }

        this.closeForm = this.closeForm.bind(this)
        this.openForm = this.openForm.bind(this)
    }

    componentWillMount() {
        const { editKey, title, description } = this.props
        this.setState({
            editKey: editKey,
            title: title,
            description: description
        })
    }

    closeForm() {
        this.setState({ isOpen: false, isSaved: true })
    }

    openForm() {
        this.setState({ isOpen: true })
    }

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
                    <div>
                        <div className="view-container">
                            <textarea
                                maxLength="50"
                                className="input-title-style"
                                type="text" name="Title"
                                placeholder="Title"
                                value={title}
                                readOnly></textarea>
                            <textarea
                                maxLength="220"
                                className="input-description-style"
                                type="text" name="Description"
                                placeholder="Description"
                                value={description}
                                readOnly></textarea>
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default ViewForm