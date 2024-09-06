
function submitPost(){
    preventDefault();

    postID = -1
    userPost = document.createElement("p");
    postContent = document.createTextNode(document.getElementById("user-post").value);

    userPost.appendChild(postContent);
    document.body.appendChild(userPost);

    savePostGeneral(document.getElementById("user-post").value);
    document.getElementById("user-post").value = "";
    
}

function savePostGeneral(toSave){
    const key = Math.floor(Math.random() * 1000000);
    const currBoard = "general ";
    localStorage.setItem(currBoard.concat(key), JSON.stringify(toSave));
}

function getAll(){
    for(let i = 0; i < localStorage.length; i++){
        getID = localStorage.key(i);
        idNode = document.createTextNode("Thread ID: " + getID);
        displayID = document.createElement("p");
        userPost = document.createElement("p");

        postContent = localStorage.getItem(localStorage.key(i));
        contentConvert = document.createTextNode(postContent);

        displayID.appendChild(idNode);
        userPost.appendChild(contentConvert);

        document.body.appendChild(displayID);
        document.body.appendChild(userPost);
    }
}

function queryPosts(){
    toQuery = document.getElementById("query").value;

    let allPosts = document.getElementsByTagName('p');
    
    while(allposts.length > 0) {
        allPosts[0].remove();
    }


    toDisplay = document.createElement("p");
    postContent = localStorage.getItem(toQuery);
    contentNode = document.createTextNode(postContent);

    toDisplay.append(contentNode);
    document.body.appendChild(toDisplay);
}
