const list = document.getElementById('comments');

init();

function init(){

    document.getElementById('load').addEventListener('click',getComments);
    document.getElementById('comment-form').addEventListener('submit', onPost);
    list.addEventListener('click', onCommentClick);

    getComments();
}

async function onPost(){

    event.preventDefault();
    const formData = new FormData(event.target);    

   const {name, content} = Object.fromEntries(formData.entries())

   const result =  await postComments({content})
   list.prepend(createCommentCard(result));
}


function displayComments(comments){

    list.replaceChildren(...comments.map(createCommentCard));
}

function createCommentCard(comment){
    const element = document.createElement('article');
    element.innerHTML = `<header><h3>${comment.author.username}</h3></header>
                        <main><p>${comment.content}</p><button>Delete</button></main>`;
    element.id = comment._id;

    return element;
}

async function getComments(){
//http://localhost:3030/jsonstore/comments

    const response = await fetch('http://localhost:3030/data/comments?load=author%3D_ownerId%3Ausers');
    const data = await response.json();

    const comments = Object.values(data).reverse();
    displayComments(comments);

}

async function postComments(comment){
    const token = sessionStorage.getItem('accessToken');
    
    const response = await fetch('http://localhost:3030/data/comments', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization' : token
        },
        body: JSON.stringify(comment)
    });

    const data = await response.json();

    return data

}

function onCommentClick(ev){
    if(ev.target.tagName == 'BUTTON'){
        const choice = confirm('Are you sure you want to delete this comment?');
        if(choice){
            const commentID = ev.target.parentElement.parentElement.id;
            deleteComment(commentID);
        }
        
    }
}

async function deleteComment(id){

    const response = await fetch('http://localhost:3030/jsonstore/comments/' + id, {
        method: 'delete'
    });

    document.getElementById(id).remove();

}

async function updatePost(id, comment){
    const response = await fetch('http://localhost:3030/jsonstore/comments/' + id, {
        method: 'put',
        headers: { 
            'Content - Type' : 'application/json'
        },
        body: JSON.stringify(comment)
    });

    return response.json();
}