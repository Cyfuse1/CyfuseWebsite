import React, { Component } from 'react'
import './ListItems.css'

export class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    // this.setState({ isHovered: true });
    setTimeout(() => {
      this.setState({ isHovered: true });
    }, 500);
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  render() {
    let {image,title,description,date}=this.props;
    const { isHovered } = this.state;

    return (
      <div>
        <div className="card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={image} alt="img" />
            <div className="card-sub">
              <h4>{title}</h4>
              {isHovered && (<div className="eventdesc">
                  <p>{date}</p>
                  <p>{description}</p>
              </div>)}
            </div>
            
        </div>
      </div>
    )
  }
}
export default ListItems

