import React from "react"
import './IndexPage.css';
import EditPic from "../components/EditPic";
import ViewPic from "../components/ViewPic";

class PicturePoint extends React.Component {
    constructor() {
        super()

        this.state = {
            isEditing: false,
            data: [],
            picture: ""
        }

        this.switchToEditing = this.switchToEditing.bind(this)
        this.saveEdit = this.saveEdit.bind(this)
    }

    componentWillMount() {
        const { src_image } = this.props
        this.setState({ picture: src_image })
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
        const { data, picture } = this.state

        return (
            <div>
                {this.state.isEditing ?
                    <EditPic data={data} picture={picture} saveEdit={this.saveEdit} /> :
                    <ViewPic data={data} picture={picture} switchToEditing={this.switchToEditing} />}
            </div>
        )
    }
}

export default PicturePoint