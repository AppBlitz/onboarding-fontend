
function validation() {
  const data = document.forms["formUpdateUser"];
  data.nameOne.value = newEmployee.nameOne;
  data.otherName.value = newEmployee.otherName;
  data.firstSurname.value = newEmployee.firstSurname;
  data.secondSurname.value = newEmployee.secondSurname;
  data.telephone.value = newEmployee.telephone;
  data.address.value = newEmployee.address;
  data.city.value = newEmployee.city;
  data.postcode.value = newEmployee.postcode;
  data.position.value = newEmployee.position.name;
  data.area.value = newEmployee.area.name;
}

const newEmployee = {
  nameOne: "Carlos",
  otherName: "Fabian",
  postcode: "110111",
  firstSurname: "Corrales",
  secondSurname: "Zapata",
  telephone: "3001234567",
  numberEmployee: "EMP-002",
  address: "Calle 10 #20-30",
  city: "Medellín",
  position: "Backend Developer",
  area: "Engineering",
};



