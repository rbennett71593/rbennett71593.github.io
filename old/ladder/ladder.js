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


var Queue = function()
{
	var queue = [];

	this.add = function(element) {
		queue.push(element);
		return this;
	};

	this.get = function(element) {
		return queue.shift();
	};

	this.remove = function() {
		queue.shift();
		return this;
	};

	this.size = function() {
		return queue.length;
	};

	this.isEmpty = function() {
		return (queue.length == 0);
	};

	this.getQueue = function() {
		return queue;
	};
};