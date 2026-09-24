<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Tecnologías emergentes en la confección
      
      .bloque-texto-g.bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t9/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-2 La cuarta revolución industrial integra tecnologías digitales, físicas y biológicas que están transformando los procesos productivos. En la industria de la confección, este cambio se refleja en el uso de herramientas digitales, fabricación aditiva y soluciones de automatización inteligente aplicadas al diseño, la producción y la distribución. 
          p.mb-0 Es importante conocer estas tecnologías porque modifican los métodos de verificación, los parámetros de calidad y las herramientas utilizadas durante la inspección de los productos. 
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Confección digital, impresión 3D textil y domótica aplicada a la moda
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t9/2.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t9/3.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La confección digital permite desarrollar el diseño y el patronaje en entornos virtuales, donde es posible simular el comportamiento de los materiales y comprobar el ajuste de las prendas mediante avatares digitales.
            p.mb-3 Además, los archivos generados pueden integrarse con equipos de producción, facilitando la conexión entre las etapas de diseño, corte y confección.
            p.mb-0 Esta integración permite reducir la elaboración de muestras físicas, disminuir el consumo de materiales y acortar el tiempo de desarrollo y lanzamiento de nuevos productos (time-to-market).

      p.mb-5(data-aos='fade-right') Para recordar: la incorporación de tecnologías digitales permite optimizar el desarrollo de productos y, al mismo tiempo, plantea nuevos desafíos para el control y aseguramiento de la calidad.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 22.] Tecnologías emergentes en la confección industrial y su impacto en la producción
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Tecnología]
              th #[b Descripción]
              th #[b Estado de adopción en el sector]
              th #[b Impacto en control de calidad]
          tbody
            tr
              td #[b Confección digital (patronaje y simulación 3D)]
              td Desarrollo de patrones y simulación del ajuste de la prenda en entornos virtuales tridimensionales (#[i software] como Optitex, CLO 3D, Browzwear).
              td Adopción creciente en empresas exportadoras y marcas internacionales; en Colombia, uso inicial en empresas de mediana y gran escala.
              td Los criterios de calidad de ajuste se validan digitalmente antes de la producción del primer prototipo físico, reduciendo reprocesos y ajustes tardíos.
            tr
              td #[b Corte automático con tecnología CNC]
              td Cortadoras CNC controladas por computador que ejecutan el trazo optimizado digitalmente con precisión milimétrica.
              td Ampliamente adoptada en grandes plantas de confección colombianas de exportación.
              td Elimina las variaciones del corte manual; garantiza la precisión dimensional de las piezas como primer paso del control de calidad del proceso.
            tr
              td #[b Impresión 3D textil (fabricación aditiva)]
              td Deposición de materiales termoplásticos o resinas directamente sobre telas o en la fabricación de estructuras tridimensionales con propiedades textiles.
              td Etapa experimental y de producción a pequeña escala; aplicaciones actuales en accesorios, calzado y prendas de alto valor añadido.
              td Requiere el desarrollo de nuevos criterios de calidad específicos para materiales fabricados por adición, aún en proceso de estandarización a nivel internacional.
            tr
              td #[b Costura automatizada (#[i sewbots])]
              td Robots de costura capaces de manipular tela flexible y ejecutar operaciones de ensamble de forma autónoma.
              td Desarrollo tecnológico en fase avanzada de investigación; la manipulación de materiales flexibles representa el mayor desafío técnico pendiente.
              td Cuando se masifique, exigirá la integración de sistemas de visión artificial para el control de calidad en línea, en reemplazo de la inspección manual.
            tr
              td #[b #[i IoT] y monitoreo inteligente aplicado a la producción]
              td Sensores conectados que monitorean en tiempo real las condiciones de temperatura, humedad, ruido, iluminación y el desempeño de cada máquina en la planta.
              td Implementación inicial en empresas colombianas vinculadas a programas de fábricas inteligentes; integración con sistemas de gestión de producción como SAP.
              td Los datos del #[i IoT] permiten detectar desviaciones en las condiciones de producción que afectan la calidad antes de que el defecto se manifieste en la prenda.
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .tarjeta--container.row.mb-0
            .col-md.tarjeta.color-secundario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/t9/4.svg')          
              h2.text-center Domótica aplicada a la producción textil
              p.mb-3.text-white La domótica aplicada a la producción textil integra sensores, actuadores y sistemas de control automatizado para gestionar las condiciones del entorno de trabajo y el funcionamiento de los equipos.

              p.mb-3.text-white Estos sistemas permiten monitorear variables como la temperatura, la humedad, la iluminación y la calidad del aire, así como controlar determinados parámetros de los equipos.

              p.mb-0.text-white Por ejemplo, un sistema automatizado puede activar la extracción de polvo cuando los sensores detectan una concentración elevada de partículas o ajustar la iluminación de los puestos de revisión cuando disminuye la luz natural.
            
            .col-md.tarjeta.bg-color-11.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/t9/5.svg')          
              h2.text-center.text-white Tecnología y control de calidad
              p.mb-3.text-white La incorporación de estas tecnologías en la industria de la confección transforma la manera de realizar el control de calidad. El técnico debe estar preparado para interpretar datos provenientes de sensores, verificar parámetros de calidad en entornos digitales y aplicar criterios de aceptación en procesos automatizados.
              p.mb-0.text-white De esta manera, el control de calidad no desaparece con la automatización; evoluciona junto con los procesos productivos, incorporando nuevas herramientas para supervisar, verificar y mejorar la producción.


      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-12
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.]  Esquema de planta de confección con integración de tecnología #[i IoT] para el monitoreo de producción y condiciones ambientales en tiempo real
          figure.mb-0
            img.mb-4(src='@/assets/curso/temas/t9/6.svg', alt='Planta de confección inteligente que muestra la integración de sensores IoT, monitoreo en tiempo real y conexión con un sistema ERP para optimizar la producción, calidad, mantenimiento, inventarios y despacho.')






















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
