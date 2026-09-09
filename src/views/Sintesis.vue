<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta el mapa conceptual sobre gestión de la producción y seguridad industrial en confección, organizado en cinco ejes: planificación de la producción, logística interna y distribución en planta, indicadores de productividad, seguridad y salud en el trabajo, y gestión de ambientes productivos. Incluye conceptos de manufactura esbelta, inventarios, flujo de materiales, productividad, digitalización, ergonomía, operación segura, elementos de protección personal y tecnologías emergentes aplicadas a los procesos de confección.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Gestión de la producción y seguridad industrial en confección, organizado en planificación, logística interna, productividad, seguridad laboral y gestión de ambientes productivos, con énfasis en eficiencia, flujo de materiales, ergonomía y tecnologías emergentes")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
