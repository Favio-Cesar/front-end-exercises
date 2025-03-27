fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Hubo un error con la conexion.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("error de fetch:", error);
  });
