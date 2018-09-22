import React, { Component } from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment
  } from 'semantic-ui-react'

export default class DefaultSegment extends Component {
  render() {
    return (
      <div>
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
            <Container textAlign='center'>
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided link>
                <List.Item as='a' href='#'>
                Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                Privacy Policy
                </List.Item>
            </List>
            </Container>
        </Segment>
      </div>
    )
  }
}
