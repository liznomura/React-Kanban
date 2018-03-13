import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class InitialPopup extends PureComponent {

  render() {
    const style = {
      textAlign: 'left',
      margin: '.5rem'
    };

    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__content--header popup--onload">Welcome!</div>
          <div style={style}>
            <p>Hi there! Welcome to my project, React Kanban!</p>
            It's a simple Kanban board made with:
            <ul>
              <li><b>React</b> for the UI</li>
              <li><b>Redux</b> to handle state</li>
              <li><b>Express</b> as the server</li>
              <li><b>Sass</b> for styling.</li>
            </ul>
          </div>
          <p>Please visit my <a href="https://github.com/liznomura/React-Kanban" target="_blank" rel="noopener noreferrer">Github</a> to see the code! Thanks for visiting!</p>
          <button className="btn popup-close-btn--onload" onClick={this.props.togglePopup}>Cool!</button>
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