import React from "react"
import './EditPic.css';
import EditForm from "./EditForm";

class EditPic extends React.Component {
    constructor() {
        super()

        this.state = {
            points: [], // {x:0, y:0}
            picture: ""
        }

        this.addPoint = this.addPoint.bind(this)
        this.setWrapper = this.setWrapper.bind(this)
        this.onImgLoad = this.onImgLoad.bind(this)
        this.deleteFromList = this.deleteFromList.bind(this)
        this.updatePointDescription = this.updatePointDescription.bind(this)
        this.updatePointTitle = this.updatePointTitle.bind(this)
        this.saveEditForms = this.saveEditForms.bind(this)
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickInsidePic);
        const { data, picture } = this.props
        this.setState({ points: data, picture: picture })

    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickInsidePic);
    }

    setWrapper(node) {
        this.wrapperRef = node
    }

    addPoint(e) {
        //just to make sure that it is most definitely hitting the target (image)
        if (this.wrapperRef && this.wrapperRef.contains(e.target)) {
            const { points, dimensions } = this.state
            //right now it works in a fixed way, should be fixed
            points.push({ x: e.nativeEvent.offsetX + 620 - dimensions.width / 2, y: e.nativeEvent.offsetY, id: points.length, title: "", description: "" })
            this.setState({
                points: points
            })
        }
    }

    deleteFromList(formID) {
        const { points } = this.state
        points[formID] = undefined
        this.setState({ points: points })
    }

    updatePointTitle(title, formID) {
        const { points } = this.state
        points[formID].title = title
        this.setState({ points: points })
    }

    updatePointDescription(description, formID) {
        const { points } = this.state
        points[formID].description = description
        this.setState({ points: points })
    }

    onImgLoad({ target: img }) {
        this.setState({
            dimensions: {
                height: img.offsetHeight,
                width: img.offsetWidth
            }
        });
    }

    saveEditForms() {
        this.props.saveEdit(this.state.points)
    }

    render() {
        const { points, picture } = this.state

        return (
            <div className="container" ref="picContainer">
                <button className="button-style" onClick={this.saveEditForms}>Save</button>
                <div onClick={this.addPoint}>
                    <img
                        ref={this.setWrapper}
                        alt="Item to be edited"
                        onLoad={this.onImgLoad}
                        className="image-style"
                        draggable={false}
                        src={picture}></img>
                    {points.map((point) => {
                        if (point) {
                            return (
                                <div key={point.id} style={{ position: "fixed", top: point.y, left: point.x }}>
                                    <EditForm
                                        deleteFromList={this.deleteFromList}
                                        updatePointDescription={this.updatePointDescription}
                                        updatePointTitle={this.updatePointTitle}
                                        title={point.title}
                                        description={point.description}
                                        editKey={point.id} />
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>

            </div>
        )
    }
}

export default EditPic