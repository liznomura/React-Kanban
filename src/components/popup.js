import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Popup extends PureComponent {

  render() {
    const popupClassList = `popup__content--header popup--${this.props.popupType}`;
    const btnClassList = `btn popup-close-btn--${this.props.popupType}`;

    return (
      <div className="popup">
        <div className="popup__content">
          <div className={popupClassList}>{this.props.popupHeader}</div>
          <p>{this.props.text}</p>
          <button className={btnClassList} onClick={this.props.togglePopup}>{this.props.btnText}</button>
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