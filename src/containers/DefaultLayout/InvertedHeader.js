import React,{Component} from 'react'
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
class InvertedHeader extends React.Component {
    state = { activeItem: 'users' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const menuitem = styled.menuitem`
            `;
        const Button = menuitem.extend`
            background-color: white;
            color: blue;
            border: 2px solid blue;
            `;
      return (
        <div>
          <Menu fixed='top' inverted pointing>
            <Container>
                <Menu.Item header>
                    <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                    Project Name
                </Menu.Item>
                <NavLink to='/users' >
                <Menu.Item link={true} as='div' className='fit-NavLink' name='users' active={activeItem === 'users'} onClick={this.handleItemClick} >
                </Menu.Item>
                </NavLink>
                <NavLink to='/timing' >
                    <Menu.Item link={true} as='div' className='fit-NavLink' name='timing'
                        active={activeItem === 'timing'}
                        onClick={this.handleItemClick} >
                    </Menu.Item>
                </NavLink>
                <NavLink to='/setting' >
                    <Menu.Item link={true} as='div' className='fit-NavLink' name='setting'
                        active={activeItem === 'setting'}
                        onClick={this.handleItemClick} >
                    </Menu.Item>
                </NavLink>
                <Menu.Menu position='right'>

                <Dropdown item simple text='Dropdown' >
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

        </div>
      )
    }
}

export default InvertedHeader
