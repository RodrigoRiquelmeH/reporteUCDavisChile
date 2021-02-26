<template>
  <div class="main-container">
    <!-- Navbar section -->
    <HeaderShowcase />

    <!-- Intro -->
    <HeroAppShowcase />

    <!-- 1. Presentacion -->
    <Presentacion />
    <Cartas />

    <!-- 2.	UC Davis EE. UU. -->
    <UCDavisUS />

    <!-- 3. three step process -->
    <RelacionHistorica />

    <!-- 4. UC Davis Chile -->
    <UCDavisChile />

    <!-- 5. Nuestra Mision -->
    <NuestraMision />

    <!-- 6. Quienes somos -->
    <QuienesSomos />

    <!-- 7. Impacto -->
    <Impacto />

    <!-- 8. Areas de trabajo -->
    <AreasTrabajo />

    <!-- 9. Aporte Simetrico -->
    <AporteSimetrico />

    <!--10. Cifras -->
    <Cifras />

    <!-- 11. Proyectos -->
    <Proyectos />
    <!-- overlay menu section -->
    <OverlayMenu />

    <FooterMain />
  </div>
</template>

<script>
import HeaderShowcase from "@/components/HeaderShowcase";
import Cartas from "@/components/sections/Cartas";
import HeroAppShowcase from "@/components/HeroAppShowcase";
import UCDavisUS from "@/components/sections/UCDavisUS";
import UCDavisChile from "@/components/sections/UCDavisChile";
import Cifras from "@/components/sections/Cifras";
import Presentacion from "@/components/sections/Presentacion";
import RelacionHistorica from "@/components/sections/RelacionHistorica";
import OverlayMenu from "@/components/OverlayMenu";
import NuestraMision from "@/components/sections/NuestraMision";
import QuienesSomos from "@/components/sections/QuienesSomos";
import AreasTrabajo from "@/components/sections/AreasTrabajo.vue";
import Proyectos from "@/components/sections/Proyectos.vue";
import Impacto from "@/components/sections/Impacto.vue";
import AporteSimetrico from "@/components/sections/AporteSimetrico.vue";
import FooterMain from "@/components/FooterMain";
export default {
  name: "app",
  components: {
    HeaderShowcase,
    Cartas,
    Cartas,
    UCDavisUS,
    HeroAppShowcase,
    Presentacion,
    RelacionHistorica,
    Cifras,
    OverlayMenu,
    QuienesSomos,
    NuestraMision,
    AreasTrabajo,
    Proyectos,
    FooterMain,
    UCDavisChile,
    Impacto,
    AporteSimetrico,
  },
};
</script>

