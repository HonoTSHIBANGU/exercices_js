function insert(){
    const a = document.getElementById("sampleTable").insertRow(0);
    let b = a.insertCell(0);
    let c = a.insertCell(1);
    b.innerHTML = "TSHIBANGU";
    c.innerHTML = "Honore";
    }
    insert();