const url = "http://localhost:8000";

async function getValueAPIEmployees(stringURL) {
  try {

    const response = await fetch(url)
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






