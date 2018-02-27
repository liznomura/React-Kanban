import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Popup extends PureComponent {

  render() {
    return (
      <div className="popup">
        <div className="popup__content">
        {this.props.text}
        <button onClick={this.props.togglePopup}>hi</button>
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