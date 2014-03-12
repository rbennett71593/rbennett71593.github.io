var Stack = function()
{

	var stack = [];

	this.add = function(element) {
		stack.push(element);
		return this;
	};

	this.top = function() {
		return stack.pop();
	};

	this.remove = function() {
		stack.pop();
		return this;
	};

	this.size = function() {
		return stack.length;
	};

	this.isEmpty = function() {
		return (stack.length == 0);
	};

	this.getStack = function() {
		return stack;
	};
};
