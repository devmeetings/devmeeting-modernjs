"use strict";

import React from 'react';

import {TaskView} from './Task.js';

describe('Task Component', () => {

  it('should be defined', () => {
    expect(TaskView).toBeDefined();
  });

  it('should create task', () => {
    const t = new TaskView({
      task: {
        name: 'Something to do',
        started: 1
      },
      now: 3
    });

    expect(t).toBeDefined();
  });

  it('should render task', () => {
    const now = 3;
    const task = {
      name: 'Something to do',
      started: 1
    };

    const r = React.renderToString(<TaskView task={task} now={now} />);

    //15/ This is obviously not a best way to test React components
    //! See: https://facebook.github.io/react/docs/test-utils.html)
    expect(r).toEqual(
      '<div class="task active" data-reactid=".0" data-react-checksum="779180207">'
      +   '<span data-reactid=".0.0">'
      +     '<span data-reactid=".0.0.0">'
      +     'Something to do'
      +     '</span>'
      +     '<span data-reactid=".0.0.1"> </span>'
      +   '</span>'
      +   '<span data-reactid=".0.1">'
      +     '<span data-reactid=".0.1.0">0.0</span>'
      +     '<span data-reactid=".0.1.1"> min</span>'
      +   '</span>'
      + '</div>' 
    );
  });
});
