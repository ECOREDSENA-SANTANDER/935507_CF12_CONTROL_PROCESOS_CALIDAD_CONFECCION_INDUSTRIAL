<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Gestión de inventarios y trazabilidad
      
      p.mb-5(data-aos='fade-right') El inventario comprende materiales como telas, hilos, botones, cierres, elásticos, etiquetas y materiales de empaque, los cuales representan recursos financieros para la empresa.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/2.svg')
        .col-sm-12.col-lg-6
          .bg-color-3.p-4
            p.mb-3 Una gestión adecuada permite mantener los materiales necesarios para la producción y evitar:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Exceso de inventario y mayores costos de almacenamiento. 
              
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Desabastecimiento de materiales críticos. 
              
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Deterioro de los insumos. 
              
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Dificultades para responder a cambios en los pedidos.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.svg')
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación ABC de materiales e insumos
      
      p.mb-5(data-aos='fade-right') Derivada del principio de Pareto (Pareto, 1896), según el cual aproximadamente el 20 % de las causas explica el 80 % de los efectos, la clasificación ABC permite categorizar los materiales e insumos de una bodega de confección según su valor acumulado en el inventario, con el propósito de concentrar los esfuerzos de control en los elementos de mayor impacto financiero.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 4.] Criterios de clasificación ABC aplicados a inventarios de confección
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Categoría]
              th #[b Participación en unidades]
              th #[b Participación en valor]
              th #[b Nivel de control requerido]
              th #[b Ejemplos en confección]
          tbody
            tr
              td A
              td 10 - 20 %
              td 70 - 80 %
              td #[b Alto:] conteos cíclicos frecuentes, control documental riguroso, niveles mínimos y máximos definidos.
              td Telas principales (#[i denim], #[i jersey], microfilamento); hilaza de costura especializada.
            tr
              td B
              td 20 - 30 %
              td 15 - 25 %
              td #[b Medio:] revisiones periódicas, reabastecimiento planificado.
              td Cierres, botones metálicos, elásticos técnicos, entretelas.
            tr
              td C
              td 50 - 70 %
              td 5 - 10 %
              td #[b Bajo:] revisiones por lote o por proyecto, stock de seguridad alto para evitar gestión frecuente.
              td Agujas, hilos de remate, bolsas plásticas de empaque, marquillas, cartones.

      
      .row.justify-content-center.mb-0(data-aos='fade-right')
            .col-sm-12.col-lg-9
              p.mb-4 La clasificación ABC no es un ejercicio administrativo que se realiza una única vez. En la confección, la composición del inventario cambia con las temporadas, los nuevos desarrollos de producto y la incorporación de nuevos proveedores. Por esta razón, la actualización periódica de la clasificación (mínimo una vez por temporada) garantiza que los criterios de control se mantengan alineados con la realidad operativa de la planta.
              .cajon.color-acento-botones.p-4.mb-0
                p.mb-0 Nota técnica: la clasificación ABC se construye calculando el consumo anual de cada referencia multiplicado por su costo unitario, ordenando los ítems de mayor a menor valor acumulado y determinando el punto de corte entre categorías según el porcentaje de valor que se desea capturar en cada grupo.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/3.svg')
      
      
     
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Control de insumos y trazabilidad de materiales en la confección
      
      p.mb-3(data-aos='fade-right') La trazabilidad es la capacidad de realizar el seguimiento de un material o insumo durante todo el proceso productivo, desde su ingreso a la bodega hasta su incorporación en la prenda terminada.
      p.mb-5(data-aos='fade-right') En una empresa de confección, la trazabilidad permite:
        
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-2.mb-cus
            .row.justify-content-center.mb-3
              .col-sm-4.col-md-4.col-lg-7
                figure
                  img(src='@/assets/curso/temas/t2/5.png')
            h5.text-center Identificar el origen de posibles defectos. 
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-2.mb-cus
            .row.justify-content-center.mb-3
              .col-sm-4.col-md-4.col-lg-7
                figure
                  img(src='@/assets/curso/temas/t2/6.png')
            h5.text-center Localizar el lote de material utilizado en una producción. 
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-2.mb-cus
            .row.justify-content-center.mb-3
              .col-sm-4.col-md-4.col-lg-7
                figure
                  img(src='@/assets/curso/temas/t2/7.png')
            h5.text-center Detectar problemas de calidad antes de iniciar la confección. 
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-2.mb-cus
            .row.justify-content-center.mb-3
              .col-sm-4.col-md-4.col-lg-7
                figure
                  img(src='@/assets/curso/temas/t2/8.png')
            h5.text-center Tomar acciones preventivas para evitar afectaciones en la producción. 

      p.mb-5(data-aos='fade-right') El control de insumos permite mantener información organizada sobre los materiales utilizados y relacionarlos con las órdenes de producción correspondientes. De esta manera, es posible conocer qué materiales fueron empleados, en qué producción y realizar su seguimiento cuando se presenta alguna situación relacionada con la calidad.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 5.] Etapas del sistema de trazabilidad de insumos en confección industrial
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Etapa]
              th #[b Actividad]
              th #[b Documento de soporte]
              th #[b Responsable]
          tbody
            tr
              td #[b Recepción]
              td Verificación de cantidades, referencias, lotes y condiciones físicas del material recibido contra la orden de compra.
              td Remisión de proveedor, informe de recepción de materiales, orden de compra.
              td Auxiliar de bodega / Inspector de calidad de materiales.
            tr
              td #[b Almacenamiento]
              td Ubicación del material en estantería identificada por referencia, lote y fecha de ingreso; etiquetado con código interno.
              td Kardex de inventario, etiqueta de identificación de lote.
              td Auxiliar de bodega.
            tr
              td #[b Dispensación]
              td Entrega de materiales a los módulos según la orden de producción; registro de salida con vinculación al número de corte.
              td Vale de salida de bodega, orden de producción.
              td Almacenista / Jefe de producción.
            tr
              td #[b Registro de consumo]
              td Actualización del kardex con las cantidades consumidas; cálculo de rendimiento real versus estándar de consumo.
              td Informe de consumo de materiales, reporte de eficiencia de uso.
              td Auxiliar de bodega / Analista de producción.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-9.p-3.p-sm-4.p-md-5.mb-0.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/9.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El indicador de rendimiento de materiales permite comparar el consumo teórico con el consumo real de tela o insumos por unidad producida. Su análisis facilita la identificación de desviaciones frente a los estándares establecidos en la ficha técnica.
          p.mb-0 Un consumo superior al esperado puede evidenciar problemas durante el #[b tendido, trazo, corte o manipulación de los materiales]. De esta manera, el indicador contribuye a identificar el punto del proceso donde se generan pérdidas y facilita la implementación de #[b acciones correctivas y de mejora].












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
