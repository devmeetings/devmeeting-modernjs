"use strict";

import {TaskView} from './Task';

describe('Task Component', () => {

  it('class should be defined', () => {
    expect(TaskView).toBeDefined();
  });

  it('should return time', () => {
    const t = new TaskView();
    t.now = 3;
    t.task = {
      name: 'Something to do',
      started: 1,
      finished: null
    };

    expect(t.isActive).toEqual(true);
    expect(t.time).toEqual(2 / 1000 / 60);
  });
});
