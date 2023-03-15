import React, { Component } from 'react';
import Layout from './components/layout1';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
       <h1>Test thu reactJS</h1>
          
      </Layout>
    );
  }
}

