import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class InitialPopup extends PureComponent {

  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__content--header popup--onload">Welcome!</div>
          <p>Hi there! Welcome to my project, React Kanban! It's a simple kanban board made with React.js, Redux to handle state, and Sass for styling. Please visit my <a href="https://github.com/liznomura/React-Kanban" target="_blank">Github</a> to see the code! Thanks for visiting!</p>
          <button className="btn popup-close-btn--onload" onClick={this.props.togglePopup}>Got it!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialPopup)