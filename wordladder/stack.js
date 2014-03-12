function Stack() {
    
    var stack = []

    this.push = function(item) {
    	stack.push(item);
    }

    this.pop = function() { 
        if(!this.isEmpty()) { return stack.pop(); } 
        else {
            console.log("Cannot pop empty stack");
            return false;
        }
    }

    this.top = function() {
    	return stack[stack.length - 1];
    }

    this.isEmpty = function() {
    	return (stack.length == 0);
    }

    this.size = function() {
    	return stack.length;
    }

    this.getStack = function() {
        return stack.slice(0);
    }

    this.setArray = function(arr) {
        stack = arr;
    }

    this.toString = function() {
        str = "BOTTOM \n";
        for(var i=0; i<stack.length; i++) {
            str += stack[i] + "\n"
        }
        return str += "TOP";
    }
}



