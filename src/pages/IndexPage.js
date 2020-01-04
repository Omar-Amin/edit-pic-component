import React from "react"
import './IndexPage.css';
import EditPic from "../components/EditPic";
import ViewPic from "../components/ViewPic";

class IndexPage extends React.Component {
    constructor() {
        super()

        this.state = {
            isEditing: false
        }

        this.switchToEditing = this.switchToEditing.bind(this)
        this.saveEdit = this.saveEdit.bind(this)
    }

    switchToEditing() {
        this.setState({ isEditing: true })
    }

    saveEdit() {
        this.setState({ isEditing: false })
    }

    render() {

        return (
            <div>
                {this.state.isEditing ? <EditPic saveEdit={this.saveEdit} /> : <ViewPic switchToEditing={this.switchToEditing} />}
            </div>
        )
    }
}

export default IndexPage