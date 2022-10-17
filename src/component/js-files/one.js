console.log("Hello World");
function main() {
  document.getElementById("cnt01").innerHTML = counter;
}
let counter = 0;
let id=null;
function startCounter() {
  id=setInterval(() => {
    counter++;
    document.getElementById("cnt01").innerHTML = counter;
  }, 500);
  console.log("startcounter");
}
function stopCounter(){
    clearInterval(id);
    console.log("stopcounter");
}