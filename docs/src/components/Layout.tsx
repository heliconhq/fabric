import React from 'react';
import {
  TextBlock,
  Title,
  Layout,
  Sidebar,
  HorizontalNavbar,
  LayoutContent,
} from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A component used to create our core app layouts (appbar + content or
        sidebar + content).
      </p>
    </TextBlock>
    <Example wide Component={Layout}>
      {(_, props) => (
        <div style={{ height: 300 }}>
          <Layout direction="horizontal" {...props}>
            <HorizontalNavbar fixed={false}>Navbar</HorizontalNavbar>
            <LayoutContent>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
              <TextBlock>Content goes here.</TextBlock>
            </LayoutContent>
            <HorizontalNavbar fixed={false}>Footer</HorizontalNavbar>
          </Layout>
        </div>
      )}
    </Example>

    <Title>Combined layouts</Title>
    <Example Component={Layout} wide hideControls>
      {(_, props) => (
        <div style={{ height: 300 }}>
          <Layout direction="vertical" {...props}>
            <Sidebar>Sidebar</Sidebar>
            <Layout direction="horizontal">
              <HorizontalNavbar fixed={false}>Navbar</HorizontalNavbar>
              <LayoutContent>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
              </LayoutContent>
            </Layout>
          </Layout>
        </div>
      )}
    </Example>
    <Example Component={Layout} wide hideControls>
      {(props) => (
        <div style={{ height: 300 }}>
          <Layout direction="horizontal" {...props}>
            <HorizontalNavbar fixed={false}>Navbar</HorizontalNavbar>
            <Layout direction="vertical">
              <Sidebar>Sidebar</Sidebar>
              <LayoutContent>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
                <TextBlock>Content goes here.</TextBlock>
              </LayoutContent>
            </Layout>
          </Layout>
        </div>
      )}
    </Example>
  </>
);
