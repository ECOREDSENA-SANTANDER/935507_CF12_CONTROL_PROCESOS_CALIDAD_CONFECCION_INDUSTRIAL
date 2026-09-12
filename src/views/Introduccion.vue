<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La eficiencia de una planta de confección industrial no depende exclusivamente de la destreza manual de sus operarios ni de la calidad de la maquinaria instalada. Depende, en igual o mayor medida, de la capacidad de planificar con precisión, organizar los recursos disponibles, medir el desempeño mediante indicadores verificables y garantizar condiciones de trabajo seguras y productivas. La integración de estos elementos constituye el núcleo de la gestión de la producción y define la diferencia entre una operación reactiva y una planta verdaderamente competitiva.

    .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/intro/1.png')
        .col-sm-12.col-lg-7
            p.mb-3 El presente componente formativo, desarrollado para el programa Técnico Profesional en Control de la Calidad para la Confección Industrial del Servicio Nacional de Aprendizaje (SENA), aborda los fundamentos técnicos, normativos y operativos de la gestión de la producción y la seguridad industrial aplicados al contexto de la confección en Colombia. Su estructura parte de los sistemas de planificación de la producción y avanza progresivamente hacia la medición del desempeño, la documentación técnica, la digitalización de los procesos y el cumplimiento de los estándares de seguridad y salud en el trabajo vigentes.
            .bg-color-6.p-3.mb-0
              p.mb-0 A lo largo de los nueve capítulos que conforman el componente, cada contenido se desarrolla desde una perspectiva operativa: los conceptos se articulan con las funciones reales del técnico en control de calidad dentro de una planta de confección, las normas se contextualizan en los procesos que regulan y los indicadores se presentan como instrumentos de gestión cotidiana y no como abstracciones teóricas. Esta orientación responde al perfil de desempeño que el SENA define para sus técnicos: profesionales capaces de intervenir con rigor, pertinencia y responsabilidad en los entornos productivos del sector confección industrial colombiano.


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cEJQSM8UG3Q?si=yYXwdp_QuXAPoUWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
