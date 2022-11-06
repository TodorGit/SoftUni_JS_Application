async function getInfo() {
   
    const stopInfoElement = document.getElementById('stopId');
    const stopID = stopInfoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;
    const stopNameElement = document.getElementById('stopName');
    const busList = document.getElementById('buses');
   
    busList.innerHTML = '';
    stopID.value = '';
    
   try{

    const response = await fetch(url);
    const data = await response.json();

    stopNameElement.textContent = data.name
    Object.entries(data.buses).forEach(([busNumber, time]) => {
        const li = document.createElement('li');
        li.textContent = `Bus ${busNumber} arrives in ${time} minutes`
        busList.appendChild(li);
    })

   } catch(error){

    stopNameElement.textContent = 'Error'
   }

}

