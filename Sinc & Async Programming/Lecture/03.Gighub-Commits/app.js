function loadCommits() {
    // Try it with Fetch API
    
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    console.log(username);
    console.log(repo);

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError)
}

function handleResponse(response) {
	if (response.ok == false) {
		throw new Error(`Error: ${response.status} ${response.statusText}`)
	}
	return response.json();

}

function handleData(data) {

        console.log(data);
	    const list = document.getElementById('commits');

        Object.entries(data).forEach(repo =>{
		const li = document.createElement('li');
		li.textContent = `${repo[1].commit.author.name} :${repo[1].commit.message} `
		list.appendChild(li); 

		return li
        })
}

    function handleError(err) {

        const list = document.getElementById('commits');

        list.textContent = `${err.message} : (Not Found)` ; 

    }