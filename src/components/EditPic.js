import React from "react"
import './EditPic.css';
import EditForm from "./EditForm";

class EditPic extends React.Component {
    constructor() {
        super()

        this.state = {
            points: [] // {x:0, y:0}
        }

        this.addPoint = this.addPoint.bind(this)
        this.setWrapper = this.setWrapper.bind(this)
        this.onImgLoad = this.onImgLoad.bind(this)

    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickInsidePic);

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
            points.push({ x: e.nativeEvent.offsetX + 620 - dimensions.width / 2, y: e.nativeEvent.offsetY, id: points.length })
            this.setState({
                points: points
            })
        }
    }

    onImgLoad({ target: img }) {
        this.setState({
            dimensions: {
                height: img.offsetHeight,
                width: img.offsetWidth
            }
        });
    }

    render() {
        const { points } = this.state

        return (
            <div className="container" ref="picContainer">
                <button className="button-style" onClick={this.props.saveEdit}>Save</button>
                <div onClick={this.addPoint}>
                    <img
                        ref={this.setWrapper}
                        alt="Item to be edited"
                        onLoad={this.onImgLoad}
                        className="image-style"
                        draggable={false}
                        src="https://cnet3.cbsistatic.com/img/sMJz61a5p3QEOwkK6aIT3R2skgw=/2019/08/15/5dda0e7e-8042-4317-9ee8-8256b04b5dda/samsung-galaxy-note-10-plus-13.jpg"></img>
                    {points.map((point) => (
                        <div key={point.id} style={{ position: "fixed", top: point.y, left: point.x, backgroundColor: "#fff", height: "10px", width: "10px" }}>
                            <EditForm />
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default EditPic