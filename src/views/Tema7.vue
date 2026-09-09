<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Seguridad y salud en el trabajo
      Separador
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 7.1 Protocolos de operación segura y elementos de protección personal (EPP)
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 7.2 Ergonomía aplicada a maquinaria textil
      
        

  </template>

<script>
export default {
  name: 'Tema1',
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
