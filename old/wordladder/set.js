function Set() {
    var set = []

    this.add = function(item) {
        if(!this.contains(item)) {
            set.push(item);
            return true;
        } else {
            console.log("Duplicate on set: " + String(item));
            return false;
        }
    }

    this.contains = function(item) {
        if(set.indexOf(item) != -1) {
            return true;
        } else {
            return false;
        }
    }

}

