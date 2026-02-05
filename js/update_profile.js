import { getValueAPIEmployees } from "./functions.js"

document.getElementById("submit").addEventListener("click", () => {
  const data = document.forms["formUpdateUser"];
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


const newEmployee = getValueAPIEmployees("");



