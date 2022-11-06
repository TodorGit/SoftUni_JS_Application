function solution() {
    
    const button = document.getElementById('button').addEventListener('click', getInfo)

    async function getInfo(){

        const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

    }

    
}