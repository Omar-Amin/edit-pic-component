import React from "react"
import './IndexPage.css';
import EditPic from "../components/EditPic";
import ViewPic from "../components/ViewPic";

class IndexPage extends React.Component {
    constructor() {
        super()

        this.state = {
            isEditing: false,
            data: []
        }

        this.switchToEditing = this.switchToEditing.bind(this)
        this.saveEdit = this.saveEdit.bind(this)
    }

    switchToEditing() {
        this.setState({ isEditing: true })
    }

    saveEdit(points) {
        this.setState({ data: points })
        console.log(points)
        this.setState({ isEditing: false })
    }

    render() {
        const { data } = this.state
        return (
            <div>
                {this.state.isEditing ? <EditPic data={data} saveEdit={this.saveEdit} /> : <ViewPic data={data} switchToEditing={this.switchToEditing} />}
            </div>
        )
    }
}

export default IndexPage