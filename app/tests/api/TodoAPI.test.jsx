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
});
