import React from "react"
import './EditPic.css';

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
        if (this.wrapperRef && this.wrapperRef.contains(e.target)) {
            const { points } = this.state
            //right now it works in a fixed way, should be fixed
            points.push({ x: e.nativeEvent.offsetX + 620 - 508 / 2, y: e.nativeEvent.offsetY, id: points.length })
            this.setState({
                points: points
            })
            console.log(this.state.dimensions)
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
                        src="https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
                    {points.map((point) => (
                        <div key={point.id} style={{ position: "fixed", top: point.y, left: point.x, backgroundColor: "#fff" }}>+</div>
                    ))}
                </div>

            </div>
        )
    }
}

export default EditPic