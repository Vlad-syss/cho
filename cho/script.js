let count = 0;

function showNumber() {
    count++;
    document.getElementById("button").innerText =  `Натиснуто разів: ${count}`;
    document.getElementById("button").classList.add("active");
    if(count >= 100){
       alert("Молодець ти натиснув 100 разів!!! Ти дійсно любив свою маму!");
       resetCount(); 
    }
}
function resetCount() {
    count = 0;
    document.getElementById("button").innerText = "Клацай";
    document.getElementById("button").classList.remove("active");
  }