import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader';
import DefaultSegment from './DefaultSegment';
import MenuOverlay from '../../views/addon/MenuOverlay';
import TableUsersInfo from '../../views/tables/tableUsers';
import { Container } from 'semantic-ui-react'
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import InvertedHeader from './InvertedHeader';

export default class DefaultLaout extends Component {

  render() {
    return (
      <div>
        {/* <DefaultHeader /> */}
        <InvertedHeader />
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>
        {/* <MenuOverlay /> */}
        <Container style={{ paddingBottom: '5em', paddingTop: '7em' }} >
          <Switch>
            {routes.map((route, idx) => {
                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                  : (null);
              },
            )}
            <Redirect from="/" to="/users" />
          </Switch>
        </Container>
        <DefaultSegment />
      </div>
    )
  }
}
