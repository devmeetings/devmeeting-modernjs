"use strict";

import {TaskView} from './Task.js';

describe('Task Component', () => {

  it('should be defined', () => {
    expect(TaskView).toBeDefined();
  });

  it('should render task', () => {
    const t = new TaskView({
      task: {
        name: 'Something to do',
        started: 1
      },
      now: 3
    });

    const r = t.render();

    expect(r).toEqual(`
      <div class="task active">
        <span>Something to do</span>
        <span>0.0 min</span>
      </div>
    `);
  });
});
