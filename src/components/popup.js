import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Popup extends PureComponent {

  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__content--header">Oops!</div>
          <p>{this.props.text}</p>
          <button className="btn popup-close-btn" onClick={this.props.togglePopup}>OK</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup)