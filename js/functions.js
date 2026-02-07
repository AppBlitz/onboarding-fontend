async function getValueAPIEmployees(stringURL) {
  try {
    const response = await fetch(`http://localhost:8000/empleados/${stringURL}/`)
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

export { getValueAPIEmployees }





