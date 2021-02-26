<template>
  <div>
    <div class="mb-5 intro blue">
      Más de <strong>85 Investigadores</strong>, académicos y staff de la
      Universidad de California Davis colaborando activamente en proyectos de
      I+D y extensión tecnológica:
    </div>
    <div v-for="item in researchers" :key="item.title" class="mb-5">
      <h2 class="text-uppercase gold title-unit">
        {{ item.title }}
      </h2>
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">UC Davis Unit</th>
            <th scope="col">Faculty/Staff Name</th>
            <th scope="col">Position at UC Davis</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in item.staff" :key="member.id">
            <td>{{ member.unit }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.position }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anexo1",
  data: () => ({
    researchers: [
      {
        title: "College of Agricultural and Environmental Sciences",
        staff: [
          {
            id: "staff-1",
            unit: "Agricultural and Resource Economics Department",
            name: "Daniel Sumner, Ph.D.",
            position:
              "Director Agricultural Issues Center Frank H. Buck, Jr. Distinguished Professor Agricultural and Resource Economics",
          },
          {
            id: "staff-2",
            unit: "Food Science and Technology Department",
            name: "Bruce German Ph.D. ",
            position:
              "Professor and Chemist Department Food Science and Technology Director, Foods For Health Institute",
          },
          {
            id: "staff-3",
            unit: "Food Science and Technology Department",
            name: "Christopher Simmons Ph.D",
            position:
              "Associate Professor Food Science and Technology Department",
          },
          {
            id: "staff-4",
            unit: "Food Science and Technology Department",
            name: "Edward (Ned) Spang Ph.D.",
            position:
              "Food Science and Technology; Faculty lead Food Loss and Waste Collaborative",
          },
          {
            id: "staff-5",
            unit: "Food Science and Technology Department",
            name: "Linda Harris, Ph. D. ",
            position:
              "Chair Department of Food Science and Technology, College of Agricultural and Environmental Sciences, UC Davis",
          },
          {
            id: "staff-6",
            unit: "Food Science and Technology Department",
            name: "Moshe Rosenberg, Ph.D.",
            position:
              "Professor and Specialist, Dairy Engineering and Technology, Food Science and Technology Department",
          },
          {
            id: "staff-7",
            unit: "Human Ecology Department",
            name: "David de la Peña Ph.D.  ",
            position:
              "Program Director Landscape Architecture + Environmental Design; Human Ecology Department, College of Agricultural & Environmental Sciences",
          },
          {
            id: "staff-8",
            unit: "Land, air and water resources Department",
            name: "Ben Houlton Ph.D. ",
            position:
              "Professor and Chancellor's Fellow at Department of Land, Air and Water Resources, Director: UC Davis John Muir Institute of the Environment",
          },
          {
            id: "staff-9",
            unit: "Land, air and water resources Department",
            name: "Graham Fogg, Ph.D. ",
            position:
              "Professor of Hydrogeology in the Department of Land, Air and Water Resources.",
          },
          {
            id: "staff-10",
            unit: "Land, air and water resources Department",
            name: "Rick Snyder Ph.D.",
            position:
              "Biometeorology Specialist, Department of Land, Air and Water Resources.",
          },
          {
            id: "staff-11",
            unit: "Land, air and water resources Department",
            name: "Sam Sandoval, Ph.D.",
            position:
              "Associate Professor Departament of Land, Air and Water Resources; Cooperative Extension Specialist in Water Management",
          },
          {
            id: "staff-12",
            unit: "Nutrition Department ",
            name: "Robert Hackman Ph.D. ",
            position: "Research Nutritionist, Department of Nutrition",
          },
          {
            id: "staff-13",
            unit: "Plant Pathology Department",
            name: "Bryce Falk, Ph.D. ",
            position:
              "Distinguished Professor of Plant Pathology, Department of Plant Pathology",
          },
          {
            id: "staff-14",
            unit: "Plant Pathology Department",
            name: "David Rizzo Ph.D.",
            position: "Chair Department of Plant Pathology",
          },
          {
            id: "staff-15",
            unit: "Plant Science Department",
            name: "Alan Bennett Ph.D. ",
            position: "Distinguished Professor of Plant Sciences",
          },
          {
            id: "staff-16",
            unit: "Plant Science Department",
            name: "Bruce Lampinen Ph D.",
            position:
              "Integrated Orchard Management Walnut and Almond Specialist. Department of Plant Sciences, Division of Agriculture and Natural Resources, University of California",
          },
          {
            id: "staff-17",
            unit: "Plant Science Department",
            name: "Mohsen Mesgaran, Ph.D.",
            position:
              "Assistant Professor of the Department of Plant Sciences, College of Agricultural and Environmental Sciences of UC Davis",
          },
          {
            id: "staff-18",
            unit: "Viticulture and Enology Department",
            name: "Andrew Walker, PhD. ",
            position: "Professor (Geneticist),  Viticulture and Enology",
          },
          {
            id: "staff-19",
            unit: "Viticulture and Enology Department",
            name: "Dario Cantu, Ph. D. ",
            position:
              "Associate Professor (Plant Biologist), Viticulture and Enology; UC Davis Chile Academic Director (2019)",
          },
          {
            id: "staff-20",
            unit: "Viticulture and Enology Department",
            name: "David E. Block, Ph. D. ",
            position:
              "Professor and Marvin Sands Department Chair Unit, Viticulture and Enology",
          },
        ],
      },
      {
        title: "College of Engineering ",
        staff: [
          {
            id: "staff-101", //continua la numeración anterior, o le agregas un 1 al principio
            unit: "Civil & Environmental Engineering Department",
            name: "Jay Lund Ph.D.",
            position:
              "Director Center for Watershed Sciences and Distinguished Professor of Civil and Environmental Engineering Department of Civil and Environmental Engineering",
          },
          {
            id: "staff-102",
            unit:
              "Biological and Agricultural Engineering Department & Viticultural and Enology Department",
            name: "Mason Earles  Ph.D.",
            position:
              "Assistant Professor, Viticulture and Enology; Assistant Professor,Plant AI and Biophysics Lab, Assistant Agricultural Engineer.",
          },
          {
            id: "staff-103",
            unit: "Biological and Agricultural Engineering Department ",
            name: "Shrinivasa Upadhyaya Ph.D.",
            position: "Department of Biological and Agricultural Engineering. ",
          },
          {
            id: "staff-104",
            unit: "Biomedical Engineering Department",
            name: "Eduardo Silva, Ph.D.",
            position:
              "Associate Professor, Biomedical Engineering, College of Engineering",
          },
          {
            id: "staff-105",
            unit:
              "Tahoe Environmental Research Center (TERC) &  Civil and Environmental Engineering Department",
            name: "Geoffrey Schladow Ph.D",
            position:
              "Director of the UC Davis Tahoe Environmental Research Center, Professor Civil and Environmental Engineering",
          },
        ],
      },
      {
        title: "College of Letters and Science",
        staff: [
          {
            id: "staff-201", //continua la numeración anterior, o le agregas un 2 al principio
            unit: "Psychology Department Center for Mind and Brain",
            name: "Paul Hastings, Ph.D.",
            position:
              "Professor Department of Psychology at UC Davis and Professor Center for Mind and Brain",
          },
        ],
      },
      {
        title: "Office of Research",
        staff: [
          {
            id: "staff-301",
            unit: "Innovation Access",
            name: "William Tucker, Ph.D. MBA",
            position: "Executive Director Innovation Access",
          },
          {
            id: "staff-302",
            unit: "Venture Catalyst, Innovation and entreprenourship",
            name: "Zane Starkewolfe Ph.D.",
            position:
              "Former Associate Director – Venture Catalyst, Current Director of Corporate Development WuXi Biologics",
          },
          {
            id: "staff-303",
            unit: "Venture Catalyst, Innovation and entreprenourship",
            name: "Mike Lemcke B.S.",
            position: "Analyst, New Venture Resources, Venture Catalyst",
          },
          {
            id: "staff-304",
            unit: "Venture Catalyst, Innovation and entreprenourship",
            name: "Dushyant Patak Ph.D.",
            position:
              "FORMER Associate Vice Chancellor, Innovation & Technology Commercialization",
          },
          {
            id: "staff-305",
            unit: "Venture Catalyst, Innovation and entreprenourship",
            name: "Cleveland Justis, MBA, Ph.D.",
            position:
              "FORMER- Executive Director of the University of California, Davis, Child Family Institute for Innovation and Entrepreneurship",
          },
        ],
      },
      {
        title: "School of Education",
        staff: [
          {
            id: "staff-401",
            unit: "School of Education",
            name: "Megan Welsh Ph.D. ",
            position:
              "Associate Professorand Chancellor's Fellow in educational assessment and measurement, School of Education",
          },
          {
            id: "staff-402",
            unit: "Teacher Education and Preparation",
            name: "Margarita Jiménez-Silva Ph.D.",
            position:
              "Associate Professor and Director of Teacher Education, School of Education, UC Davis",
          },
        ],
      },
      {
        title: "School of Veterinary Medicine",
        staff: [
          {
            id: "staff-501",
            unit: "School of Veterinary Medicine",
            name: "Michael Lairmore Ph.D.  ",
            position: "Dean UC Davis School of Veterinary Medicine",
          },
          {
            id: "staff-502",
            unit:
              "School of Veterinary Medicine & One Health Institute in Veterinary Medicine",
            name: "Woutrina Smith, Ph.D.",
            position:
              "Professor Medicine & Epidemiology, Veterinary Medicine. Associate Director, One Health Institute Veterinary Medicine; School of Veterinary Medicine",
          },
          {
            id: "staff-503",
            unit: "School of Veterinary Medicine",
            name: "Rodrigo Gallardo Ph.D.",
            position:
              "Associate Professor and Associate Professor in Residence, Population Health & Reproduction, School of Veterinary Medicine",
          },
        ],
      },
      {
        title: "UC Davis Graduate School of Management",
        staff: [
          {
            id: "staff-601",
            unit: "UC Davis Graduate School of Management",
            name: "Angela Stopper, Ph.D.",
            position:
              "FORMER - Director of Program Innovations and Executive Education at the UC Davis Graduate School of Management; Current Director, Learning & Development, UC Berkeley",
          },
          {
            id: "staff-602",
            unit: "UC Davis Graduate School of Management",
            name: "James Stevens, MBA",
            position: "Lecturer, Graduate School of Management de UC Davis",
          },
          {
            id: "staff-603",
            unit: "UC Davis Graduate School of Management",
            name: "Keisha Liggett-Nichols and 6 part-time MBA students",
            position:
              "FORMER Lecturer, Faculty Advisor, UC Davis Graduate School of Management",
          },
        ],
      },
      {
        title: "UC Davis Health",
        staff: [
          {
            id: "staff-701",
            unit: "The Betty Irene Moore School of Nursing ",
            name: "Heather Young, Ph.D.",
            position:
              "Dean emerita for the Betty Irene Moore School of Nursing & associate vice chancellor for nursing for UC Davis Health",
          },
          {
            id: "staff-702",
            unit:
              "School of Medicine, Cell Biology and Human Anatomy Department",
            name: "Fernando Fierro Ph.D,",
            position:
              "Assistant Adjunct Professor, Stem Cell Program, School of Medicine.",
          },
          {
            id: "staff-703",
            unit: "School of Medicine, Center for Health and Technology",
            name: "James P. Marcin, M.D., M.P.H. ",
            position:
              "Director, UC Davis Center for Health and Technology, Vice Chair for Pediatric Clinical Research, Professor, Department of Pediatrics",
          },
          {
            id: "staff-704",
            unit: "School of Medicine, Global Health",
            name: "Michael Wilkes, M.D., Ph.D.",
            position:
              "Director of Global Health, School of Medicine, Proffesor Department of Internal Medicine",
          },
          {
            id: "staff-705",
            unit: "School of Medicine, Otolaryngology Department",
            name: "Lisa Evangelista, CScD, CCCN/ASLP, BCSN/AS",
            position:
              "Director of Speech Pathology in the Department of Otolaryngology; Head and Neck Surgery, UC Davis Medical Center. ",
          },
          {
            id: "staff-706",
            unit:
              "School of Medicine, Psychiatry and Behavioral Sciences Department",
            name: "Andrés Sciolla, MD.",
            position:
              "Associate Professor of Clinical Psychiatry, Department of Psychiatry & Behavioral Sciences",
          },
        ],
      },
      {
        title: "UC Division of Agriculture and Natural Resources (UC ANR)",
        staff: [
          {
            id: "staff-801",
            unit: "UC ANR, California Institute for Water Resources",
            name: "Doug Parker Ph.D.",
            position:
              "Director, California Institute for Water Resources  Water Strategic Initiative Leader, UC ANR",
          },
          {
            id: "staff-802",
            unit:
              "UC ANR, Biological and Agricultural Engineering Department, UC Davis",
            name: "Alireza Pourreza Ph.D.",
            position: "Assistant CE Specialist of Agricultural Mechanization",
          },
          {
            id: "staff-803",
            unit: "UC ANR, Fruits and Nut Research & Information Center. ",
            name: "Julia Stover ",
            position:
              "Director Fruit & Nut Research & Information Center, UC ANR",
          },
          {
            id: "staff-804",
            unit: "UC ANR, Plant Science Department, UC Davis",
            name: "Louise Ferguson Ph.D.",
            position: "CE Pomologist; Department of Plant Sciences",
          },
          {
            id: "staff-805",
            unit: "UC ANR, Land, air and water resources Depatment, UC Davis",
            name: "Daniele Zaccaria Ph.D. ",
            position:
              "Assistant Agricultural Water Management Specialist in Cooperative Extension UC ANR",
          },
          {
            id: "staff-806",
            unit: "UC ANR, Viticulture y Enology Department, UC Davis",
            name: "Anita Oberholster Ph.D.",
            position:
              "Associate Specialist in Cooperative Extension in Enology: Viticulture y Enology.",
          },
          {
            id: "staff-807",
            unit: "UC ANR, Viticulture y Enology Department, UC Davis",
            name: "Carmen Gispert, Ph.D.",
            position: "Area Viticulture Advisor, UC Cooperative Extension",
          },
          {
            id: "staff-808",
            unit: "UC ANR, Viticulture y Enology Department, UC Davis",
            name: "Kaan Kurtural Ph.D.",
            position:
              "Associate Specialist in Cooperative Extension in Viticulture",
          },
          {
            id: "staff-809",
            unit: "UC ANR",
            name: "Alejandro Castillo Ph.D.",
            position:
              "Farm Advisor Dairy Science Emeritus, Cooperative Extension Merced County. ",
          },
          {
            id: "staff-810",
            unit: "UC ANR",
            name: "Allan Fulton M.S.",
            position:
              "Irrigation and Water Resources Advisor, Cooperative Extension Tehama County",
          },
          {
            id: "staff-811",
            unit: "UC ANR",
            name: "Ben Faber Ph.D.",
            position:
              "Soils/water/subtropical crops advisor, Cooperative Extension Ventura and Santa Barbara County",
          },
          {
            id: "staff-812",
            unit: "UC ANR",
            name: "Eugene (Gene) Miyao M.Sc. ",
            position:
              "Emeritus Farm Advisor, Vegetable Crops,     Woodland Administrative Office",
          },
          {
            id: "staff-813",
            unit: "UC ANR",
            name: "Glenn McGourty M.S.",
            position:
              "County Director /Viticulture & Plant Science Advisor UCCEN/AMendocino County",
          },
          {
            id: "staff-814",
            unit: "UC ANR",
            name: "James Downer Ph.D.",
            position:
              "Advisor in Pathology of landscape ornamentals , Phytophthora Root Rot, Mulches, Potting soils, Palm horticulture, climate ready trees, arboriculture, Master Gardener Advisor,   Cooperative Extension Ventura County",
          },
          {
            id: "staff-815",
            unit: "UC ANR",
            name: "James Farrar Ph.D.",
            position:
              "Director Statewide Integrated Pest Management Program UC ANR",
          },
          {
            id: "staff-816",
            unit: "UC ANR",
            name: "Janine Hasey, M.S.",
            position:
              "Tree Crop Farm Advisor, County Director, Master Gardener Advisor, Cooperative Extension Sutter-Yuba Counties (Retired on 2019)",
          },
          {
            id: "staff-817",
            unit: "UC ANR",
            name: "Kendra Baumgartner Ph.D.",
            position: "USDA and ARS research plant pathologist",
          },
          {
            id: "staff-818",
            unit: "UC ANR",
            name: "Larry Bettiga M.S.",
            position:
              "Viticulture Farm Advisor, Cooperative Extension Monterey County",
          },
          {
            id: "staff-819",
            unit: "UC ANR",
            name: "Lynn Wunderlich M.S.",
            position:
              "Farm Advisor in viticulture production and IPM, Central Sierra Cooperative Extension",
          },
          {
            id: "staff-820",
            unit: "UC ANR",
            name: "Mark Battany  M.S. ",
            position:
              "Water Management and Biometeorology Advisor, Cooperative Extension San Luis Obispo County",
          },
          {
            id: "staff-821",
            unit: "UC ANR",
            name: "Mark Bell Ph.D",
            position:
              "Vice Provost of Strategic Initiatives and Statewide Programs UC ANR",
          },
          {
            id: "staff-822",
            unit: "UC ANR",
            name: "Monica Cooper Ph.D.",
            position:
              "Farm  Viticulture advisor, UC Cooperative Extension Napa County ",
          },
        ],
      },
      {
        title: "Global Affairs",
        staff: [
          {
            id: "staff-903",
            unit: "Vice Provost and Associate Chancellor",
            name: "Johanna Regulska, Ph.D.",
            position: "Vice Provost and Associate Chancellor",
          },
          {
            id: "staff-901",
            unit: "Office of the Vice Provost and Associate Chancellor",
            name: "Jim Rix, Ph.D. ",
            position: "FORMER - Chief of Staff Global Affairs ",
          },
          {
            id: "staff-902",
            unit: "Office of the Vice Provost and Associate Chancellor",
            name: "Michael Lazzara, Ph.D. ",
            position: "Associate Vice Provost of Academic Programs",
          },
        ],
      },
      {
        title: "Air Quality Research Center (AQRC)",
        staff: [
          {
            id: "staff-1001",
            unit:
              "Air Quality Research Center (AQRC) Departments of: Mechanical and Aerospace Engineering, Civil and Environmental Engineering Land, Air and Water Resources",
            name: "Anthony Wexler Ph.D. ",
            position:
              "Director Air Quality Research Center (AQRC), UC Davis, Distinguished Professor at      Mechanical and Aerospace Engineering, Civil and Environmental Engineering Land, Air and Water Resources",
          },
          {
            id: "staff-1002",
            unit:
              "Air Quality Research Center (AQRC) & Land, Air and Water Resources Department",
            name: "Ajith P Kaduwela Ph.D.",
            position:
              "Associate Agricultural Experiment Station, Land, Air and Water Resources Associate AQRC",
          },
          {
            id: "staff-1003",
            unit: "Air Quality Research Center (AQRC)",
            name: "Nicole Hyslop Ph.D.",
            position: "Operations Manager & Principal Investigator, AQRC",
          },
          {
            id: "staff-1004",
            unit:
              "Air Quality Research Center (AQRC) &  Mechanical and Aerospace Engineering Department",
            name: "Zhaodan Kong  Ph.D.",
            position:
              "Assistant Professor, Department of Mechanical and Aerospace Engineering AQRC",
          },
        ],
      },
      {
        title: "California Lighting Technology Center (CLTC)",
        staff: [
          {
            id: "staff-1101",
            unit: "CLTC ",
            name: "Michael Siminovitch Ph.D. ",
            position:
              "Director, California Lighting Technology Center / Associate Director, Energy Efficiency Center",
          },
          {
            id: "staff-1102",
            unit: "CLTC ",
            name: "Nicole Hathaway, LC",
            position:
              "Sr. Development Engineer and Communications Director – California Lighting Technology Center",
          },
        ],
      },
      {
        title: "Institute of Transportation Studies (ITS)",
        staff: [
          {
            id: "staff-1201",
            unit: "ITS & Civil and Environmental Engineering Department",
            name: "Daniel Sperling, Ph.D. ",
            position:
              "Founding Director Institute of Transportation Studies Professor, Department of Civil and Environmental Engineering Distinguished Blue Planet Prize Professor of Civil and Environmental Engineering, and Environmental Science",
          },
          {
            id: "staff-1202",
            unit: "ITS",
            name: "Gil Tal, Ph.D. ",
            position:
              "Director, The Plug-in Hybrid & Electric Vehicle (PH&EV) Research Center Transportation Research Director, The China Center for Energy and Transportation Admission Graduate Advisor, Graduate Groups in Transportation Technology, and Policy (TTP)",
          },
        ],
      },
      {
        title: "Center for Educational Effectiveness (CEE)",
        staff: [
          {
            id: "staff-1301",
            unit: "Center for Educational Effectiveness",
            name: "Cecilia Gomez, Ph.D.",
            position: "Especialist, Center for Educational Efectiveness (CEE)",
          },
          {
            id: "staff-1302",
            unit: "Center for Educational Effectiveness",
            name: "Marco Molinaro Ph.D.",
            position:
              "Assistant Vice Provost for Educational Effectiveness, Director Center for Educational Effectiveness (CEE)",
          },
          {
            id: "staff-1303",
            unit: "Center for Educational Effectiveness",
            name: "Kem Saichaie, Ph.D.",
            position:
              "Associate Director for Learning and Teaching Support (CEE)",
          },
        ],
      },
      {
        title: "PIPRA ",
        staff: [
          {
            id: "staff-1401",
            unit: "PIPRA",
            name: "David Jefferson Ph.D. ",
            position: "FORMER- Law & Policy Analyst, PIPRA.",
          },
          {
            id: "staff-1402",
            unit: "PIPRA",
            name: "Monica Alandete Ph.D. ",
            position:
              "FORMER- Director of Analyses & Outreach      Current Open Innovation Scientist - Science     The Climate Corporation",
          },
        ],
      },
      {
        title: "Office of Sustainability",
        staff: [
          {
            id: "staff-1501",
            unit: "Office of Sustainability",
            name: "Camille Kirk M.Sc.",
            position:
              "Director of Sustainability and Campus Sustainability Planner, UC Davis",
          },
        ],
      },
      {
        title: "Center for Regional Change",
        staff: [
          {
            id: "staff-1601",
            unit: "Center for Regional Change",
            name: "Bernadette Austin M.Sc.",
            position: "Acting Director UC Davis Center for Regional Change",
          },
        ],
      },
      {
        title: "UC Davis Giving",
        staff: [
          {
            id: "staff-1701",
            unit: "International Development. UC Davis",
            name: "Juan Losada",
            position:
              "Assistant Director of Development (Latin America), International development",
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
.table th,
.table td {
  width: 33%;
}
</style>