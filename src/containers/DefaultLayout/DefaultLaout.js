import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader';
import TableUsersInfo from '../../views/tables/table';

export default class DefaultLaout extends Component {
  render() {
    return (
      <div>
        <DefaultHeader />
          <div align="center">
              <TableUsersInfo />
          </div>
      </div>
    )
  }
}
