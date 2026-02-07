import { API_URL } from "./config";
const url = API_URL

async function getValueAPIEmployees(stringURL) {
  try {
    const response = await fetch(`${url}${stringURL}/`)
    if (!response.ok) {
      throw new Error(`Response status is:${response.status}`)
    }
    const result = await response.json();
    console.log(result)
    return result

  } catch (error) {
    console.log(error)
    return null
  }
}



async function saveEmployee(employee) {
  try {
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numberEmployee: uuidv4(),
        nameOne: employee.nameOne,
        otherName: employee.otherName,
        firstSurname: employee.firstSurname,
        secondSurname: employee.secondSurname,
        telephone: employee.telephone,
        address: employee.address,
        city: employee.city,
        postalCode: employee.postCode,
        position: employee.position,
        area: employee.area
      })
    });

    const data = await request.json(); // 👈 CLAVE

    if (!request.ok) {
      console.error("Errores del backend:", data);
      throw new Error("Datos inválidos");
    }

    console.log("Empleado guardado:", data);

  } catch (error) {
    console.error("Error al guardar empleado:", error);
  }
}


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
export { getValueAPIEmployees, saveEmployee }





