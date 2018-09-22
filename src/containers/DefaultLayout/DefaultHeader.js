import React, { Component } from 'react'
import { Menu, Visibility, Container, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
 // marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class DefaultHeader extends Component {
    
  state = {
    menuFixed: false,
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  
    render() {

      const { menuFixed } = this.state  

      return (
        <div>
          {/* <Container text style={{ marginTop: '2em' }}>
            <Header as='h1'>Sticky Example</Header>
            <p>
            This example shows how to use lazy loaded images, a sticky menu, and a simple text
            container
            </p>
          </Container> */}

          {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
              gone beyond the scope of visibility
            */}
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
            >
            <Menu
              borderless
              fixed={menuFixed && 'top'}
              style={menuFixed ? fixedMenuStyle : menuStyle}
              >
              <Container text>
                <Menu.Item>
                  <Image size='mini' src='/logo.png' />
                </Menu.Item>
                <Menu.Item header><Link to="/users">Users</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/timing">Timing</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/seting">Seting</Link></Menu.Item>

                <Menu.Menu position='right'>
                  <Dropdown text='Dropdown' pointing className='link item'>
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Header Item</Dropdown.Header>
                      <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Submenu</span>
                        <Dropdown.Menu>
                          <Dropdown.Item>List Item</Dropdown.Item>
                          <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Container>
            </Menu>
          </Visibility>
        </div>

      )
    }
}
