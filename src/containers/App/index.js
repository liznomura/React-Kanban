import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { togglePopup } from '../../actions'
import Nav from '../../components/nav.js'
import NewCardForm from '../NewCardForm'
import KanbanBoard from '../KanbanBoard'
import Popup from '../../components/popup'

class App extends PureComponent {

  visibilityToggle() {
    let form = document.getElementById('add-form');
    form.classList.toggle('add-form--display');
  }

  togglePopup() {
    this.props.togglePopup()
  }

  render() {
    return (
      <div className="app">
        <Nav visibilityToggle={this.visibilityToggle.bind(this)}/>
        <NewCardForm visibilityToggle={this.visibilityToggle.bind(this)}/>
        <KanbanBoard />
        {this.props.showPopup ? <Popup text="Please move or delete all tasks before deleting their column." togglePopup={this.togglePopup.bind(this)}/> : ''}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showPopup: state.showPopup
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    togglePopup: () => {
      dispatch(togglePopup())
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App)