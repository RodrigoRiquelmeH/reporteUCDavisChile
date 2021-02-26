<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>30 Artículos </strong> de difusión técnica publicados en revistas
      especializadas del sector agroalimentario nacional:
    </div>
    <div class="row">
      <div
        v-for="article in articles"
        :key="article.id"
        class="col-12 col-md-4 mb-4 mb-md-5"
      >
        <div class="article">
          <a :href="article.link" target="_blank">
            <h3>
              {{ article.title }}
            </h3>

            <div class="link">
              <i class="fa fa-chevron-right gold"></i>
              {{ article.media }}
            </div>
          </a>
          <div class="date">
            <i class="fal fa-calendar pr-1"></i> {{ article.date }}
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "Anexo5",
  data: () => ({
    articles: [
      {
        id: "2001",
        date: "8/1/2020",
        title: "Fértil en microorganismos ",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/129/56/",
      },
      {
        id: "2002",
        date: "01-08-2020",
        title: "La nueva lógica",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/129/10/",
      },
      {
        id: "2003",
        date: "07-06-2020",
        title: "Eutypa lata y su primer hallazgo en vides chilenas ",
        media: "Revista Red Agrícola",
        link:
          "https://www.redagricola.com/cl/eutypa-lata-y-su-primer-hallazgo-en-vides-chilenas/#:~:text=Investigadores%20de%20la%20Universidad%20de,en%20casi%20todo%20el%20mundo.",
      },
      {
        id: "2004",
        date: "01/06/2020",
        title: "Chile puede sacar lecciones de la experiencia de California",
        media: "El Mercurio",
        link:
          "https://chile.ucdavis.edu/es/aparicion-en-prensa/chile-puede-sacar-lecciones-de-la-experiencia-de-california-en-materia-de",
      },
      {
        id: "2005",
        date: "29/05/2020",
        title: "El problema de la crisis, una oportunidad de cambio",
        media: "Revista Mundo Agro digital",
        link:
          "https://www.mundoagro.cl/el-problema-de-la-crisis-hidrica-una-gran-oportunidad-de-cambio/",
      },
      {
        id: "2006",
        date: "01/04/2020",
        title: "Información Fluida",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/125/24/",
      },
      {
        id: "2007",
        date: "01/01/2020",
        title: "Preparación versus reacción",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/122/62/",
      },
      {
        id: "2008",
        date: "01/12/2019",
        title: "La rueda del conocimiento",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/121/68/",
      },
      {
        id: "2009",
        date: "01/07/2019",
        title: "Hongos para controlar hongos",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/115/22/",
      },
      {
        id: "2010",
        date: "01/07/2019",
        title: "Con calidad objetiva",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/116/50/",
      },
      {
        id: "2011",
        date: "01/07/2019",
        title: "Cambio climático y objetivo",
        media: "Revista Mundo Agro",
        link: "Revista Mundo Agro",
      },
      {
        id: "2012",
        date: "01/07/2019",
        title: "Ecosistema del conocimiento",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/116/66/",
      },
      {
        id: "2013",
        date: "01/08/2019",
        title: "Una esperanza para el tomate",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/117/76/",
      },
      {
        id: "2014",
        date: "01/09/2019",
        title: "Intercambio de experiencias",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/118/76/",
      },
      {
        id: "2015",
        date: "01/10/2019",
        title: "Extensión al estilo californiano",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/revistas/119/52/",
      },
      {
        id: "2016",
        date: "12/04/2018",
        title: "Ayuda desde un mundo invisible",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/ayuda-desde-un-mundo-invisible/",
      },
      {
        id: "2017",
        date: "31/05/2018",
        title: "El largo camino al campo",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/el-largo-camino-al-campo/",
      },
      {
        id: "2018",
        date: "20/06/2018",
        title: "Hongos de buena madera",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/hongos-de-buena-madera/",
      },
      {
        id: "2019",
        date: "11/07/2018",
        title: "Con una buena base",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/con-una-buena-base/",
      },
      {
        id: "2020",
        date: "16/08/2018",
        title: "Bioinsumos del desierto",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/bioinsumos-del-desierto/",
      },
      {
        id: "2021",
        date: "27/08/2018",
        title: "Voces Cumbre",
        media: "Revista Mundo Agro",
        link: "https://www.mundoagro.cl/voces-cumbres/",
      },
      {
        id: "2022",
        date: "01/01/2017",
        title: "La industria frente al espejo",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/la-industria-frente-al-espejo/",
      },
      {
        id: "2023",
        date: "01/02/2017",
        title: "Agua que vale oro",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/agua-que-vale-oro/",
      },
      {
        id: "2024",
        date: "01/03/2017",
        title: "Análisis total",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/analisis-total/",
      },
      {
        id: "2025",
        date: "01/07/2017",
        title: "Dosis Correctas",
        media: "Revista Mundo Agro",
        link:
          "http://www.mundoagro.cl/cual-es-la-dosis-correcta-para-los-agroquimicos/",
      },
      {
        id: "2026",
        date: "02/08/2016",
        title: "Siembra de futuro",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/mas-conocimiento-mayor-especializacion/",
      },
      {
        id: "2027",
        date: "21/10/2016",
        title: "Un puente distinto",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/un-puente-distinto/",
      },
      {
        id: "2028",
        date: "30/11/2016",
        title: "El lado verde del futuro",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/el-lado-verde-del-futuro-2/",
      },
      {
        id: "2029",
        date: "01/12/2016",
        title:
          "UC Davis Chile: Definición de prioridades para adaptarse al cambio climático en la agricultura",
        media: "Revista Red Agrícola",
        link:
          "http://agtech.cl/definicion-de-prioridades-para-adaptarse-al-cambio-climatico-en-la-agricultura/",
      },
      {
        id: "2030",
        date: "07/07/1905",
        title: "Bioinsumos: el camino de la sinergia",
        media: "Revista Mundo Agro",
        link: "http://www.mundoagro.cl/revistas/numero-73-diciembre-2015/",
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
.article {
  // padding: 37px 30px 37px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 40px 5px rgba(51, 51, 51, 0.1);
  background: #fff;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: $blue;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 0;
  }
  a {
    padding: 30px 30px 10px 30px;
    .link {
      display: flex;
      align-items: baseline;
      i {
        font-size: 14px;
        padding-right: 8px;
      }
    }
    &:hover {
      h3 {
        color: var(--warning);
      }
    }
  }
  .date {
    border-top: solid thin #eee;
    margin-top: 20px;
    text-align: right;
    color: #777;
    font-size: 14px;
    padding: 15px 20px;
    align-self: bottom;
  }
}
</style>