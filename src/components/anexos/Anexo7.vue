<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>93 Eventos de difusión </strong> para presentar resultados del
      Centro y hacer disponible el conocimiento avanzado de California en
      múltiples temáticas de interés para el sector productivo, académico y
      público:
    </div>
    <div class="row">
      <div v-for="event in events" :key="event.year" class="col-12">
        <ul class="timeline timeline-centered">
          <li class="timeline-item period">
            <div class="timeline-info"></div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h2 class="timeline-title gold">{{ event.year }}</h2>
            </div>
          </li>

          <li v-for="item in event.list" :key="item.id" class="timeline-item">
            <div class="timeline-info">
              <span>{{ item.datePlace }}</span>
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anexo7",
  data: () => ({
    events: [
      {
        year: "2015",
        list: [
          {
            id: "1",
            title:
              "Innova BioBio/UDD Tech Transfer Workshop. Charla del Dr. Pablo Zamora, Director Científico UC Davis Chile: Translational Research & Public-Private Partnerships.",
            datePlace: "CONCEPCIÓN, 6 DE FEBRERO", //Esto puede ser solo la fecha o fecha y lugar.
          },
          {
            id: "2",
            title:
              "Inauguración oficial UC Davis Chile (Salón O'Higgins - Ministerio de Relaciones Exteriores). Esta actividad contó con la participación de la Presidenta de la República, Michelle Bachelet; el Vicepresidente Ejecutivo de Corfo, Eduardo Bitran y la Rectora de la Universidad de California – Davis, Dra. Linda Katehi.",
            datePlace: "SANTIAGO, 21 DE ABRIL",
          },
          {
            id: "3",
            title:
              "Workshop: “Herramientas genómicas para la viticultura”, Dr. Darío Cantu, Investigador UC Davis. Auditorium Centro de Investigación e Innovación de Concha y Toro.",
            datePlace: "PENCAHUE, 3 DE JULIO",
          },
          {
            id: "4",
            title:
              "Workshop: “Gestión de Propiedad Intelectual e Innovación”, Dra. Mónica Alandete, PIPRA, UC Davis. Auditorium Centro de Investigación e Innovación de Concha y Toro.",
            datePlace: "PENCAHUE, 18 DE AGOSTO",
          },
          {
            id: "5",
            title:
              'Charla magistral del Director Científico de UC Davis Chile, Dr. Pablo Zamora: "El uso de microbiomas para aplicaciones en agricultura" en evento de Lanzamiento Programa AgTech de RedAgrícola.',
            datePlace: "SANTIAGO, 11 DE DICIEMBRE",
          },
          {
            id: "6",
            title:
              "Participación del Dr. Alan Bennett, Director Ejecutivo de UC Davis Chile, como expositor principal en el 2º Seminario de SaaS Generation, con la ponencia “Big Data in Agricultural Research”.",
            datePlace: "SANTIAGO, 14 DE DICIEMBRE",
          },
        ],
      },
      {
        year: "2016",
        list: [
          {
            id: "8",
            title:
              "Charla Magistral en riego: “Towards next generation decision support for irrigation management” por los Investigadores de UC Davis, Dr. Rick Snyder y Dr. Daniele Zaccaría.",
            datePlace: "SANTIAGO Y TALCA, 8-9 DEMARZO",
          },
          {
            id: "9",
            title:
              "3ª Conferencia RedAgrícola Chile: Charlas magistrales del Dr. Pablo Zamora, Director Científico de UC Davis Chile, “Consorcios microbianos, un nuevo actor en el desarrollo de la agricultura” y Dr. Freddy Boehmwald, Especialista UC Davis Chile: “Desarrollo y empaquetamiento de nuevos bioproductos: caracterización, formulación y escalamiento de microorganismos y macromoléculas”.",
            datePlace: "SANTIAGO, 1-2 DE JUNIO",
          },
          {
            id: "10",
            title:
              "Conferencia RedAgrícola Perú, Dos científicos de UC Davis Chile participaron como expertos invitados.",
            datePlace: "PIURA (PERÚ), 22 Y 23 DE JUNIO",
          },
          {
            id: "11",
            title:
              "Charla en Agro Planttrade : “Impactando la agricultura de precisión: Herramientas metagenómicas para el diseño de bioproductos”, Dr. Pablo Zamora, Director Científico de UC Davis Chile.",
            datePlace: "SANTIAGO, 5 DE OCTUBRE",
          },
          {
            id: "12",
            title:
              "Colaboración de dos investigadores de UC Davis en el X Congreso Iberoamericano de Sensores, organizado por Universidad Federico Santa María.",
            datePlace: "VALPARAÍSO, 26 DE OCTUBRE",
          },
          {
            id: "13",
            title:
              "Seminario “Leading Technologies for Water Management” organizan CRHIAM/Universidad de Concepción/UC Davis Chile. Participan desde UC Davis: Dr. Jan Hopmans, Dr. Rick Snyder, Dr. Daniele Zaccaria.",
            datePlace: "CONCEPCIÓN, 24-26 OCTUBRE",
          },
          {
            id: "14",
            title:
              'Participación del Dr. Dusyhant Pathak, Associate Vice Chancellor of Technology Management and Corporate Relations de UC Davis, como expositor destacado en el 4to encuentro "Chile: ciencia, tecnología y empresa", organizado por Corfo.',
            datePlace: "SANTIAGO, 26 OCTUBRE",
          },
          {
            id: "15",
            title:
              "Taller de Riego: “Surface Renewal: un método micro-meteorológico avanzado para medir evapotranspiración a nivel predial”. Actividad coorganizada por UC Davis Chile y CRHIAM. Taller dictado por los Investigadores de UC Davis: Dr. Rick Snyder y Dr. Daniele Zaccaría.",
            datePlace: "CHILLÁN, 27-28 OCTUBRE",
          },
          {
            id: "16",
            title:
              "Seminario Internacional “Climate Smart Agro: Ciencia y Tecnologia para la Adaptacion Agroclimática”. Esta iniciativa fue coorganizada UC Davis Chile, Centro de Cambio Global de la PUC, INIA y Agrimed de la Universidad de Chile.",
            datePlace: "SANTIAGO, 17 NOVIEMBRE ",
          },
          {
            id: "17",
            title:
              "First Symposium on Food Safety organizado por Universidad Andrés Bello con apoyo de la OCDE. Charla magistral de la Dra. Woutrina Smith, Investigadora de UC Davis, experta en métodos de detección de patógenos en agua.",
            datePlace: "SANTIAG, 5-7 DE DICIEMBRE",
          },
          {
            id: "18",
            title:
              "Dr. Bruce German y Dr. Moshe Rosenberg, del Departamento de Food Science and Technology de UC Davis, participaron como expertos internacionales en el Seminario “Leche y Salud Humana”, actividad conjunta UC Davis Chile - Consorcio Lechero.",
            datePlace: "SANTIAGO, 13 DE DICIEMBRE",
          },
          {
            id: "19",
            title:
              "Dr. Eduardo Silva, del Departamento de Biomedical Engineering de UC Davis, participó en la “NanoConference 2016: Biomedicine, Mining & Energy” -conferencia internacional organizada por CORFO y la Universidad Andrés Bello. Charla magistral: “Engineering new vascular network with biomaterials”.",
            datePlace: "SANTIAGO, 14 Y 15 DE DICIEMBRE",
          },
        ],
      },
      {
        year: "2017",
        list: [
          {
            id: "20",
            title:
              'Dr. Pablo Zamora, Director Científico, expone sobre “UC Davis Chile y su propuesta de valor” a la delegación del curso de educación en liderazgo "Kansas Agricultural and Rural Leadership" KARL PROGRAM de la Kansas State University (Estados Unidos).',
            datePlace: "SANTIAGO, 9 DE MARZO",
          },
          {
            id: "21",
            title:
              "Dr. Graham Fogg, del Center for Watershed Sciences de UC Davis, dictó la conferencia la “Sustainable Groundwater Management”.",
            datePlace: "SANTIAGO, 30 DE MARZO",
          },
          {
            id: "22",
            title:
              "Dr. Pablo Zamora, Director Científico; Dr. Álvaro Castro, Head of Research; Dr. Mark Battany, Extensionista especialista en viticultura del Sistema de Extensionismo de California; y Dr. Rodrigo Gallardo, profesor de la Escuela de Medicina Veterinaria de UC Davis, participaron con ponencias en la Feria Internacional de Tecnologías Agrícolas, IFT-Agro 2017.",
            datePlace: "TALCA, 6 Y 7 DE ABRIL",
          },
          {
            id: "23",
            title:
              "Dr. Cleveland Justis, Director del Instituto de Innovación de UC Davis, ofreció la conferencia “Science and Business for Social Benefit”, que tuvo como audiencias a ejecutivos de Corfo, profesionales de las Oficinas de Transferencia Tecnológica de universidades nacionales y estudiantes de pre y posgrado en Economía y Negocios.",
            datePlace: "TALCA Y SANTIAGO, 17-18 DE MAYO",
          },
          {
            id: "24",
            title:
              "Dr. Freddy Boehmwald, Coordinador de Desarrollo de Bioproductos de UC Davis Chile, encabezó equipo de experto que realizó Curso de Bioinformática en la Facultad de Ciencias Agronómicas de la Universidad de Tarapacá.",
            datePlace: "ARICA, 23 DE MAYO",
          },
          {
            id: "25",
            title:
              "Dr. Pablo Zamora, Director Científico de UC Davis Chile, expone en Expo Creo en Chile, feria de innovación y emprendimiento.",
            datePlace: "SANTIAGO, 15 DE JUNIO",
          },
          {
            id: "26",
            title:
              "Dr. Carlos Flores, Coordinador de Agronomía y Medio Ambiente de UC Davis Chile, “Adaptación al cambio climático y los recursos hídricos. Experiencia comparadas entre Chile y California”.",
            datePlace: "SANTIAGO, 29 DE JUNIO",
          },
          {
            id: "27",
            title:
              "Pablo Zamora, Director Asociado, dictó la charla “Innovation in Food: From research to innovative market products”, Pontificia Universidad Católica do Rio Grande do Sul, Brasil.",
            datePlace: "RIO GRANDE DO SUL (BRASIL), 16 DE AGOSTO",
          },
          {
            id: "28",
            title:
              "Seminario Climate Smart Agro Chile 2017. Dr. Jim Farrar, Director del Programa Estatal de Manejo Integrado de Plagas de División de Agricultura y Recursos Naturales de la U. de California; Dr. Alan Bennett, Director Ejecutivo de UC Davis Chile; y Dr. Carlos Flores, Coordinador de Agronomía y Medio Ambiente, UC Davis Chile.",
            datePlace: "TALCA Y SANTIAGO, 29-31 DE AGOSTO",
          },
          {
            id: "29",
            title:
              "Dr. Otis Littlefield, de Morrison Foerster (MOFO), una de las firmas de abogados más importantes en Propiedad Intelectual (PI) en Estados Unidos, ofreció charla “Buenas prácticas en patentamiento para la comercialización de tecnologías”. Actividad coorganizada con la Gerencia de Capacidades Tecnológicas de Corfo.",
            datePlace: "SANTIAGO, 4 DE SEPTIEMBRE",
          },
          {
            id: "30",
            title:
              "Conferencia del Dr. Freddy Boehmwald, Coordinador de Desarrollo de Bioproductos, en International Food Safety Conference (IFSC).",
            datePlace: "SANTIAGO, 6 DE SEPTIEMBRE",
          },
          {
            id: "31",
            title:
              "Camille Kirke, Directora de Sustentabilidad de UC Davis, lideró el diálogo “Integrated Water Governance”, organizado con la American Academy el 5 de septiembre, en la U. de Talca, campus Santiago, y el Tercer Encuentro Internacional Red Campus Sustentable (RCS), titulado “Sustentabilidad y Territorio”.",
            datePlace: "TALCA, 6 DE SEPTIEMBRE",
          },
          {
            id: "32",
            title:
              'Darío Cantu, profesor asistente del Department of Viticulture and Enology de UC Davis e investigador asociado a UC Davis Chile, ofreció el seminario “Leveraging plant and microbial genomics to study plant diseases in the field". Actividad coorganizada con Universidad Andrés Bello.',
            datePlace: "SANTIAGO, 7 DE SEPTIEMBRE",
          },
          {
            id: "33",
            title:
              "Alan Bennett, Director Ejecutivo UC Davis Chile, en seminario “Propiedad Intelectual e Innovación en Agricultura y Sistemas Alimentarios”, organizado por la Misión Permanente de Chile ante la Organización Mundial de Propiedad Intelectual.",
            datePlace: "GINEBRA (SUIZA), 21 DE SEPTIEMBRE, ",
          },
          {
            id: "34",
            title:
              "Taller sobre Monitoreo de Calidad de Agua dictado por el Dr. Carlos Flores, Coordinador de Agronomía y Medioambiente de UC Davis Chile.",
            datePlace: "26 DE SEPTIEMBRE, QUILLOTA",
          },
          {
            id: "35",
            title:
              "Pablo Zamora, Director Asociado UC Davis Chile, “The Innovation and Disruption Congress”, TIDCo. Actividad organizada por la Escuela Superior Politécnica del Litoral (ESPOL) Guayaquil.",
            datePlace: "GUAYAQUIL (ECUADOR), 5 DE OCTUBRE",
          },
          {
            id: "36",
            title:
              "Conferencia experta del Dr. Álvaro Castro, Head of Research de UC Davis Chile, en 6º Encuentro Ciencia, Tecnología y Empresa, organizado por Corfo.",
            datePlace: "SANTIAGO, 5 DE OCTUBRE",
          },
          {
            id: "37",
            title:
              "Presentación del Dr. Carlos Flores, Coordinador de Agronomía y Medioambiente de UC Davis Chile, en Conversatorio Hidrotec: “Soluciones tecnológicas para la gestión hídrica y adaptación al cambio climático”.",
            datePlace: "SANTIAGO, 7 DE NOVIEMBRE",
          },
          {
            id: "38",
            title:
              "Charlas y capacitaciones del Dr. Leobardo Serrano, experto en fermentaciones con hongos y en escalamiento de estos procesos de la Universidad Nacional Autónoma de México (UNAM).",
            datePlace: "SANTIAGO Y ARICA, 13-17 DE NOVIEMBRE ",
          },
          {
            id: "39",
            title:
              "Hanan Eizenberg y Yaakov Goldwasser (former UC Davis postdoc), expertos en malezas de la Organización israelí para la Investigación Agrícola (ARO), realizaron presentaciones sobre la “Experiencia israelita para el control de malezas”. Actividades realizadas en la Universidad de Talca y en el Ministerio de Agricultura (ODEPA).",
            datePlace: "TALCA Y SANTIAGO, 16- 21 DE NOVIEMBRE ",
          },
          {
            id: "40",
            title:
              "Dr. Carlos Flores, Coordinador de Agronomía y Medioambiente de UC Davis Chile, presenta en seminario “Una mirada del sistema de riego chileno” para un comité de 15 personas del California Department of Agriculture. Actividad coorganizada con el Ministerio de Agricultura.",
            datePlace:
              "SANTIAGO, 27 DE NOVIEMBRE, MINISTERIO DE AGRICULTURA (ODEPA)",
          },
          {
            id: "41",
            title:
              "Catalina Pavez y Claudio Pavez, Asistentes de Investigación de UC Davis Chile, realizan presentación en XII Reunión Anual de Biología Vegetal.",
            datePlace: "VILLARRICA, 4 AL 7 DE DICIEMBRE",
          },
          {
            id: "42",
            title:
              "Dr. Dushyant Pathak, Vicerrector de Transferencia Tecnológica y de Relaciones Corporativas de UC Davis, presenta “Translating innovative research into successful commercial impact” en seminario institucional organizado por la Universidad del Desarrollo.",
            datePlace: "SANTIAGO, 20 DE DICIEMBRE",
          },
          {
            id: "43",
            title:
              "Dr. Cameron Carter, Vicerrector de Investigación de UC Davis, presenta “Frontiers in Neuroscience” conferencia organizada para académicos, estudiantes de posgrado y médicos afiliados de la Universidad del Desarrollo.",
            datePlace: "SANTIAGO, 20 DE DICIEMBRE",
          },
        ],
      },
      {
        year: "2018",
        list: [
          {
            id: "47",
            title:
              "Dr. Paul Hastings, Profesor del Departamento de Psicología de UC Davis. Charla sobre “Procesos Biopsicosociales en el desarrollo prosocial” en actividad organizada por la Universidad del Desarrollo.",
            datePlace: "SANTIAGO, 11 DE ENERO",
          },
          {
            id: "48",
            title:
              "Dr. Jay Lund, Director de Center for Watershed Sciences de UC Davis, participa con la charla “Watershed management and riverine runoff in California”, en Seminario “Land Sea Interactions in a Changing World: Science and Policy to Foster Conservation of Coastal Environments Services in Chile and California”, organizado por Centro de Cambio Global de la PUC",
            datePlace: "SANTIAGO, 31 DE ENERO",
          },
          {
            // quede acá
            id: "49",
            title:
              "Dr. John Largier, Profesor del Departamento de Ciencias y Políticas Medioambientales y del Laboratorio Bodega de UC Davis, participa con la charla “The ocean needs water too”, en Seminario “Land Sea Interactions in a Changing World: Science and Policy to Foster Conservation of Coastal Environments Services in Chile and California”, organizado por Centro de Cambio Global de la PUC.",
            datePlace: "SANTIAGO, 31 DE ENERO",
          },
          {
            id: "50",
            title:
              'Dr. Martin Hilbert, Associate Professor Communication and Media, Social Policy and Sociocybernetics, UC Davis, dicta la charla: "Oportunidades y Desafíos de la Ciencia Social Computacional", en Expo Chile TEC.',
            datePlace: "SANTIAGO, 12 DE JUNIO",
          },
          {
            id: "51",
            title:
              "Dr. Álvaro Castro, Head of Sciences UC Davis, Chile, panelista de la conferencia “Nuevas técnicas de mejora de cultivos, CRISPR y el marco regulatorio”, actividad coorganizada por la American Academy of Science and Tecchnology, UC Davis Chile y UNAB.",
            datePlace: "SANTIAGO, 14 DE JULIO",
          },
          {
            id: "52",
            title:
              "Hub de Comercialización y Transferencia Tecnológica para las Américas, organizado por la OEA, UDD y UC Davis Chile",
            datePlace: "SANTIAGO, 27 AGOSTO AL 27 DE SEPTIEMBRE",
          },
          {
            id: "54",
            title:
              "Seminario “Descifrando el Viñedo Chileno: Genomas de referencia del viñedo chileno”, actividad realizada en el marco de la celebración del Día Nacional Del Vino. Organizan: UC Davis Chile en alianza con la Universidad Andrés Bello (UNAB) y las empresas Víña Concha y Toro y VSPT Wine Group. ",
            datePlace: "SANTIAGO, 4 DE SEPTIEMBRE",
          },
          {
            id: "55",
            title:
              "Primera Cumbre Internacional de Bioinsumos, coorganizada por UC Davis Chile y MundoAgro.",
            datePlace: "CASINO MONTICELLO, 5 DE SEPTIEMBRE.",
          },
          {
            id: "56",
            title:
              "III USM Tech Innovation Summit, evento organizado por la Universidad Santa María (USM). Presentación del Dr William Tucker, Director Ejecutivo de Innovation Access, UC Davis.",
            datePlace: "SANTIAGO, 20 DE NOVIEMBRE",
          },
        ],
      },
      {
        year: "2019",
        list: [
          {
            id: "57",
            title:
              "Curso “Herramientas de extensión agrícola para asesores frutícolas de la Región de Valparaíso”. Iniciativa del Programa Estratégico Regional Fruticultura Sustentable, financiado por Corfo y el Gobierno Regional de Valparaíso, y ejecutado por UC Davis Chile. Dictaron el curso: especialistas de Extensión Cooperativa de la Universidad de California (UCCE): Dr. Mark Bell y la Dra. Louise Ferguson.",
            datePlace: "QUILLOTA, 5 DE FEBRERO",
          },
          {
            id: "58",
            title:
              'Seminario de lanzamiento del proyecto Chile Lagos Limpios. Participan Dr. Geoffrey Schladow, Director fundador de Tahoe Environmental Research Center (TERC) de UC Davis; Devin Middlebrook, Director de Sustentabilidad de la Agencia de Planificación regional del Lago Tahoe; y Lovell "Tu" Jarvis, Director Ejecutivo UC Davis Chile.',
            datePlace: "PANGUIPULLI, 19 DE ENERO",
          },
          {
            id: "59",
            title:
              'Charla "Translating innovative research into successful commercial impact". Dr.  Dushyant Pathak, Vicerrector Asociado de Gestión Tecnológica y Relaciones Corporativas de UC Davis. Actividad coorganizada con la gerencia de Capacidades Tecnológicas de Corfo.',
            datePlace: "SANTIAGO, 11 DE MARZO",
          },
          {
            id: "60",
            title:
              "Taller Lineamientos para el desarrollo de la telemedicina y telesalud en Chile en contexto Bien Publico Corfo: Telemedicina UDD, UdeC y UC Davis Chile.",
            datePlace: "CONCEPCIÓN, 29 DE MARZO",
          },
          {
            id: "61",
            title:
              "Lanzamiento proyecto: “Central de Información y Modelamiento Hídrico (CIMHi)”, que ejecuta UC Davis Chile en la cuenca del río Aconcagua. Esta iniciativa fue impulsada por la Dirección de Agua (DGA) y cuenta con el financiamiento de Corfo.",
            datePlace: "SAN FELIPE, 23 DE MAYO",
          },
          {
            id: "62",
            title:
              "Taller Extensión Agroinchalam “Sistemas de conducción para uva de mesa”. Expositores: Martin Silva, Asesor Uva Mesa; Edwin Moore, especialista UC Davis Chile.",
            datePlace: "MONTE PATRIA (COQUIMBO), 18 DE JUNIO",
          },
          {
            id: "63",
            title:
              "Taller Extension Agroinchalam “Sistemas de conducción para uva de mesa - Agrícola San José Paine“. Expositores: Martin Silva, Asesor Uva Mesa; Edwin Moore, especialista UC Davis Chile.",
            datePlace: "PAINE, 27 DE JUNIO",
          },
          {
            id: "64",
            title:
              "Dra. Margarita Jiménez-Silva, Associate Professor & Director of Teacher Education de la Escuela de Educación de UC Davis, realiza talleres sobre “Manejo de clima en el aula en el contexto actual de la educación superior”.",
            datePlace: "SANTIAGO Y CONCEPCIÓN, 22 AL 26 DE JULIO ",
          },
          {
            id: "65",
            title:
              "Tercer taller presencial “Hacia los lineamientos para el desarrollo de la telemedicina y telesalud en Chile” en contexto del Bien Público Corfo: Telemedicina (UDD, UdeC y UC Davis Chile).",
            datePlace: "CONCEPCIÓN, 2 DE AGOSTO",
          },
          {
            id: "66",
            title:
              'Conferencia “Agricultura en un Mundo Cambiante”. Presentan: Lovell "Tu" Jarvis, Presidente Consejo Chile California y Director Ejecutivo de UC Davis Chile y Dr. Daniel Sumner, Director of the University of California Agricultural Issues Center; Dr. Benjamin Houlton, Director del Instituto del Medioambiente John Muir de UC Davis y el Dr. Sam Sandoval. Associate Professor, Department of Land, Air and Water Resources UC Davis. Actividad coorganizada por el Consejo Chile California UC Davis Chile, el centro de Cambio Global de la PUC y el Instituto de Investigaciones Agropecuarias (INIA).',
            datePlace: "SANTIAGO, 7 DE AGOSTO",
          },
          {
            id: "67",
            title:
              "12 Americas Competitiveness Exchange (ACE) organizado por OEA y UDD, y apoyado por UC Davis Chile y Corfo. Presentaciones de Camila Saavedra, Viticulture and Enology Specialist de UC Davis Chile y de Muricio Cañoles, General Manager, UC Davis Chile.",
            datePlace: "SANTIAGO, 6 AL 10 DE OCTUBRE",
          },
          {
            id: "68",
            title:
              "Workshop: “Oportunidades y desafíos de Chile en la gestión del riego en condiciones de restricción hídrica”. Allan Fulton, Extensionista en riego del CE California. Participan representantes de INIA, Pontificia Universidad Católica de Chile, Programa de Fruticultura Sustentable y Netafim Chile.",
            datePlace: "SANTIAGO, 22 DE NOVIEMBRE",
          },
          {
            id: "69",
            title:
              "Día de Campo con Chile Prunes y Allan Fulton (CE UC Davis). Se presenta el estado actual de las tecnologías de riego de ciruelo en Chile.",
            datePlace: "REGIÓN DE O'HIGGINS, 23 DE NOVIEMBRE",
          },
          {
            id: "70",
            title:
              "Taller Extensión UC Davis Chile – Agroinchalam: “Sistema de Conducción en Cerezos”. ",
            datePlace: "OSORNO, 22 NOVIEMBRE. PRESENTA MARLEN ARAYA, PUC",
          },
          {
            id: "71",
            title:
              "Taller Extensión UC Davis Chile – Agroinchalam: “Sistema de Conducción en Cerezos”.",
            datePlace: "ANGOL, 28 DE NOVIEMBRE",
          },
          {
            id: "72",
            title:
              "Congreso Internacional Telemedicina UDD – en contexto de las actividades del proyecto Bien Público Corfo: Telemedicina (UDD, UdeC y UC Davis Chile).",
            datePlace: "CONCEPCIÓN, 6 DE DICIEMBRE",
          },
        ],
      },
      {
        year: "2020",
        list: [
          {
            id: "74",
            title:
              "PMA Talks, participación como Expositoras: Olivia Valdés, Food Science Coordinator; y Leticia Rojas, Innovation and Extension Coordinator, UC Davis Chile.",
            datePlace: "WEBINAR, 17 DE JUNIO",
          },
          {
            id: "75",
            title:
              "ISSST Virtual Sessions. Participación como expositora Olivia Valdés, Food Science Coordinator, UC Davis Chile.",
            datePlace: "SEMINARIO ONLINE, 19 DE JUNIO",
          },
          {
            id: "76",
            title:
              "Webinar coorganizado por UC Davis Chile, Univiveros, Viveros de Chile AG, Vinos de Chile AG y la Asociación de Enologos: “Establecimiento de vides y avances en la prevención y manejo de las enfermedades de la madera”, participación como expositores el Dr. Andrew Walker y la Dra. Kendra Baumgartner, ambos UC Davis.",
            datePlace: "WEBINAR, 1 DE JULIO",
          },
          {
            id: "77",
            title:
              "“Establecimiento de vides y avances en la prevención y manejo de las enfermedades de la madera”, participación como expositor, Dr. Davis Gramaje, Instituto de Ciencias de la Vid y el Vino, La Rioja, España.",
            datePlace: "WEBINAR, 8 DE JULIO",
          },
          {
            id: "78",
            title:
              "Presentación Estudio Economía Circular, participación como expositora principal: Olivia Valdés, Food Science Coordinator, UC Davis Chile.",
            datePlace: "WEBINAR, 21 DE JULIO",
          },
          {
            id: "79",
            title:
              "Webinar: “Establecimiento de vides y avances en la prevención y manejo de las enfermedades de la madera“, participación como expositor del Dr. José Ramón Urbez-Torres de Agriculture and Agri-Food Canada Summerland Reseach and Development Centre in Summerland, British Columbia, Canadá.",
            datePlace: "WEBINAR, 24 DE JULIO",
          },
          {
            id: "80",
            title:
              "Encuentro AmCham Chile. Participación como expositora de Olivia Valdés, Food Science Coordinator de UC Davis Chile, sobre oportunidades de la Economía Circular para sector agroalimentario nacional.",
            datePlace: "WEBINAR, 1 DE AGOSTO",
          },
          {
            id: "81",
            title:
              '“La problemática de Orobanche en tomate industrial: experiencias de Israel y California", participan como expositores: Dr. Brad Hanson, Plant Sciences and Weed Science, UC Davis; Dra. Alejandra Acuña, Agronomy Coordinator de UC Davis Chile; Dr. Yaakov Goldwasser, investigador especialista en malezas del Volcani Center, Israel.',
            datePlace: "WEBINAR, 4 DE AGOSTO",
          },
          {
            id: "82",
            title:
              "“El investigador emprededor”, participa como expositora Patricia Anguita, Coordinadora de Propiedad Intelectual y Transferencia Tecnológica, UC Davis Chile.",
            datePlace: "WEBINAR, 5 DE AGOSTO",
          },
          {
            id: "83",
            title:
              "UC Davis Global Conversation Series, participación como expositores: Ángela Delorenzo, Fundación Chile Lagos Limpios; Olga Barbosa, Head of the Regional Ministerial Secretariat for Science, Technology, Knowledge and Innovation for the South Macro Zone (SEREMI); Dr. Geoff Schladow, Director of the Tahoe Environmental Research Center, UC Davis; Sebastián Vicuña, Director of the Center for Global Change; Lovell “Tu” Jarvis, Executive Director of the UC Davis Chile.",
            datePlace: "WEBINAR, 24 DE AGOSTO",
          },
          {
            id: "84",
            title:
              "“Información y modelación en cuencas hidrográficas, experiencia en California y el caso del Aconcagua, Chile”, participación como expositores: Samuel Sandoval, UC Davis; Mauricio Cañoles, UC Davis Chile; Rodrigo Riveros , Junta Vigilancia Aconcagua; Oscar Cristi, Director Nacional DGA; Juan Fernando Acuña, Director Regional Corfo Valparaíso.",
            datePlace: "WEBINAR, 24 AGOSTO",
          },
          {
            id: "85",
            title:
              "“Potencial productivo y rentabilidad en Ciruelo Europeo”, expositor, Gabino Reginato, académico Universidad de Chile; Cristián Valdés, asesor técnico de frutales. Sesión en vivo módulo I Ciruelo europeo. Programa de Extensión UC Davis Chile.",
            datePlace: "WEBINAR, 26 DE AGOSTO",
          },
          {
            id: "86",
            title:
              "“Soluciones para la pérdida y desperdicio de alimentos”, participan como expositores. Dr. Edward Spang, Assistant Professor, Food Science and Technology UC Davis; Mauricio Cañoles, UC Davis Chile; Cristian Muñoz, Hortofrutícola; Graciela Urrutia, Transforma Alimentos; Karin Albornoz, UdeC; Stefanie Pope, Walmart.",
            datePlace: "EXTENSION TALK, 27 DE AGOSTO",
          },
          {
            id: "87",
            title:
              "“Manejo del oídio en California”, expositor, Dr. Gabriel Torres, Viticulture Farm Advisor, University of California, Davis. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 3 DE SEPTIEMBRE",
          },
          {
            id: "88",
            title:
              "“Vitivinicultura 4.0: Aplicaciones Prácticas”, participan como expositores: Dr. Kaan Kurtural, UC Davis; Ricardo Rodríguez Larraín, VSPT; Stanley Best, INIA; Alejandra Acuña, UC Davis Chile; Mauricio Cañoles, UC Davis Chile. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 9 DE SEPTIEMBRE",
          },
          {
            id: "89",
            title:
              "“Manejo de riego en frutales, Irrigation management: don´t ask me, ask the tree”, participan como expositores: Dr. Kenneth Shackel, UC Davis; Samuel Barros - Univiveros; Andrés Olivos - Olivo Riego. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 23 DE SEPTIEMBRE",
          },
          {
            id: "90",
            title:
              "“Sistemas de riego eficientes”, participación como expositores: Blake Sanden, UC ANR, California; Alejandro Antúnez; Rosario Larraín. Sesión en vivo módulo II Ciruelo europeo - Programa de Extensión UC Davis Chile.",
            datePlace: "WEBINAR, 24 DE SEPTIEMBRE",
          },
          {
            id: "91",
            title:
              "Expo Chile Agrícola, participación como expositores en representación de UC Davis Chile: Olivia Valdés, Leticia Rojas, Lovell Jarvis, y Mauricio Cañoles.",
            datePlace: "FERIA ONLINE, 29 – 30 DE SEPTIEMBRE",
          },
          {
            id: "92",
            title:
              "“Tips para el conocimiento científico, la innovación es hoy”, participación como expositor: Patricia Anguita, UC Davis Chile.",
            datePlace: "SEMINARIO ONLINE, 21 DE OCTUBRE",
          },
          {
            id: "93",
            title:
              "“Riego de vides para vino”, participación como expositores: Dr. Larry Williams, Professor Plant Physiologist, UC Davis; Samuel Barros, Univiveros. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 28 DE OCTUBRE",
          },
          {
            id: "94",
            title:
              "“Compartiendo experiencias de fruticultura entre Chile y California”, actividad coorganizada con el Centro de Fruticultura de la Universidad de La Frontera. Conferencia: “Medidas Micrometeorológicas en Huertos Frutales: Un ejemplo para Cerezos”, Dra, Kosana Suvočarev, Ph.D. Biometeorology Specialist, UC Davis. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 19 DE NOVIEMBRE",
          },
          {
            id: "95",
            title:
              "“Compartiendo experiencias de fruticultura entre Chile y California”, actividad coorganizada con el Centro de Fruticultura de la Universidad de La Frontera. Conferencia: “Estrategias para Manejar Heladas en Huertos de Frutales: Un ejemplo para Viñedos”, Dr. Mark Battany, Water Management and Biometeorology Advisor, UC Davis. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 26 DE NOVIEMBRE",
          },
          {
            id: "96",
            title:
              "“Manejo nutricional en nogales”, Dra. Katherine Jarvis-Shean, Sacramento-Solano-Yolo Orchard Systems Advisor, University of California Cooperative Extension. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 3 DE DICIEMBRE",
          },
          {
            id: "97",
            title:
              "“Asociatividad y gestión hídrica sustentable en la cuenca del Aconcagua”, organizado en conjunto con PERFRUTS. Expositor: Dr. Samuel Sandoval, Associate Professor, Department of Land, Air and Water Resources, UC Davis.",
            datePlace: "WEBINAR, 7 DE DICIEMBRE",
          },
          {
            id: "98",
            title:
              "“Pérdidas económicas causadas por hongos de la madera en vid”, expositor: Dr. Jonathan Kaplan: Profesor de Economía Agrícola de Recursos. California State University, Sacramento. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 17 DE DICIEMBRE ",
          },
          {
            id: "99",
            title:
              "“Agricultural groundwater recharge”, expositora: Dr. Helen Dahlke, Associate Professor in Integrated Hydrologic Sciences Department of Land, Air and Water Resources, UC Davis. Programa de Extensión UC Davis Chile.",
            datePlace: "EXTENSION TALK, 22 DE DICIEMBRE",
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
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: inherit;
  }
}

/*----- TIMELINE ITEM -----*/

.timeline-item {
  padding-left: 40px;
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
}

/*----- TIMELINE INFO -----*/

.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  color: $blue;
}
/*----- TIMELINE MARKER -----*/

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
  &:before {
    background: $gold;
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 3px;
    background: #ccd5db;
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
  .timeline-item:last-child &:after {
    content: none;
  }
}
.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid $gold;
}

/*----- TIMELINE CONTENT -----*/

.timeline-content {
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
}

/*----- TIMELINE PERIOD -----*/

.period {
  padding: 0;
  .timeline-info {
    display: none;
  }
  .timeline-marker {
    &:before {
      background: transparent;
      content: "";
      width: 15px;
      height: auto;
      border: none;
      border-radius: 0;
      top: 0;
      bottom: 30px;
      position: absolute;
      border-top: 3px solid #ccd5db;
      border-bottom: 3px solid #ccd5db;
    }
    &:after {
      content: "";
      height: 32px;
      top: auto;
    }
  }
  .timeline-content {
    padding: 40px 0 70px;
  }
  .timeline-title {
    margin: 0;
    font-size: 35px;
  }
}

/*----------------------------------------------
        MOD: TIMELINE SPLIT
    ----------------------------------------------*/

.timeline-split {
  @media (min-width: 768px) {
    .timeline {
      display: table;
    }
    .timeline-item {
      display: table-row;
      padding: 0;
    }
    .timeline-info,
    .timeline-marker,
    .timeline-content,
    .period .timeline-info {
      display: table-cell;
      vertical-align: top;
    }
    .timeline-marker {
      position: relative;
    }
    .timeline-content {
      padding-left: 30px;
    }
    .timeline-info {
      padding-right: 30px;
    }
    .period .timeline-title {
      position: relative;
      left: -45px;
    }
  }
}

/*----------------------------------------------
        MOD: TIMELINE CENTERED
    ----------------------------------------------*/

.timeline-centered {
  @extend .timeline-split;
  @media (min-width: 992px) {
    &,
    .timeline-item,
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    > .timeline-item:nth-child(odd) .timeline-info {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item:nth-child(odd) .timeline-content {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-info {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-content {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item.period .timeline-content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .timeline-item.period {
      padding: 40px 0 80px;
    }
    .period .timeline-marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
    .period .timeline-title {
      left: auto;
    }
  }
}

/*----------------------------------------------
        MOD: MARKER OUTLINE
    ----------------------------------------------*/

.marker-outline {
  .timeline-marker {
    &:before {
      background: transparent;
      border-color: $gold;
    }
  }
  .timeline-item:hover .timeline-marker:before {
    background: $gold;
  }
}
</style>