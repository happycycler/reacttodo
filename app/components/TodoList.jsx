var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function () {
		var { todos, onToggle } = this.props;
		var renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="message-text text-center">No Todos available!</p>
				)
			};

			return todos.map((todo) => {
				// console.log(todo);
				return (
					<Todo key={todo.id} {...todo} onToggle={onToggle} />
				);				
			});
		};

		return (
			<div>
				{ renderTodos() }
			</div>
		)
	}
});

module.exports = TodoList;