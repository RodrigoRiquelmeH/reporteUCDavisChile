<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>3 Patentes </strong>solicitadas presentadas a PCT relacionadas con
      bioproductos:
    </div>
    <div class="row mb-5 align-items-center">
      <div class="col-12 col-md-2 mb-4 mb-md-0">
        <div class="number">1</div>
      </div>
      <div class="col-12 col-md-9 description">
        <p>
          Producto y un método para el biocontrol de enfermedades fúngicas de la
          madera (hongos de la madera en vides), utilizando para esto una cepa
          endófita del hongo <em>Clonostachys rosea</em>, R36.1. (Depósito
          CChRGM 989). Patente presentada a PCT.
        </p>
      </div>
    </div>
    <div class="row mb-5 align-items-center">
      <div class="col-12 col-md-2 mb-4 mb-md-0">
        <div class="number">2</div>
      </div>
      <div class="col-12 col-md-9 description">
        <p>
          Producto y un método para el biocontrol de enfermedades fúngicas
          agrícolas tales como <em>Botrytis, Fusarium, Monilinia</em> y otras
          basado en la bacteria <em>Pseudomonas lini</em> cepa S57 (Depósito
          CChRGM 2930) para su uso agrícola en ambientes salino- bóricos.
          Patente ad-portas de ser presentada a PCT.
        </p>
      </div>
    </div>
    <div class="row mb-5 align-items-center">
      <div class="col-12 col-md-2 mb-4 mb-md-0">
        <div class="number text-center">3</div>
      </div>
      <div class="col-12 col-md-9 description">
        Producto y mecanismo como bioestimulante basado en la bacteria
        <em>Pseudomonas lini</em> cepa S57 (Depósito CChRGM 2930) para uso
        agrícola en ambientes salino-bóricos. El producto actúa como promotor
        del crecimiento vegetal, produciendo auxinas y sideróforos, fijando
        nitrógeno y permitiendo la solubilización de fosfatos, además de
        estimular el crecimiento de la parte aérea de plantas. Patente ad-portas
        de ser presentada a PCT.
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