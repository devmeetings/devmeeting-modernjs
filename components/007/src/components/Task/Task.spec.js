"use strict";

import angular from 'angular';
import 'angular-mocks';

import TaskComponent from './Task.js';
import {TaskView, mod} from './Task.js';

describe('Task Component', () => {

  let $scope, $componentController;

  beforeEach(angular.mock.module(mod.name));

  beforeEach(angular.mock.inject(($rootScope, _$componentController_) => {
      $scope = $rootScope.$new();
      $componentController = _$componentController_;
  }));

  it('should be defined', () => {
    const ctrl = $componentController('taskView', {$scope});
    expect(ctrl).toBeDefined();
  });

  it('class should be defined', () => {
    expect(TaskView).toBeDefined();
  });

  it('should return time', () => {
    const props = {
      now: 3,
      task: {
        name: 'Something to do',
        started: 1
      }
    };
    const ctrl = $componentController('taskView', {$scope}, props);

    expect(ctrl.isActive).toEqual(true);
    expect(ctrl.time).toEqual(2 / 1000 / 60);
  });
});
