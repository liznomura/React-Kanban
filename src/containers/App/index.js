import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleErrorPopup, toggleInitialPopup } from '../../actions'
import Nav from '../../components/nav.js'
import NewCardForm from '../NewCardForm'
import KanbanBoard from '../KanbanBoard'
import Popup from '../../components/popup'

class App extends PureComponent {

  visibilityToggle() {
    let form = document.getElementById('add-form');
    form.classList.toggle('add-form--display');
  }

  toggleErrorPopup() {
    this.props.toggleErrorPopup()
  }

  toggleInitialPopup() {
    this.props.toggleInitialPopup()
  }

  render() {
    return (
      <div className="app">
        <Nav visibilityToggle={this.visibilityToggle.bind(this)}/>
        <NewCardForm visibilityToggle={this.visibilityToggle.bind(this)}/>
        <KanbanBoard />
        {
          this.props.showInitialPopup ?
          <Popup
          text="Hi there! Welcome to my project, React Kanban! It's a simple kanban board made with React.js, Redux to handle state, and Sass for styling. Please visit my github to see the code!"
          popupType="onload"
          popupHeader="Welcome!"
          btnText="Got it!"
          togglePopup={this.toggleInitialPopup.bind(this)}/>
            :
          ''
        }
        {
          this.props.showErrorPopup ?
          <Popup
          text="Please move or delete all tasks before deleting their column."
          popupType="error"
          popupHeader="Oops!"
          btnText="ok"
          togglePopup={this.toggleErrorPopup.bind(this)}/> :
          ''
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showInitialPopup: state.showInitialPopup,
    showErrorPopup: state.showErrorPopup
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    toggleErrorPopup: () => {
      dispatch(toggleErrorPopup())
    },
    toggleInitialPopup: () => {
      dispatch(toggleInitialPopup())
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App)