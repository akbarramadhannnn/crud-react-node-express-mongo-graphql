import { withRouter } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './header';

const Index = ({ children, location }) => {
  return (
    <Fragment>
      {location.pathname === '/signup' || location.pathname === '/signin' ? (
        <Fragment>{children}</Fragment>
      ) : (
        <Fragment>
          <Header />
          {children}
        </Fragment>
      )}
    </Fragment>
  );
};

export default withRouter(Index);
