import React from "react"
import ViewForm from "./ViewForm";
import './EditPic.css';

class ViewPic extends React.Component {
    constructor() {
        super()

        this.state = {
            points: [],
            picture: ""
        }
    }

    componentWillMount() {
        const { data, picture } = this.props

        this.setState({ points: data, picture: picture })
    }

    render() {
        const { points, picture } = this.state

        return (
            <div className="container">
                <button className="button-style" onClick={this.props.switchToEditing}>Edit</button>
                <img
                    alt="Item to be viewed"
                    className="image-style"
                    draggable={false}
                    src={picture}></img>

                {points.map((point) => {
                    if (point) {
                        return (
                            <div key={point.id} style={{ position: "fixed", top: point.y, left: point.x }}>
                                <ViewForm
                                    title={point.title}
                                    description={point.description}
                                    editKey={point.id} />
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        )
    }
}

export default ViewPic