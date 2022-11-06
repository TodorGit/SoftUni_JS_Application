function lockedProfile() {
    
    async function getInfo(){

        const url = `http://localhost:3030/jsonstore/advanced/profiles`
        const response = await fetch(url);
        const data = await response.json();

        Object.entries(data).forEach(el =>{
            const info = el[1];
            const profileDiv = document.getElementsByClassName('profile')
            const div = document.createElement('div');
            div.classList.add('profile');
            const img = document.createElement('img');
            img.classList.add('userIcon');
            img.src = ('./iconProfile2.png');
            const lockLabel = document.createElement('label');
            lockLabel.textContent = 'Lock'
            const radioOne = document.createElement('input');
            radioOne.type = 'radio';
            radioOne.value = 'lock';
            const unlockLable = document.createElement('label');
            unlockLable.textContent = 'Unlock';
            const radioTwo = document.createElement('input');
            radioOne.type = 'radio';
            radioOne.value = 'unlock';
            const hr = document.createElement('hr');
            const userLabel = document.createElement('label');

            profileDiv.appendChild(div)

        })
        
    }

    getInfo()
}