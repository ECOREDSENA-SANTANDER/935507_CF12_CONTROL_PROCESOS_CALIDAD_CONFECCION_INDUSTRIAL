<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Digitalización de la producción
      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t6/1.png')(data-aos='fade-right')
      p.mb-5(data-aos='fade-right')  La transformación digital de la industria de la confección no es una tendencia futura: es una realidad presente en las plantas de mayor competitividad del sector a nivel global y, en forma creciente, en las empresas exportadoras colombianas. Los sistemas de software especializados para la gestión de la producción en confección permiten integrar la información de diseño, patronaje, producción y calidad en una plataforma única, eliminando la duplicación de datos, reduciendo los errores de transcripción y acortando los tiempos de desarrollo de nuevas referencias.

      .bloque-texto-g.bloque-texto-g.bg-color-4.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 El mercado de #[i software] para la confección industrial está dominado por cuatro plataformas de referencia internacional, cada una con un posicionamiento diferenciado según las funciones que cubre, el tamaño de empresa al que se orienta y el nivel de integración con otros sistemas de gestión. En 2021, Lectra S.A. adquirió Gerber Technology, consolidando dos de los principales proveedores de software y maquinaria para la confección bajo una misma empresa, aunque ambas marcas y sus plataformas de software continúan operando en el mercado con sus nombres originales.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 16.] Plataformas de software especializadas para la gestión de la producción en confección
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Software]
              th #[b Proveedor]
              th #[b Módulos principales]
              th #[b Función en producción]
              th #[b Perfil de empresa]
          tbody
            tr
              td #[b AccuMark (Gerber)]
              td Lectra S.A. (adquirió Gerber Technology en 2021)
              td Patronaje digital, gradación, trazo automático, optimización de tela.
              td Genera los archivos de corte digital que minimizan el desperdicio de tela mediante algoritmos de optimización del trazo.
              td Empresas de mediana y gran escala con cortadoras automáticas integradas.
            tr
              td #[b Modaris / Diamino (Lectra)]
              td Lectra S.A.
              td Patronaje 3D, gradación inteligente, trazado asistido, integración con cortadora automática Vector.
              td Permite desarrollar y validar patrones en entorno 3D antes de producir el primer prototipo físico, reduciendo el número de muestras.
              td Grandes empresas exportadoras y marcas internacionales con producción de alto volumen.
            tr
              td #[b Optitex]
              td EFI Optitex
              td Patronaje 2D/3D, simulación de tela, trazado, integración con PLM.
              td Simulación del comportamiento de la tela en la prenda virtual, reduciendo ciclos de muestreo y costos de desarrollo.
              td Empresas con énfasis en desarrollo de producto y reducción de tiempos de lanzamiento al mercado.
            tr
              td #[b #[i Systems, Applications, and Products in Data Processing S/4HANA for Fashion and Vertical Business]]
              td SAP SE
              td Gestión de pedidos, planificación de la producción, control de inventarios, trazabilidad, finanzas, distribución.
              td Integra todos los procesos del negocio en una plataforma ERP (#[i Enterprise Resource Planning]) especializada para el sector de prendas de vestir y calzado.
              td Grandes empresas con operaciones de producción, distribución y comercialización integradas.



      p.mb-5(data-aos='fade-right') La implementación de estas plataformas en una planta de confección genera beneficios verificables en múltiples dimensiones. En el área de patronaje y corte, la optimización automática del trazo reduce el desperdicio de tela entre el 3 % y el 8 % con respecto al trazo manual, según los estudios publicados por Lectra S.A. para el sector. En la gestión de la producción, la integración del ERP con el piso de planta permite actualizar el avance de producción en tiempo real, eliminar los reportes manuales en papel y generar alertas automáticas cuando el ritmo de producción se desvía del plan.

      .cajon.color-acento-contenido.p-5.mb-0(data-aos='fade-right')
        p.mb-0 Concepto técnico: el índice de aprovechamiento de tela (IAT) es la relación entre el área total de los patrones trazados y el área total del metraje tendido, expresada en porcentaje. Un IAT del 85 % indica que el 15 % restante corresponde a desperdicio generado entre los patrones. La optimización computacional del trazo busca maximizar el IAT y reducir ese desperdicio.
      
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
