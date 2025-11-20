async function database() {
  try {
    let res = await fetch("https://carvins.onrender.com/api/carproduct");
    let data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
database();
