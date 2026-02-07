import { getValueAPIEmployees } from "./functions.js"

document.getElementById("submit").addEventListener("click", () => {
})

document.getElementById("submitS").addEventListener("click", async () => {
  const value = document.forms["formSearch"]["employeeID"].value;
  let newEmployee = await getValueAPIEmployees(value);
  if (newEmployee != null) {
    // console.log(newEmployee.postalCode)
    const data = document.forms["formUpdateUser"];
    data.nameOne.value = newEmployee.nameOne;
    data.otherName.value = newEmployee.otherName;
    data.firstSurname.value = newEmployee.firstSurname;
    data.secondSurname.value = newEmployee.secondSurname;
    data.telephone.value = newEmployee.telephone;
    data.address.value = newEmployee.address;
    data.city.value = newEmployee.city;
    data.postcode.value = newEmployee.postalCode;
    data.position.value = newEmployee.position;
    data.area.value = newEmployee.area;
  }

})





