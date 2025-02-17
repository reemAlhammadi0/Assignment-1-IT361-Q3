var number;
do {
  number = parseInt(prompt("Enter a number: "));

  if (number <= 15) {
    alert("The number is less than or equal to 15. Try again!")
  } else{
    document.getElementById("message").innerText =
      "Number is greater than 15!";
  }
} while (number <= 15);