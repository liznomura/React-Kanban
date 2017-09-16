import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class EditForm extends PureComponent {

  render() {
    return (
      <div className="edit-form">
      </div>
      )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);