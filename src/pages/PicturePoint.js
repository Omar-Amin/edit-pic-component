import React from "react";
import "./IndexPage.css";
import EditPic from "../components/EditPic";
import ViewPic from "../components/ViewPic";

class PicturePoint extends React.Component {
    constructor() {
        super();

        this.state = {
            isEditing: false,
            data: [],
            picture: "",
            editable: false
        };

        this.switchToEditing = this.switchToEditing.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    componentWillMount() {
        const { src_image, editable } = this.props;

        this.setState({ picture: src_image, editable: editable });
    }

    switchToEditing() {
        this.setState({ isEditing: true });
    }

    saveEdit(points) {
        this.setState({ data: points });
        console.log(points);
        this.setState({ isEditing: false });
    }

    render() {
        const { data, picture, isEditing, editable } = this.state;

        return (
            <div>
                {isEditing && editable ? (
                    <EditPic
                        data={data}
                        picture={picture}
                        saveEdit={this.saveEdit}
                    />
                ) : (
                    <ViewPic
                        data={data}
                        editable={editable}
                        picture={picture}
                        switchToEditing={this.switchToEditing}
                    />
                )}
            </div>
        );
    }
}

export default PicturePoint;
