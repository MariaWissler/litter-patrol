import React, {Component} from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor (props) {
  super(props);
  }

  // propTypes = {
  //   height: PropTypes.number.isRequired,
  //   layer: PropTypes.number.isRequired,
  //   type: PropTypes.string.isRequired
  // }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
    
    //W 1
    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    


    return (
    
      <div onClick={this.props.onClick} className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>

    );
  }
}

export default GameItem;
