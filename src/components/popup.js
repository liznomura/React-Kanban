import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Popup extends PureComponent {

  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          <h2>Oops!</h2>
          <p>{this.props.text}</p>
          <button onClick={this.props.togglePopup}>Got it!</button>
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