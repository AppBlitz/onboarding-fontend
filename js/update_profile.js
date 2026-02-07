import { getValueAPIEmployees } from "./functions.js"

document.getElementById("submit").addEventListener("click", () => {
})

document.getElementById("submitS").addEventListener("click", () => {
  const value = document.forms["formSearch"]["employeeID"].value;
  const data = getValueAPIEmployees("/" + value + "/");
  data.nameOne.value = newEmployee.nameOne;
  data.otherName.value = newEmployee.otherName;
  data.firstSurname.value = newEmployee.firstSurname;
  data.secondSurname.value = newEmployee.secondSurname;
  data.telephone.value = newEmployee.telephone;
  data.address.value = newEmployee.address;
  data.city.value = newEmployee.city;
  data.postcode.value = newEmployee.postcode;
  data.position.value = newEmployee.position;
  data.area.value = newEmployee.area;

})





