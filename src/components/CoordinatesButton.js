import React from 'react';

class CoordinatesButton extends React.Component {
    
    createArray = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    
    render () {
        return (
            <button onClick={this.createArray} >

            </button>
        )
    }
}

export default CoordinatesButton;