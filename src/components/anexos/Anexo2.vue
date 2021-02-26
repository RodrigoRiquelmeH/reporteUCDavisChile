<template>
  <div>
    <div class="mb-5 intro blue">
      Más de <strong>70 investigadores</strong> nacionales han sido parte del
      staff del Centro.
    </div>
    <ul>
      <li v-for="member in list" :key="member.id" class="mb-1">
        {{ member.name }}, <em>{{ member.grade }}</em>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Anexo2",
  data: () => ({
    list: [
      {
        id: "1001",
        name: "Alejandra Acuña Estrella",
        grade: "PhD",
      },
      {
        id: "1002",
        name: "Álvaro Gonzalo Castro Oyarzún",
        grade: "PhD",
      },
      {
        id: "1003",
        name: "Camila María Saavedra Pizarro",
        grade: "Master",
      },
      {
        id: "1004",
        name: "Carlos Flores Arenas",
        grade: "PhD",
      },
      {
        id: "1005",
        name: "Carolina Millaray Coll Pehuén",
        grade: "Profesional",
      },
      {
        id: "1006",
        name: "Catalina Belén Pavez Reyes",
        grade: "Master",
      },
      {
        id: "1007",
        name: "Catalina del Pilar Montalvo Araya",
        grade: "Profesional",
      },
      {
        id: "1008",
        name: "Claudia Vivian Pacheco Pino",
        grade: "Profesional",
      },
      {
        id: "1009",
        name: "Claudio Urra Pérez",
        grade: "PhD",
      },
      {
        id: "1010",
        name: "Constanza Verónica Carrasco Jara",
        grade: "Profesional",
      },
      {
        id: "1011",
        name: "Daniela Constanza Sandoval Hernández",
        grade: "PhD",
      },
      {
        id: "1012",
        name: "Daniela Quiroz Larraín",
        grade: "Master",
      },
      {
        id: "1013",
        name: "David Ignacio Bravo Ávila",
        grade: "Profesional",
      },
      {
        id: "1014",
        name: "Dayan Mariel Sanhueza Donoso",
        grade: "PhD",
      },
      {
        id: "1015",
        name: "Denise Eugenia Cifuentes Bachmann",
        grade: "PhD",
      },
      {
        id: "1016",
        name: "Diana Toapanta Gallegos",
        grade: "Master",
      },
      {
        id: "1017",
        name: "Edgardo Candia Silva",
        grade: "Profesional",
      },
      {
        id: "1018",
        name: "Erick Armingol González",
        grade: "Master",
      },
      {
        id: "1019",
        name: "Fabiola Alejandra Flores Pacheco",
        grade: "PhD",
      },
      {
        id: "1020",
        name: "Felipe Esteban Sáez Cortez",
        grade: "Master",
      },
      {
        id: "1021",
        name: "Francisca Alejandra Venegas Mora",
        grade: "Master",
      },
      {
        id: "1022",
        name: "Francisco Rojo Rubke",
        grade: "PhD",
      },
      {
        id: "1023",
        name: "Freddy Boehmwald Thilemann",
        grade: "PhD",
      },
      {
        id: "1024",
        name: "Gabriela Paz Jiménez Gómez",
        grade: "Master",
      },
      {
        id: "1025",
        name: "Gustavo Adolfo Garay Palma",
        grade: "Master",
      },
      {
        id: "1026",
        name: "Gustavo Martínez Suazo",
        grade: "Profesional",
      },
      {
        id: "1027",
        name: "Isidora Belén Silva Valderrama",
        grade: "Profesional",
      },
      {
        id: "1028",
        name: "Jaime Alarcón Soto",
        grade: "PhD (c)",
      },
      {
        id: "1029",
        name: "Jairo Pereira Guerrero",
        grade: "Profesional",
      },
      {
        id: "1030",
        name: "Javier Alonso Mendoza Ortiz",
        grade: "Profesional",
      },
      {
        id: "1031",
        name: "Javier Camaño Espinoza",
        grade: "PhD",
      },
      {
        id: "1032",
        name: "Javier Sebastián Navarrete Muñoz",
        grade: "PhD",
      },
      {
        id: "1033",
        name: "Jessica Carolina Alvarado Vilches",
        grade: "Master",
      },
      {
        id: "1034",
        name: "Juan Carlos Galaz Cabello",
        grade: "Master",
      },
      {
        id: "1035",
        name: "Katherine Fierro Maureira",
        grade: "Profesional",
      },
      {
        id: "1036",
        name: "Katterinne Mendez Carrasco",
        grade: "Profesional",
      },
      {
        id: "1037",
        name: "Leticia Verónica de Lourdes Rojas Araya",
        grade: "Master",
      },
      {
        id: "1038",
        name: "Luis Fernando Coz Léniz",
        grade: "Master",
      },
      {
        id: "1039",
        name: "Mabel Arismendi  Macuer",
        grade: "Profesional",
      },
      {
        id: "1040",
        name: "Macarena Cisternas González",
        grade: "Profesional",
      },
      {
        id: "1041",
        name: "Marcelo Alberto Castro Marchant",
        grade: "Técnico",
      },
      {
        id: "1042",
        name: "Marcelo Herrera",
        grade: "Profesional",
      },
      {
        id: "1043",
        name: "María de los Ángeles Miccono",
        grade: "Master",
      },
      {
        id: "1044",
        name: "María Paz Santibáñez",
        grade: "Master",
      },
      {
        id: "1045",
        name: "María Victoria Riquelme Muñoz",
        grade: "Técnico",
      },
      {
        id: "1046",
        name: "Maribel Rojas Arroyo",
        grade: "Master",
      },
      {
        id: "1047",
        name: "Matías Agustín Garib Andrighetti",
        grade: "Profesional",
      },
      {
        id: "1048",
        name: "Mauricio Cañoles Salvo",
        grade: "PhD",
      },
      {
        id: "1049",
        name: "Mauricio González Carreño",
        grade: "Profesional",
      },
      {
        id: "1050",
        name: "Mónica Desireé Rodríguez Campos",
        grade: "Master",
      },
      {
        id: "1051",
        name: "Natalia Díaz Furmento",
        grade: "Master",
      },
      {
        id: "1052",
        name: "Olivia Valdés Piñera",
        grade: "Profesional",
      },
      {
        id: "1053",
        name: "Pablo Andrés Chicurel Correa",
        grade: "Profesional",
      },
      {
        id: "1054",
        name: "Pablo Andrés Zamora Cantillana",
        grade: "PhD",
      },
      {
        id: "1055",
        name: "Patricia Anguita Mackay",
        grade: "Profesional",
      },
      {
        id: "1056",
        name: "Patricio Alberto Muñoz Torres",
        grade: "PhD",
      },
      {
        id: "1057",
        name: "Patricio Román San Pedro",
        grade: "Master",
      },
      {
        id: "1058",
        name: "Pedro Izquierdo Huneeus",
        grade: "Profesional",
      },
      {
        id: "1059",
        name: "Priscila Moraga Suazo",
        grade: "PhD",
      },
      {
        id: "1060",
        name: "Roberto Fuentes Prieto",
        grade: "Profesional",
      },
      {
        id: "1061",
        name: "Rodrigo Antonio Riquelme Hormazábal",
        grade: "Profesional",
      },
      {
        id: "1062",
        name: "Sandra Gandolfo Wiederhold",
        grade: "PhD",
      },
      {
        id: "1063",
        name: "Sebastián Luis Márquez Miranda",
        grade: "PhD",
      },
      {
        id: "1064",
        name: "Soroush Parsa",
        grade: "PhD",
      },
      {
        id: "1065",
        name: "Susan Aguilera Olate",
        grade: "Profesional",
      },
      {
        id: "1066",
        name: "Valentina Michelle Alarcón Palma",
        grade: "Profesional",
      },
      {
        id: "1067",
        name: "Verónica Arenas Morales",
        grade: "Master",
      },
      {
        id: "1068",
        name: "Victor Alejandro Salfate Pérez",
        grade: "Técnico",
      },
      {
        id: "1069",
        name: "Víctor Fabián González Morales",
        grade: "Master",
      },
      {
        id: "1070",
        name: "Viviana del Pilar Durán Celis",
        grade: "Técnico",
      },
      {
        id: "1071",
        name: "Gonzalo Javier Hernández Oliva",
        grade: "Técnico",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.title-unit {
  font-size: 25px;
  margin-bottom: 20px;
}
ul {
  list-style: circle;
  padding-left: 20px;
  @media #{$min-tablet} {
    columns: 2;
    column-gap: 70px;
  }
  @media #{$min-desktop} {
    columns: 3;
  }
}
</style>