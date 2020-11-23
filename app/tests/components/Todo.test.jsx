var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should render todo component for each todo item', () => {
		var todos = [
			{ id: 1, text: 'Walk the dog.' },
			{ id: 2, text: 'Clean the yard.' },
			{ id: 3, text: 'Setup security cameras.' },
			{ id: 4, text: 'Get caulk for security light' }
		]
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});
});