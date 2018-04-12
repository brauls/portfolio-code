import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Project from './Project';

const stories = storiesOf('Project', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Project component to describe a software project)', () => (
    <Project 
        name={text("name", "Awesome WebApp")}
        description={text("description", "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
        link={text("link", 'http://agilemanifesto.org/')}
    />
))

stories
  .add('Example - Description of OpenIndy Project)', () => (
    <Project 
        name={text("name", "OpenIndy")}
        description={text("description", "Open source software solution for industrial measurement (metrology, laser tracker, quality control)")}
        link={text("link", 'https://openindy.github.io/posts/about/')}
    />
))