/* 
* Create a PureComponent card that reads the height of a single image
* and adjusts the grid-end-rows to fit the height
    * Let the ImageCard render itself and its image
    * Reach into the DOM and figure out the height of the image
    * Set the image heigh on state to get the component to rerender
    * When rerendering, assign a 'grid-row-end: span N' in the div
    * to make sure the image takes up the appropriate space
*/

import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { span: 0};
        // create ref for DOM info
        // console.log in componentDidMount to see output
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
         const height = this.imageRef.current.clientHeight;
         const spans = Math.ceil(height / 10);

         this.setState({ span       : spans})
    }
    render() {
        // destructure this.props.image
        const { description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    } 
}

export default ImageCard;