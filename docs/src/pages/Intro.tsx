import React from 'react';

import { RunningText } from '@heliconhq/core';

export default () => (
  <RunningText>
    <p>
      Welcome to <a href="https://github.com/heliconhq/fabric">Fabric</a>! A
      React component library created specifically for rapid development of data
      applications.
    </p>
    <h2>Create a Fabric application</h2>
    <p>
      The easiest way to get started is our <a href="#">Cookiecutter</a>{' '}
      template. Install it and run the following to create your application:
    </p>
    <pre>cookiecutter gh:heliconhq/fabric-cookiecutter</pre>
    <p>
      This will create a project layout that contains all of the basic packages
      you need. Follow the instructions in the README.md file included in the
      project.
    </p>
    <h2>Manual install</h2>
    <p>You can install Fabric via npm:</p>
    <pre>npm install @heliconhq/core @heliconhq/select</pre>
    <p>
      Consult the <a href="https://github.com/heliconhq/fabric">README</a> in
      the project's GitHub for more detailed information.
    </p>
    <h2>Support</h2>
    <p>
      Join our Discord or open an issue if you need help, miss a component, or
      want to contribute to the project.
    </p>
  </RunningText>
);
