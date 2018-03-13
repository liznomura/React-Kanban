import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleErrorPopup, toggleInitialPopup } from '../../actions'
import Nav from '../../components/nav.js'
import NewCardForm from '../NewCardForm'
import KanbanBoard from '../KanbanBoard'
import Popup from '../../components/popup'
import InitialPopup from '../../components/initial-popup'

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
          <InitialPopup
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