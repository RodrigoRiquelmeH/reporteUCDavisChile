<template>
  <b-navbar>
    <b-collapse
      class="default-nav justify-content-center"
      is-nav
      id="nav_collapse"
    >
      <b-navbar-nav class="navbar-nav d-block overlay-nav">
        <!-- 01 -->
        <b-nav-item
          :to="{ name: 'Home' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Presentación</span></b-nav-item
        >
        <!-- 02 -->
        <b-nav-item
          :to="{ name: 'UCDavisEEEUU' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>UC Davis EE.UU</span></b-nav-item
        >
        <!-- 03 -->
        <b-nav-item
          :to="{ name: 'RelacionHistorica' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Relación histórica</span></b-nav-item
        >
        <!-- 04 -->
        <b-nav-item
          :to="{ name: 'UCDavisChile' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>UC Davis Chile</span></b-nav-item
        >
        <!-- 05 -->
        <b-nav-item
          :to="{ name: 'Mision' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Nuestra misión</span></b-nav-item
        >
        <!-- 06 -->
        <b-nav-item
          :to="{ name: 'QuienesSomos' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Quiénes somos</span></b-nav-item
        >
        <!-- 07 -->
        <b-nav-item
          :to="{ name: 'Impacto' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Impacto</span></b-nav-item
        >
        <!-- 08 -->
        <b-nav-item
          :to="{ name: 'AreasTrabajo' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Áreas de trabajo</span>
        </b-nav-item>
        <!-- 09 -->
        <b-nav-item
          :to="{ name: 'AporteSimetrico' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Aporte simétrico</span>
        </b-nav-item>
        <!-- 10 -->
        <b-nav-item
          :to="{ name: 'Cifras' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Cifras</span>
        </b-nav-item>
        <!-- 11 -->
        <b-nav-item
          :to="{ name: 'Proyectos' }"
          class="scroll"
          @click="toggleClass('removeClass', 'active')"
          ><span>Principales proyectos</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "OverlayNav",
  methods: {
    // offcanvas searchbox
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#overlay-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>