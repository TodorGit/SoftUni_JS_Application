function loadRepos() {

	const username = document.getElementById('username').value;

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleResponse)
		.then(handleData)
		.catch(handleError);
}


function handleResponse(response) {
	if (response.ok == false) {
		throw new Error(`Error: ${response.status} ${response.statusText}`)
	}
	return response.json();

}

function handleData(data) {
	console.log(data);
	const list = document.getElementById('repos');

	const items = data.map(repo =>{
		console.log(repo);
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = repo.html_url
		a.textContent = repo.full_name;
		li.appendChild(a);
		list.appendChild(li); 

		return li
	})

	list.replaceChildren(...items);

}


function handleError(err) {
	const list = document.getElementById('repos');

	list.textContent = err.message
}