var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id: 1,
				text: 'Test valid todos.',
				completed: false
			}];
			TodoAPI.setTodos(todos);

			var storedTodos = JSON.parse(localStorage.getItem('todos'));
			
			expect(storedTodos).toEqual(todos);
		});	

		it('should NOT set invalid todos array', () => {
			var badTodos = { a: 'b' };
			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});	
	});
	
	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			var storedTodos = TodoAPI.getTodos();
			expect(storedTodos).toEqual([]);
		});	
	});

	describe('getTodos', () => {
		it('should return todos if valid array in localStorage', () => {
			var todos = [{
				id: 1,
				text: 'Test valid todos.',
				completed: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));
			
			var storedTodos = TodoAPI.getTodos();
			expect(storedTodos).toEqual(todos);
		});	
	});

	describe('filterTodos', () => {
		var todos = [
			{ id: 1, text: 'Text for #1.', completed: true },
			{ id: 2, text: 'Text for #2.', completed: false },
			{ id: 3, text: 'Text for #3.', completed: true }
		]

		it('should return all items if showCompleted is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});	

		it('should return uncompleted items if showCompleted is false', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter todos by searchText', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '#3');
			expect(filteredTodos.length).toBe(1);
		});

		it('should return all todos if searchText is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

	});
});
