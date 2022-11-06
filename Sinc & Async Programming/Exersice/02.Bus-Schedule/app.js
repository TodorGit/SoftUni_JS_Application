function solve() {
    
    const infoBoxDepart = document.getElementById('depart');
    const infoBoxArrive = document.getElementById('arrive');
    const info = document.getElementById('info');
    const span = document.querySelector('.info');
    let currentStop = 'depot'
    let nextStop = '';

    async function depart() {

        try {
            const initialUrl = `http://localhost:3030/jsonstore/bus/schedule/${currentStop}`;
            const response = await fetch(initialUrl);
            const data = await response.json();
            span.textContent = `Next stop ${data.name}`;
            info.appendChild(span);
            nextStop = data.next;
    
           
            infoBoxDepart.disabled = true;
            infoBoxArrive.disabled = false;

        } catch (e){
            span.textContent = `Error`;
            info.appendChild(span);
            infoBoxDepart.disabled = true;
            infoBoxArrive.disabled = true;
        }

        
    }

    async function arrive() {


        try{

            const initialUrl = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`;
            const response = await fetch(initialUrl);
            const data = await response.json();    

            span.textContent = `Arriving at ${data.name}`  
            info.appendChild(span)
            currentStop = nextStop; 
    
            infoBoxDepart.disabled = false;
            infoBoxArrive.disabled = true;

        } catch (e){
            span.textContent = `Error`;
            info.appendChild(span);
            infoBoxDepart.disabled = true;
            infoBoxArrive.disabled = true;

        }

        
    }

    return {
        depart,
        arrive
    };
    }




let result = solve();

















// async function arrive() {

//     const initialUrl = `http://localhost:3030/jsonstore/bus/schedule/depot`;
//     const response = await fetch(initialUrl);
//     const data = await response.json();

//     let div = document.getElementById('info');
//     div.textContent = `Arriving at ${data.name}`

//     const infoBoxDepart = document.getElementById('depart');
//     infoBoxDepart.disabled = false;
//     const infoBoxArrive = document.getElementById('arrive');
//     infoBoxArrive.disabled = true;

    
// }


        // const initialUrl = `http://localhost:3030/jsonstore/bus/schedule/depot`;
        // const response = await fetch(initialUrl);
        // const data = await response.json();

        // let div = document.getElementById('info');
        // div.textContent = `Next stop ${data.name}`

        // const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${data.next}`)
        // const dataTwo = await res.json();

        // div.textContent = `Next stop ${dataTwo.name}`

        // const infoBoxDepart = document.getElementById('depart');
        // infoBoxDepart.disabled = true;
        // const infoBoxArrive = document.getElementById('arrive');
        // infoBoxArrive.disabled = false;