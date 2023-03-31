  
  //select the input field with the id attribute of "fahrenheit" and 'celsius' //
  var fahrenheitInput = document.getElementById('fahrenheit');
  var celsiusInput = document.getElementById('celsius');
  
  //set the convert button to trigger the tempertature conversion fuction and the clear button of clear form//
  document.getElementById('convert').onclick = tempConvert;
  document.getElementById('clear').onclick = clearForm;

  // set the cursor on the Fahrenheit input field when the page finishes loading//
  window.onload = function() {
    fahrenheitInput.focus();
  };
  
  //formulate of converting from fahrenheit to celsius and from celsius to fahrenheit//
  function tempConvert() {
      var fahrenheit = fahrenheitInput.value;
      var celsius = celsiusInput.value;
  
      if (isNaN(parseFloat(fahrenheit)) && isNaN(parseFloat(celsius))) {
          alert('Hey there! Please make sure to enter a valid number for Fahrenheit or Celsius. Thanks!');
      } else if (!isNaN(parseFloat(fahrenheit))) {
          celsius = (parseFloat(fahrenheit) - 32) / 1.8;
      } else {
          fahrenheit = (parseFloat(celsius) * 1.8) + 32;
      }
  
    //convert the numbers and round them round to 1 decimal place//
      fahrenheitInput.value = parseFloat(fahrenheit).toFixed(1);
      celsiusInput.value = parseFloat(celsius).toFixed(1);

    //disable the function after convertion//
      fahrenheitInput.disabled = true;
      celsiusInput.disabled = true;
  }
  
  // clear the temperature inputs in the form so that users can enter new temperatures//
  function clearForm() {
      fahrenheitInput.value = '';
      celsiusInput.value = '';
      fahrenheitInput.disabled = false;
      celsiusInput.disabled = false;
  //Sets the focus back to the Fahrenheit input field, so the user can start typing their new temperature right away//
      document.getElementById("fahrenheit").focus();
  }
  
  // Allow user to press Enter key to convert temperature and press delete to clear the result
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          tempConvert();
      } else if (event.key === 'Delete' || event.key === 'Backspace') {
          clearForm();
      }
  });
  

 