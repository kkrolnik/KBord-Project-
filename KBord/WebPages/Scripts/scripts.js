
function submitPost(boardSelected){
    event.preventDefault();
	IDDisplay = document.createElement("p");
    postID = -1
    userPost = document.createElement("p");
    postContent = document.createTextNode(document.getElementById("user-post").value);

    userPost.appendChild(postContent);

    postID = savePost(document.getElementById("user-post").value, boardSelected);
	idNode = document.createTextNode("Thread ID: " + postID);
	IDDisplay.appendChild(idNode);
	
	document.body.appendChild(IDDisplay);
	document.body.appendChild(userPost);
    document.getElementById("user-post").value = "";
    
}

function savePost(toSave, boardSelected){
    const key = Math.floor(Math.random() * 1000000);
    const currBoard = boardSelected.toString() + " ";
    localStorage.setItem(currBoard.concat(key), JSON.stringify(toSave));
	return currBoard + key
}

function getAll(boardSelected){
    for(let i = 0; i < localStorage.length; i++){
        getID = localStorage.key(i);
        idNode = document.createTextNode("Thread ID: " + getID);
        displayID = document.createElement("p");
        userPost = document.createElement("p");

        postContent = localStorage.getItem(localStorage.key(i));
        contentConvert = document.createTextNode(postContent);

        displayID.appendChild(idNode);
        userPost.appendChild(contentConvert);
		
		if((getID.toString()).includes(boardSelected)){
        	document.body.appendChild(displayID);
        	document.body.appendChild(userPost);
		}
    }
}

function queryPosts(){
	event.preventDefault();
	console.log("queryPosts run!");
	
    toQuery = document.getElementById("query").value;

    let allPosts = document.getElementsByTagName('p');
    
	for (i = allPosts.length - 1; i >= 0; i--) {
	    allPosts[i].remove();
	}
	
	console.log("allPosts removed!")

	idDisplay = document.createElement("p");
	idNode = document.createTextNode("Thread ID: " + toQuery);
    toDisplay = document.createElement("p");
    postContent = localStorage.getItem(toQuery);
    contentNode = document.createTextNode(postContent);

	
	idDisplay.append(idNode);
	document.body.appendChild(idDisplay);
    toDisplay.append(contentNode);
    document.body.appendChild(toDisplay);
	
	console.log("Result displayed!")
}
