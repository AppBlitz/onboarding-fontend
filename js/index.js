import { saveEmployee } from "./functions.js";


document.getElementById("button_save_user").addEventListener("click", () => {
  const valueForm = document.forms["form_add_user"]
  const createObject = {
    nameOne: valueForm.nameOne.value,
    otherName: valueForm.otherName.value,
    firstSurname: valueForm.firstSurname.value,
    secondSurname: valueForm.secondSurname.value,
    telephone: valueForm.telephone.value,
    address: valueForm.address.value,
    city: valueForm.city.value,
    postCode: valueForm.postcode.value,
    position: valueForm.position.value,
    area: valueForm.area.value
  }
  saveEmployee(createObject)
  valueForm.reset();

})
