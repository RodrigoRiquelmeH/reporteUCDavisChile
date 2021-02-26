<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="section-title-wrap text-center section-space--mb_30">
        <h2
          class="font-display mb-0 wow move-up"
          :class="color"
          v-html="sectionTitle"
        ></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    sectionTitle: String,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.section-title-wrap {
  h2 {
    font-size: 40px;
    @media #{$min-tablet} {
      font-size: 40px;
    }
    @media #{$min-desktop} {
      font-size: 60px;
    }
  }
}
h2.cabernet {
  color: $cabernet;
}
</style>