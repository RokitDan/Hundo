function getNumbers() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse the numbers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  let outNumber = 0;

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // true condition
    for (let i = startValue; i <= endValue; i++) {
      outNumber += i;  
      
    }

    document.getElementById("results").innerHTML = outNumber;

  }else{
    // false condition
    alert("Please enter a number");

  }



}

function getValue2() {
  let msg = "";
  msg = document.getElementById("message").value;
  Swal.fire({
    backdrop: false,
    title: "App Name",
    text: msg,
  });
}
