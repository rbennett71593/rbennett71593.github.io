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
