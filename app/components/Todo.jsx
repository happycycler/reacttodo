var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function () {
		var { id, text, completed, createdAt, completedAt } = this.props;
		var todoClassName = completed ? 'todo-text-completed' : 'todo-text';

		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt
			
			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
		};

		return (
			<div className="todo-box" onClick={() => { this.props.onToggle(id); }}>
				<input className="todo-check" type="checkbox" checked={completed} readOnly="false" />
				<div className="todo-text-box">
					<span className={todoClassName}>{text}</span><br/>
					<span className={todoClassName + ' todo-timestamp'}>{renderDate()}</span>
				</div>
			</div>
		)
	}
});

module.exports = Todo;