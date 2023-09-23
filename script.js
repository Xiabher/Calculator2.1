function add() {
    const num1 = parseFloat(document.getElementById("firstValue").value);
    const num2 = parseFloat(document.getElementById("secondValue").value);
    const result = num1 + num2;
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  
  function subtract() {
    const num1 = parseFloat(document.getElementById("firstValue").value);
    const num2 = parseFloat(document.getElementById("secondValue").value);
    const result = num1 - num2;
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  
  function multiplyBy() {
    const num1 = parseFloat(document.getElementById("firstValue").value);
    const num2 = parseFloat(document.getElementById("secondValue").value);
    const result = num1 * num2;
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  
  function divideBy() {
    const num1 = parseFloat(document.getElementById("firstValue").value);
    const num2 = parseFloat(document.getElementById("secondValue").value);
    const result = num1 / num2;
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  
  function calculatePercentage() {
    const num1 = parseFloat(document.getElementById("firstValue").value);
    const num2 = parseFloat(document.getElementById("secondValue").value);
  
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      const percentage = (num1 / num2) * 100;
      document.getElementById("result").innerHTML = num1 + " is " + percentage.toFixed(2) + "% of " + num2;
    } else {
      alert("Please enter valid numbers. The second value should not be zero.");
    }
  }
  
  function calculateSquareRoot() {
    const number = parseFloat(document.getElementById("firstValue").value);
  
    if (!isNaN(number) && number >= 0) {
      const squareRoot = Math.sqrt(number);
      document.getElementById("result").innerHTML = "Square root of " + number + " is " + squareRoot.toFixed(2);
    } else {
      alert("Please enter a valid non-negative number in the first input field.");
    }
  }
  
  function calculatePythagoras() {
    const sideA = parseFloat(document.getElementById("firstValue").value);
    const sideB = parseFloat(document.getElementById("secondValue").value);
  
    if (!isNaN(sideA) && !isNaN(sideB) && sideA >= 0 && sideB >= 0) {
      const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
      document.getElementById("result").innerHTML = "Hypotenuse is " + hypotenuse.toFixed(2);
    } else {
      alert("Please enter valid non-negative numbers for Side A and Side B.");
    }
  }
  
  function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("firstValue").value);
  
    if (!isNaN(radius) && radius >= 0) {
      const area = Math.PI * Math.pow(radius, 2);
      document.getElementById("result").innerHTML = "Circle's Area is " + area.toFixed(2);
    } else {
      alert("Please enter a valid non-negative radius.");
    }
  }
  
  function calculateCylinderVolume() {
    const radius = parseFloat(document.getElementById("firstValue").value);
    const height = parseFloat(document.getElementById("secondValue").value);
  
    if (!isNaN(radius) && !isNaN(height) && radius >= 0 && height >= 0) {
      const volume = Math.PI * Math.pow(radius, 2) * height;
      document.getElementById("result").innerHTML = "Cylinder's Volume is " + volume.toFixed(2);
    } else {
      alert("Please enter valid non-negative values for the radius and height.");
    }
  }