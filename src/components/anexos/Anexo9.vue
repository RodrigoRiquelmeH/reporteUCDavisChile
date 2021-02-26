<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>2 Tecnologías</strong> biotech licenciadas
    </div>
    <div class="row mb-5 align-items-center">
      <div class="col-12 col-md-2 mb-4 mb-md-0">
        <div class="number">1</div>
      </div>
      <div class="col-12 col-md-9 description">
        <p>
          <strong
            >Sistema de diagnóstico de <em>Botryosphaeriaceae</em> mediante
            amplificación isotérmica</strong
          >
          que permite identificar de manera selectiva a hongos que participan en
          la enfermedad de la madera en vides. Tecnología protegida por secreto
          industrial.
        </p>
      </div>
    </div>
    <div class="row mb-5 align-items-center">
      <div class="col-12 col-md-2 mb-4 mb-md-0">
        <div class="number">2</div>
      </div>
      <div class="col-12 col-md-9 description">
        <p>
          <strong
            >Sistema de identificación de clones de vid basado en
            high–throughput sequence</strong
          >
          que permite, mediante el uso de marcadores genéticos específicos para
          cada clon de vid, identificar de forma masiva y rutinaria clones de
          una misma variedad. Tecnología protegida por secreto industrial.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anexo8",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.number {
  background: $gold;
  width: 70px;
  height: 70px;
  text-align: center;
  justify-items: center;
  align-items: center;
  margin-left: 0;
  margin-right: auto;
  color: #fff;
  font-weight: 800;
  font-size: 40px;
  border-radius: 50%;
  @media #{$min-tablet} {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>