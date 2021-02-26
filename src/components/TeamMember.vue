<template>
  <div class="ht-team-member--inner">
    <!-- team-image Start -->
    <div class="team-image">
      <div v-if="img" class="wrapper">
        <img
          class="img-fluid"
          :alt="name"
          :src="require(`@/assets/img/team/${img}`)"
        />
      </div>
      <img
        v-if="country == 'US'"
        class="flag-icon"
        src="@/assets/img/team/US.png"
        alt="US"
      />
      <img
        v-if="country == 'CL'"
        class="flag-icon"
        src="@/assets/img/team/CL.png"
        alt="CL"
      />
    </div>

    <!-- team-image End -->
    <!-- team-info Start -->
    <div class="team-info text-center">
      <div v-if="boardPosition" class="position-board arboretum">
        {{ boardPosition }}
      </div>
      <h5 class="name">{{ name }}</h5>
      <div class="position">{{ position }}</div>
    </div>
    <!-- team-info End -->
  </div>
</template>
<script>
export default {
  name: "teamMember",
  props: ["name", "country", "boardPosition", "position", "img"],
};
</script>

<style lang="scss" scoped>
.team-image {
  width: 150px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  .wrapper {
    max-width: 120px;
    max-height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  img.flag-icon {
    position: absolute;
    z-index: 10;
    top: 0px;
    right: -20px;
    width: 25px;
    @media #{$min-tablet} {
      top: 0px;
      right: 0px;
    }
  }
  img {
    max-width: 100%;
  }
}
</style>