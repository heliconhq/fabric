import React from 'react';
import { createRoot } from 'react-dom/client';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { App, getPersistedTheme, Layout, LayoutContent } from '@heliconhq/core';

import Sidebar from './docsComponents/Sidebar';
import RenderDocs from './docsComponents/RenderDocs';

const Wrapper = () => (
  <Router basename={process.env.ROUTER_BASENAME}>
    <App themeName={getPersistedTheme('default-light-theme')}>
      <Layout direction="vertical">
        <Sidebar />
        <LayoutContent>
          <Switch>
            <Route path="/:category" exact>
              <p>Use the navigation to the left to select a page.</p>
            </Route>
            <Route path="/:category/pages/:component">
              <RenderDocs />
            </Route>
            <Route path="/">
              <Redirect to="/overview/pages/introduction" />
            </Route>
          </Switch>
        </LayoutContent>
      </Layout>
    </App>
  </Router>
);

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<Wrapper />);
