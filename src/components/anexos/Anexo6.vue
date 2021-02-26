<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>55 Proyectos </strong> de I+D, transferencia, extensión
      tecnológica realizados:
    </div>
    <div class="row">
      <div v-for="phase in projects" :key="phase.name" class="col-12 col-md-6">
        <h3 class="gold text-uppercase mb-4 title-unit">
          {{ phase.name }}
        </h3>
        <div class="project" v-for="project in phase.list" :key="project.id">
          <h4 class="blue">{{ project.name }}</h4>
          <p><strong>Focus:</strong> {{ project.focus }}</p>
          <p><strong>Área:</strong> {{ project.area }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anexo6",
  data: () => ({
    projects: [
      {
        name: "Phase 1",
        list: [
          {
            id: "1",
            focus: "R&D",
            area: "Agriculture",
            name: "Broomrape Characterization",
          },
          {
            id: "2",
            focus: "R&D",
            area: "Bioproducts",
            name: "Araucaria Foliar Damage, Microbiome and Environment Effects",
          },
          {
            id: "3",
            focus: "R&D",
            area: "Bioproducts",
            name: "Biodiscovery in Arica y Parinacota for Agriculture",
          },
          {
            id: "4",
            focus: "R&D",
            area: "Bioproducts",
            name: "Plant Pathogen, Strategies of Mitigation",
          },
          {
            id: "5",
            focus: "R&D",
            area: "Enology",
            name: "Quality markers in Grapevine",
          },
          {
            id: "6",
            focus: "R&D",
            area: "Enology",
            name: "Rootstocks for Grapevine",
          },
          {
            id: "7",
            focus: "R&D",
            area: "Enology",
            name: "Tanins and Anthocianins Models",
          },
          {
            id: "8",
            focus: "R&D",
            area: "Genetics and Genomics",
            name: "Genetic identification of clones",
          },
          {
            id: "9",
            focus: "R&D",
            area: "Genetics and Genomics",
            name: "Plant Pathogen Detection, molecular Diagnostic",
          },
          {
            id: "10",
            focus: "R&D",
            area: "Water",
            name: "Surface Renewal Application",
          },
          {
            id: "11",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "HUB APTA (Chilean TT Platform)",
          },
          {
            id: "12",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "HUB TEC (Chilean TT Platform)",
          },
          {
            id: "13",
            focus: "I&E",
            area: "Water",
            name: "Irrigation Extension in BioBío",
          },
          {
            id: "14",
            focus: "I&E",
            area: "Extension",
            name: "Maule Food Trademark Development",
          },
          {
            id: "15",
            focus: "I&E",
            area: "Agriculture",
            name: "Technological Roadmap for support systems",
          },
          {
            id: "16",
            focus: "I&E",
            area: "Enology",
            name: "Wine Extension Center in Ñuble",
          },
        ],
      },
      {
        name: "Phase 2",
        list: [
          {
            id: "17",
            focus: "R&D",
            area: "Agriculture",
            name: "Broomrape Control",
          },
          {
            id: "18",
            focus: "R&D",
            area: "Bioproducts",
            name: "Microbiome Characterization Vitaterra",
          },
          {
            id: "19",
            focus: "R&D",
            area: "Bioproducts",
            name: "Bioproducts Development Vitaterra",
          },
          {
            id: "20",
            focus: "R&D",
            area: "Bioproducts",
            name: "BioProducts Platform in Arica",
          },
          {
            id: "21",
            focus: "R&D",
            area: "Bioproducts",
            name: "Cal Austral Shells Waste Characterization",
          },
          {
            id: "22",
            focus: "R&D",
            area: "Enology",
            name: "GRN Roostock evaluation",
          },
          {
            id: "23",
            focus: "R&D",
            area: "Enology",
            name: "Stuck Fermentation Hazzard Prediction",
          },
          {
            id: "24",
            focus: "R&D",
            area: "Enology",
            name: "Wine Quality Prediction Model",
          },
          {
            id: "25",
            focus: "R&D",
            area: "G&G",
            name: "Clonal Identification of Grapevine",
          },
          {
            id: "26",
            focus: "R&D",
            area: "G&G",
            name: "Foliar Damage Araucaria",
          },
          {
            id: "27",
            focus: "R&D",
            area: "G&G",
            name: "Trunk Disease Control by Endophite",
          },
          {
            id: "28",
            focus: "R&D",
            area: "G&G",
            name: "Trunk Disease Diagnostic Kit",
          },
          {
            id: "29",
            focus: "R&D",
            area: "Water",
            name: "Surface Renewal",
          },
          {
            id: "30",
            focus: "I&E",
            area: "Agriculture",
            name: "Remote Quality Model",
          },
          {
            id: "31",
            focus: "I&E",
            area: "Bioproducts",
            name: "Bioproducts Facility Development Vitaterra",
          },
          {
            id: "32",
            focus: "I&E",
            area: "Bioproducts",
            name: "Biotech Translation Center Sofofa",
          },
          {
            id: "33",
            focus: "I&E",
            area: "Enology",
            name: "Grapevine Variety Catalog",
          },
          {
            id: "34",
            focus: "I&E",
            area: "Agriculture",
            name: "Extensionism Training PER",
          },
          {
            id: "35",
            focus: "I&E",
            area: "Agriculture",
            name: "Fruit Industry Extension Program",
          },
          {
            id: "36",
            focus: "I&E",
            area: "Agriculture",
            name: "Support Systems Extension Program Design",
          },
          {
            id: "37",
            focus: "I&E",
            area: "Agriculture",
            name: "Support Systems RoadTrip",
          },
          {
            id: "38",
            focus: "I&E",
            area: "Enology",
            name: "CEVS (Extension Center)",
          },
          {
            id: "39",
            focus: "I&E",
            area: "Enology",
            name: "Vitiviniculture Extension in Araucanía",
          },
          {
            id: "40",
            focus: "I&E",
            area: "Environment",
            name: "Chile Lagos Limpios Initiative",
          },
          {
            id: "41",
            focus: "I&E",
            area: "Extension",
            name: "R+D+i Model for ESPOL (Ecuador)",
          },
          {
            id: "42",
            focus: "I&E",
            area: "Extension",
            name: "Telemedicine",
          },
          {
            id: "43",
            focus: "I&E",
            area: "Food",
            name: "Circular Economy Study for Agro-food Sector",
          },
          {
            id: "44",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "HUB OEA (Seminar and Courses)",
          },
          {
            id: "45",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "IP Study on Stemcells exosome",
          },
          {
            id: "46",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "Fondecyt Peru",
          },
          {
            id: "47",
            focus: "I&E",
            area: "Water",
            name: "Aquifer Recharge Management Copiapo",
          },
          {
            id: "48",
            focus: "I&E",
            area: "Water",
            name: "CIMHi Aconcagua",
          },
          {
            id: "49",
            focus: "I&E",
            area: "Water",
            name: "Groundwater Reload (CSIRO)",
          },
          {
            id: "50",
            focus: "I&E",
            area: "Water",
            name: "Prototype for Aquifer Recharge in Copiapo",
          },
          {
            id: "51",
            focus: "I&E",
            area: "Agriculture",
            name: "European Prunes Extension Program",
          },
          {
            id: "52",
            focus: "R&D",
            area: "Agriculture",
            name: "Dr. Aminoup Trials on Potato",
          },
          {
            id: "53",
            focus: "R&D",
            area: "Bioproducts",
            name: "Trichoderma Biocontrol in Mushrooms",
          },
          {
            id: "54",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "Monilinia Protection",
          },
          {
            id: "55",
            focus: "I&E",
            area: "IP & Tech Transfer",
            name: "Vitaterra Plus Protection",
          },
        ],
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
.project {
  border-left: solid 3px var(--warning);
  padding-left: 20px;
  margin-bottom: 30px;
  p {
    margin-bottom: 0;
  }
  h4 {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>