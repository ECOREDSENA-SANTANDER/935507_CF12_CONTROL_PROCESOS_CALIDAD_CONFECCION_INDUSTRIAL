<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Ficha técnica de producción
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-3 La ficha técnica de producción es el documento que reúne y organiza la información necesaria para fabricar una prenda de acuerdo con las especificaciones establecidas.
          p.mb-4 Su función es servir como guía para producción y control de calidad, asegurando que las personas involucradas en el proceso (corte, confección, terminados y revisión) trabajen con la misma información y bajo criterios definidos.
          .titulo-tercer-nivel.mb-4
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 ¿Qué aporta la ficha técnica?
          p.mb-2 Permite:
          p.mb-0 •	Unificar las especificaciones de fabricación.
          p.mb-0 •	Orientar las diferentes operaciones del proceso.
          p.mb-0 •	Facilitar el control de calidad.
          p.mb-0 •	Reducir errores y diferencias durante la producción.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/1.png')


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cronograma de operaciones, secuencia de procesos y recursos asignados
      
      .row.justify-content-center.mb-5.bg-color-9(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1.pcus-2
          img(src='@/assets/curso/temas/t5/2.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-3(src='@/assets/curso/temas/t5/3.svg')
          p.mb-3 Una vez definidas las especificaciones de la prenda, es necesario organizar qué se debe hacer, en qué orden, cuándo y con qué recursos.
          p.mb-3 El cronograma de operaciones convierte el plan de producción en una programación detallada. En él se establece el inicio y final de cada operación, los recursos requeridos y la secuencia que debe seguir el proceso.
          p.mb-3 En confección, su elaboración considera los tiempos estándar de las operaciones, la capacidad disponible de los módulos de producción y las fechas de entrega establecidas.
          p.mb-0 La ficha técnica define cómo debe fabricarse la prenda, mientras que el cronograma organiza cuándo, en qué orden y con qué recursos se realizará cada operación.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 14.] Contenido mínimo de la ficha técnica de producción en confección industrial
          .tabla-a.color-secundario
            table
              thead
                tr
                  th #[b Sección]
                  th #[b Información que contiene]
                  th #[b Propósito en el control de calidad]
              tbody
                tr
                  td #[b Identificación de la prenda]
                  td Referencia, descripción, temporada, cliente, fecha de elaboración, responsable técnico.
                  td Permite vincular cada unidad inspeccionada con su documento de referencia.
                tr
                  td #[b Materiales e insumos]
                  td Código, descripción, composición, rendimiento por prenda, proveedor aprobado y alternativo.
                  td Garatiza el uso de los materiales aprobados en las cantidades correctas; base para el control de consumos.
                tr
                  td #[b Operaciones de confección]
                  td Listado secuencial de operaciones con código, descripción, máquina requerida, tiempo estándar y parámetros de costura (puntadas por centímetro, tipo de puntada).
                  td Permite verificar que cada operación se ejecuta con los parámetros correctos.
                tr
                  td #[b Especificaciones de calidad]
                  td Tolerancias de medidas por talla, criterios de aceptación y rechazo, defectos críticos, mayores y menores.
                  td Define los criterios de aceptación para la inspección de producto en proceso y terminado.
                tr
                  td #[b Instrucciones de empaque y etiquetado]
                  td Tipo de doblado, etiqueta de contenido, etiqueta de instrucciones de lavado, empaque individual y por caja.
                  td Garantiza el cumplimiento de los requisitos del cliente en la presentación del producto.
                tr
                  td #[b Tiempos y capacidades]
                  td #[i SAM] (#[i Standard Allowed Minutes]) de la prenda, capacidad por turno por módulo, meta diaria.
                  td Base para la planeación de la capacidad y el seguimiento de la eficiencia de producción.

      p.mb-0(data-aos='fade-right') El #[i SAM (Standard Allowed Minutes)] “minutos estándar permitidos” es la suma de los tiempos estándar de todas las operaciones que componen la confección de una prenda. Constituye el dato más importante de la ficha técnica desde la perspectiva de la planeación de la producción, ya que permite calcular la capacidad del módulo, estimar el costo de mano de obra directa y establecer la meta de producción por turno.







      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.1 Diagramas de flujo y rutas críticas
      
      p.mb-5(data-aos='fade-right') El diagrama de flujo del proceso es la representación gráfica de la secuencia de operaciones que conforman la fabricación de una prenda, desde la recepción de la tela hasta el despacho del producto terminado. Empleando la simbología estandarizada de la American Society of Mechanical Engineers (ASME), el diagrama distingue entre operaciones (actividades que transforman el material), transportes (movimientos del material entre puestos), inspecciones (verificaciones de calidad), almacenamientos (esperas planificadas) y demoras (esperas no planificadas).


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 15.] Simbología ASME para diagramas de flujo de proceso en confección
          .tabla-a.color-secundario
            table
              thead
                tr
                  th #[b Símbolo]
                  th #[b Nombre]
                  th #[b Descripción]
                  th #[b Ejemplo en confección]
              tbody
                tr
                  td ○
                  td #[b Operación]
                  td Actividad que transforma, crea o añade valor al material.
                  td Pegar manga, filetear costado, pegar etiqueta.
                tr
                  td →
                  td #[b Tiempo normal (TN)]
                  td Movimiento del material entre puestos de trabajo.
                  td Traslado del paquete de corte al módulo de costura.
                tr
                  td □
                  td #[b Inspección]
                  td Verificación de calidad o cantidad sin transformar el material.
                  td Revisión de costuras, medición de prendas terminadas.
                tr
                  td ▽
                  td #[b Almacenamiento]
                  td Espera planificada del material.
                  td Material en bodega de insumos; prenda terminada en espera de despacho.
                tr
                  td #[b D]
                  td #[b Demora]
                  td Espera no planificada del material o del proceso.
                  td Paquetes en espera porque la siguiente operación está congestionada.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/4.png') 
        .col-sm-12.col-lg-7
          p.mb-0 La ruta crítica de un proceso productivo es la secuencia de operaciones que determina la duración mínima total del proceso; cualquier retraso en una operación de la ruta crítica impacta directamente en la fecha de entrega del pedido. El método #[i CPM (Critical Path Method)] “método de la ruta crítica”, desarrollado por DuPont en la década de 1950, y el #[i PERT (Program Evaluation and Review Technique)], desarrollado por la Marina de los Estados Unidos en el mismo período, son las herramientas estándar para identificar la ruta crítica y gestionar el tiempo de proyectos y procesos productivos complejos.



      .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 3.] Diagrama de flujo de proceso de confección de camiseta deportiva con simbología #[i ASME]


      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-12
          h4.tcus-2.text-center DIAGRAMA DE FLUJO DEL PROCESO DE CONFECCIÓN DE CAMISETA DEPORTIVA
          h4.tcus-3.text-center.mb-0 Secuencia del proceso con simbología #[i ASME]
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-10
          img(src='@/assets/curso/temas/t5/5.svg', alt='Diagrama de flujo del proceso de confección de una camiseta deportiva, con 17 etapas que incluyen inspección, transporte, operaciones de confección, acabado, empaque y despacho, según simbología ASME.')







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
