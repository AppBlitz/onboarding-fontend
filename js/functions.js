const url = "http://localhost:8000";

async function getValueAPIEmployees(stringURL) {
  const URL = url + stringURL;
  try {

    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error(`Response status is:${response.status}`)
    }
    const result = await response.json();
    console.log(result)

  } catch (error) {
    console.log(error)
  }
  return result
}

export { getValueAPIEmployees }





