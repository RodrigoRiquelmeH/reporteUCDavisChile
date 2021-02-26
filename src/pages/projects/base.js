function projectName() {
  return {
    project: {
      title: "nombre corto",
      name:
        "Nombre largo",
      date: "Enero de 2017 a marzo de 2020.",
      team: [
        {
          teamName: "Equipo",
          members: [
            {
              name: "",
              position: "Si no tiene nada dejar en blanco",
            },
            {
              name: "",
              position: "",
            }
          ],
        },
        {
          teamName: "Si dividen el equipo en dos o más usar este modulo, sino dejar en blanco",
          members: [
            {
              name: "",
              position: "",
            },
            {
              name: "",
              position: "",
            },
          ],
        },
      ],
      customer: "Mandante",
      investment: "Inversión",
      description: [
        "cada parrafo es un item, crear tantos como sea necesario",
        "soy otro parrafo",
      ],
      how: [
        "como se hizo el proyecto.",
        `Mismo caso que el anterior, si el parrafo tiene listas, tienes que crearlas acá pero con comilla diagonal,
            <ul>
              <li>item 1</li>
              <li>item 2</li>
            </ul> 
        `, //esta es la comilla diagonal
      ],
      value: [
        "Aporte, cada p una linea",
        "",
        "",
      ],
      partnership: [
        "Alianzas, cada nombre una línea",
        "",
        "",
      ],
    }
  }
}