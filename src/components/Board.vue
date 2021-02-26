<template>
  <div class="row px-4">
    <div
      class="ht-team-member board-member col-12 col-md-3 col-lg-2 mb-4 wow move-up"
      v-for="item in team"
      :key="item.name"
    >
      <TeamMember
        :name="item.name"
        :boardPosition="item.boardPosition"
        :position="item.position"
        :country="item.country"
      />
    </div>
    <!-- ht-team-member End -->
    <div class="col-12">
      <h5 class="white mt-3 font-weight--light mb-15 wow move-up">
        Ex Directores
      </h5>
    </div>
    <div
      class="ht-team-member col-12 col-md-3 col-lg-2 mb-4 wow move-up"
      v-for="(item, i) in pastTeam"
      :key="i"
    >
      <TeamMember
        :name="item.name"
        :position="item.position"
        :country="item.country"
      />
    </div>
  </div>
</template>

<script>
import TeamMember from "@/components/TeamMember";
export default {
  name: "TeamTwo",
  components: {
    TeamMember,
  },
  data() {
    return {
      team: [
        {
          boardPosition: "Presidente",
          name: "Cindy M. Kiel",
          position:
            "Excecutive Associate Vice Chancellor of Research Administration",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Vice-Presidente",
          name: "Joanna Regulska",
          position: "Vice Provost and Dean of Global Affairs",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Secretaria",
          name: "Kristen C. Stevenson",
          position: "Associate Campus Counsel",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "William Tucker",
          position:
            "Associate Vice Chancellor for Innovation and Technology Commercialization",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Prasant Mohapatra",
          position: "Vice Chancellor for Research",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Ermias Kebreab",
          position:
            "Associate Vice Provost of Academic Programs in Global Affairs",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Michael Lazzara",
          position: "Associate Vice Provost of Academic Programs.",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Paul Dodd",
          position:
            "Associate Vice Chancellor for Interdisciplinary Research and Strategic Initiatives, UC Davis",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Pedro Bustos",
          position:
            "Director Nacional del Instituto de Investigaciones Agropecuarias (INIA), en representación del Ministerio de Agricultura",
          img: "empty.jpg",
          country: "CL",
        },
        {
          boardPosition: "Director",
          name: "Pablo Villalobos",
          position:
            "Vicerrector de Innovación y Transferencia Tecnológica, Universidad de Talca",
          img: "empty.jpg",
          country: "CL",
        },
        {
          boardPosition: "Director",
          name: "Eugenio Doussoulin",
          position:
            "Director de Asuntos Internacionales (s), Universidad de Tarapacá",
          img: "empty.jpg",
          country: "CL",
        },
        {
          boardPosition: "Director",
          name: "Ariel Orellana",
          position:
            "Vicerrector de Investigación y Doctorado, Universidad Andrés Bello",
          img: "empty.jpg",
          country: "CL",
        },
      ],
      pastTeam: [
        {
          name: "Cameron Carter",
          position: "Presidential Chair in Neuroscience",
          img: "empty.jpg",
          country: "US",
        },
        {
          name: "James Hill",
          position:
            "Associate Dean for International Programs in the College of Agricultural and Environmental Sciences",
          img: "empty.jpg",
          country: "US",
        },
        {
          name: "Dushyant Pathak",
          position:
            "Former Associate Vice Chancellor of Technology Management and Corporate Relations",
          img: "empty.jpg",
          country: "US",
        },
        {
          name: "Harris Lewin",
          position: "Former Vice Chancellor for Research",
          img: "empty.jpg",
          country: "US",
        },
        {
          name: "Lovell “Tu” Jarvis",
          position: "Professor Emeritus, Agricultural and Resource Economics",
          img: "empty.jpg",
          country: "US",
        },
        {
          name: "Gonzalo Herrera",
          position:
            "Ex Vicerrector de Innovación, representante Universidad de Talca 2015-2017",
          img: "empty.jpg",
          country: "CL",
        },
        {
          name: "Julio Kalazich",
          position: "Director de INIA 2014-2018",
          img: "empty.jpg",
          country: "CL",
        },
      ],
    };
  },
};
</script>
