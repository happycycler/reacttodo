var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{ id: 1, text: 'Walk the dog.' },
				{ id: 2, text: 'Clean the yard.' },
				{ id: 3, text: 'Setup security cameras.' },
				{ id: 4, text: 'Get caulk for security light' },
			]
		}
	},
	handleAddTodo: function (text) {
		alert('new todo: ' + text);
	},
	render: function () {
		var { todos } = this.state;

		return (
			<div>
				<div className="row">
					<div className="column small-centered medium-6 large-4">
						<TodoList todos={todos} />,
						<AddTodo onAddTodo={this.handleAddTodo} />
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;