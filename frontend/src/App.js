import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './layout';
import routes from './routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Suspense fallback={<h2>Loading...</h2>}>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </Suspense>
      </Switch>
    </Layout>
  );
};

export default App;
