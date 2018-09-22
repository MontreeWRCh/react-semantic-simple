import React from 'react'
import _ from 'lodash'
import { Container, Divider, Header, Image, Table, Button, Icon, Visibility } from 'semantic-ui-react'

import users from '../../users';
import ModalAddUsers from '../modal/modalAddUsers';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
 // marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  // backgroundColor: '#fff',
  // border: '1px solid #ddd',
  marginTop: '67px',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class TableUsersInfo extends React.Component {

  state = {
    menuFixed: false,
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    let tableBody = []
    _.times(6, I=> users.forEach(user => {
        tableBody.push(
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={user.avatar} rounded size='mini' />
                <Header.Content>
                  {user.nickName}
                  <Header.Subheader>{user.status}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{user.studentID}</Table.Cell>
            <Table.Cell>{user.age}</Table.Cell>
            <Table.Cell>{user.faculty}</Table.Cell>
            <Table.Cell>{user.bloodGroup}</Table.Cell>
            <Table.Cell>{user.cardNumber}</Table.Cell>
            <Table.Cell>{user.issued}</Table.Cell>
            <Table.Cell>{user.expired}</Table.Cell>
          </Table.Row>
          
        )
      })
    )
    const { menuFixed } = this.state  
    return (
      <div>
        <Header as='h2'>Header Groups</Header>
        <Divider section />
        {/* <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
            >
          <Menu 
              // attached='top' 
              borderless
              compact 
              inverted 
              widths={2}
              fixed={menuFixed && 'top'}
              style={menuFixed ? fixedMenuStyle : menuStyle}
              >
            <Container text>
              <Menu.Item as='a'>Item</Menu.Item>
              <Menu.Item as='a'>Item</Menu.Item>
            </Container>
          </Menu>
        </Visibility> */}
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Student ID</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
              <Table.HeaderCell>Faculty</Table.HeaderCell>
              <Table.HeaderCell>Blood Group</Table.HeaderCell>
              <Table.HeaderCell>Card Number</Table.HeaderCell>
              <Table.HeaderCell>Issued</Table.HeaderCell>
              <Table.HeaderCell>Expired</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            {tableBody}
          </Table.Body>
        </Table>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <ModalAddUsers button={
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='user' /> Add User
                </Button>
              }/>
              <Button size='small'>Approve</Button>
              <Button disabled size='small'>
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </div>
    );
  }
}

export default TableUsersInfo