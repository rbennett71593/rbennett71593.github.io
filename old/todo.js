


myFunction = function() {
    var request = new XMLHttpRequest();
    var URL = "/cgi-bin/todo.py"

    request.onreadystatechange = function() {
        console.log("in function: " + request.readyState)
        if (request.readyState==4 && request.status==200)
        {
            console.log(request.responseText)
	    console.log(1)
	    
	    var A = JSON.parse(request.responseText)
                         
	    var mylist = document.getElementById("Todo_list")
            for(var i = 0; i<A.length;i++) {
		//for(i in A){
		if(A[i][0] == "@"){
		    var h1 = document.createElement("h1")
		    h1.innerHTML = A[i].slice(1)
		    mylist.appendChild(h1)
		}
		if(A[i][0]=="#"){
		    
		    var task = document.createElement('input')
		    
		    var label = document.createTextNode(A[i].slice(1))
		    task.type = "checkbox"
		    task.name = "entry"
		    task.value = "This should soon correlate to something unique"
		    task.id = "cats"
		   
		    /*The following 3 lines work because the dictionary contain
		    *ing the properties has been sorted, requiring that everytime
		    * it be in the order: description,dueDate,priority*/
		    task.description = A[i+1].slice(1)
		    task.dueDate = A[i+2].slice(1)
		    task.priority = A[i+3].slice(1)

		    task.onclick = function(){console.log(this.dueDate)}
		    

		    mylist.appendChild(task)
		    mylist.appendChild(label)
		    br = document.createElement("br")
		    mylist.appendChild(br)
		    //DO SOMETHING IF THE ITEM IS A CHECKLIST ENTRY

		}
		
		  
		var li = document.createElement("li") //This line is where I should make each checkbox
		li.innerHTML = A[i]
		//mylist.appendChild(li)
	    }

        }
    }   
    
    request.open("GET",URL,true);
    request.send();
}

window.onload = myFunction
