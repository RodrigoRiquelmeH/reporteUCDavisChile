<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>8 Publicaciones</strong> científicas indexadas:
    </div>
    <div v-for="publication in publications" :key="publication.id">
      <div class="ht-service-box--three mb-4">
        <div class="service-box-wrap">
          <p class="mb-0">{{ publication.authors }}</p>
          <h3 class="blue mt-1 mb-3">
            <a :href="publication.link" target="_blank">
              <strong>{{ publication.title }}</strong> {{ publication.other }}
            </a>
          </h3>
          <a :href="publication.link" target="_blank" class="link">
            <i class="fa fa-chevron-right gold pr-1"></i> {{ publication.link }}
          </a>
          <a :href="publication.link" target="_blank" v-if="publication.link2">
            <i class="fa fa-chevron-right gold pr-1"></i>
            {{ publication.link2 }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anexo3",
  data: () => ({
    publications: [
      {
        id: "publication-1",
        authors:
          "German F. Sepúlveda Chavera, Mabel Arismendi Macuer, Patricio Muñoz Torres",
        title:
          "Endospore-forming bacteria present in a commercial stabilized poultry manure determines the Fusarium biocontrol and the tomato growth promotion.",
        other: "Agronomy",
        link: "https://www.mdpi.com/2073-4395/10/11/1636",
      },
      {
        id: "publication-2",
        authors:
          "Simirgiotis M, Burton D, Parra F, López J, Muñoz P, Escobar H, Parra C",
        title:
          "A comprehensive characterization of the essential oil of Origanum vulgare L. from the Chilean Arid Andean region using gas chromatography-mass spectrometry (GC-MS). ",
        other: "Metabolites",
        link: "https://doi.org/10.3390/metabo10100414",
        link2: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7602849/",
      },
      {
        id: "publication-3",
        authors:
          "Mauricio A. Lolas, Álvaro Castro, Rubén Polanco, Felipe Gainza-Cortés, Enrique Ferrada, Mark R. Sosnowski, and Gonzalo A. Díaz.",
        title:
          "First Report of Eutypa lata Causing Dieback of Grapevines (Vitis vinifera) in Chile.",
        other: "Disease Notes",
        link: "https://apsjournals.apsnet.org/doi/10.1094/PDIS-12-19-2531-PDN",
      },
      {
        id: "publication-4",
        authors:
          "Andrea Minio, Mélanie Massonnet, Rosa Figueroa-Balderas, Álvaro Castro, Darío Cantu. ",
        title: "Diploid Genome Assembly of the Wine Grape Carménère.",
        other: "G3",
        link: "https://www.g3journal.org/content/9/5/1331.abstract",
      },
      {
        id: "publication-5",
        authors:
          "Patricio A. Muñoz, Mabel J. Arismendi, Steffany F. Cárdenas, Denise E. Cifuentes Bachmann, Francisca A. Venegas, and Germán F. Sepúlveda-Chavera. ",
        title:
          "Diversity of culturable bacteria isolated from ancestral crops of Arica and Parinacota Region, Atacama Desert",
        other: "Antonie van Leeuwenhoek",
        link: "https://link.springer.com/article/10.1007/s10482-020-01482-7",
      },
      {
        id: "publication-6",
        authors:
          "Isidora Silva-Valderrama, Diana Toapanta, María de los Ángeles Miccono, Gonzalo Díaz, Mauricio Lolas, Darío Cantu, Álvaro Castro. ",
        title:
          "Biocontrol potential of grapevine endophytes against grapevine trunk pathogens. ",
        other: "bioRxiv",
        link:
          "https://www.biorxiv.org/content/10.1101/2020.09.28.312223v1.abstract",
      },
      {
        id: "publication-7",
        authors:
          "Sebastián Márquez, Francisca Venegas, Gabriela Jiménez, Guus Teunisse, Freddy Boehmwald, Pablo Zamora, Álvaro Castro, Jaime Alarcón, Eduardo Castro-Nallar.",
        title:
          "Genomic and metagenomic exploration of microbial endophytes and a new potential Phytophthora species in the monkey puzzle tree Araucaria araucana in Chile.",
        other: "Gen. Tech. Rep. PSW-GTR-268",
        link: "https://www.fs.fed.us/psw/pubs/60504",
      },
      {
        id: "publication-8",
        authors:
          "Humberto Prieto, María Miccono, Carlos Aguirre, Evelyn Sánchez, Álvaro Castro. ",
        title: "Grape Biotechnology: Past, Present, and Future. Springer, Cham",
        other: "Capítulo de libro",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-18601-2_16",
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
.ht-service-box--three {
  .service-box-wrap {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    h3 {
      font-size: 20px;
      margin: 10px 0;
    }
    a.link {
      display: block;
      font-size: 14px;
    }
  }
}
</style>