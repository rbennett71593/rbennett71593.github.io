//Ryan Bennett
//CS 351 Internet Programming

error = false;
errorText = "";

function wordLadder() {
    var words = getStartingWords();

    if(!error) {    
        words.usedWords.add(words.start); 
    
        var stack = new Stack();
        stack.push(words.start);

        findNextWord(words, stack);
        var ladder = buildLadder(words);
        if(!ladder) { 
        	error = true
            errorText = "You've managed to find a pair of words with no ladder.";
        } else {
            error = false;
            words.ladder = ladder;
        }
    }
    printResults(words);
}

function difference(word1, word2) {
    var d = 0;
    for(var i=0; i<word1.length; i++) {
        if (word1[i] != word2[i]) { d++; }
    }
    return d == 1;
}

function findNextWord(words, stack) {

    for(var i = 0; i < words.wordList.length; i++) {
        if(difference(stack.top(), words.wordList[i])) {
            if(!words.usedWords.contains(words.wordList[i])) { 
                var st = copyStack(stack);
                st.push(words.wordList[i]);
                words.queue.enqueue(st);
                words.usedWords.add(words.wordList[i]);
            }
        }
    }
    return true;
}

function buildLadder(words) {

    while (!words.queue.isEmpty()) {
        var possibility = words.queue.dequeue();
        var top_word = possibility.top();

        if(top_word == words.end){ //ladder found!!
        	return possibility;
        } else {
            findNextWord(words, possibility);       
        }
    }
    return false; //no ladder
}

function getStartingWords() {
    var words = {}
    words.queue = new Queue();
    words.usedWords = new Set();
    error = false;
    errorText = "";

    words.start = document.getElementById("start").value;
    words.end = document.getElementById("end").value;
    words.length = words.start.length;
  
    if(words.length >= 3 && words.length <= 5){
		if (words.start.length != words.end.length) {
			error = true
			errorText = "Make sure your words are both 3, 4, or 5 letters!";
			return words;
		}else if(words.start == words.end) {
			error = true;
			errorText = "Please enter unique words";
			return words;
		}else{ //valid words
			if(words.length == 3) {
				words.wordList = threeLetterWords;
			} else if(words.length == 4) {
				words.wordList = fourLetterWords;
			} else if(words.length == 5) { 
				words.wordList = fiveLetterWords;
			}
		}
    } else {
    	error = true;
    	errorText = "Words must be 3, 4, or 5 characters long";
    }

    return words;
}

function copyStack(stk) {
    var newStack = new Stack();
    newStack.setArray(stk.getStack());
    return newStack;
}

function printResults(words) {
    if(error) {
        document.getElementById("ladder").innerHTML = errorText;
    }
    else {
        var ul = document.createElement("ul"); 
        while(!words.ladder.isEmpty()) {    
            var li = document.createElement("li");
            li.innerHTML = words.ladder.pop()
            ul.appendChild(li);
        }
        
        //clear
        document.getElementById("ladder").innerHTML = ""; 
        document.getElementById("ladder").appendChild(ul);
    }
}


