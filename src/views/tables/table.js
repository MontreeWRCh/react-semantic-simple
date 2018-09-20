import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

let users = [
  {
    avatar: '/images/avatar/small/lena.png',
    nickName: "Lena",
    status: "Human Resources",
    age: 22
  },
  {
    avatar: '/images/avatar/small/matthew.png',
    nickName: "Matthew",
    status: "Fabric Design",
    age: 15
  },
  {
    avatar: '/images/avatar/small/lindsay.png',
    nickName: "Lindsay",
    status: "Entertainment",
    age: 12
  },
  {
    avatar: '/images/avatar/small/mark.png',
    nickName: "Mark",
    status: "Executive",
    age: 11
  },
]

class TableUsersInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  tableBody(){

  }
  
  render() {
    let tableBody = []
    users.forEach(user => {
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
            <Table.Cell>{user.age}</Table.Cell>
          </Table.Row>
        )
      }
    );
    return (
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableBody}
        </Table.Body>
      </Table>
    );
  }
}

export default TableUsersInfo