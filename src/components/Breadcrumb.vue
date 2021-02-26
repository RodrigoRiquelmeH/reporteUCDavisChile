<template>
  <!-- breadcrumb-area start -->
  <div class="breadcrumb-area bg-blue">
    <div class="container">
      <div class="row">
        <div class="col-12 text-white">
          <slot name="breadcrumb"></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area end -->
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>