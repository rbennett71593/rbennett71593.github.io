function Queue() {
    var queue = []

    this.enqueue = function(item) { queue.push(item); }

    this.dequeue = function() { 
        if(!this.isEmpty()) {
        	return queue.shift();
        }
        else {
            console.log("Nothing to dequeue!");
            return false;
        }
    }

    this.isEmpty = function() { return (queue.length == 0); }

    this.size = function() { return queue.length; }
    
    this.toString = function() { 
        var str = "";
        for(var i=0; i<queue.length; i++) {
            str += queue[i].toString() + "\n";
        }
        return str;
    }
}
