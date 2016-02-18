"use strict";

// W teście po prostu importujemy nasz komponent...
import {TaskView} from './Task';

describe('Task Component', () => {

  //3/ ... i dokładamy kilka prostych testów
  it('should be defined', () => {
    expect(TaskView).toBeDefined();
  });

  it('should render task', () => {
    //4/ given
    const t = new TaskView({
      name: 'Something to do',
      started: 1
    });

    //! when
    const r = t.render(3);

    //6/ then
    expect(r).toEqual(`
      <div class="task active">
        <span>Something to do</span>
        <span>0.0 min</span>
      </div>
    `);
  });
});
