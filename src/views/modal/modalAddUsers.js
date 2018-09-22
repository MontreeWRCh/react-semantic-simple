import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class ModalAddUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal trigger={this.props.button}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

ModalAddUser.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    button: PropTypes.render
  };

export default ModalAddUser