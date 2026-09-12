<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Gestión de ambientes productivos
      
      .bloque-texto-g.bloque-texto-g.bg-color-9.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t8/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 Un ambiente productivo bien gestionado no es el resultado de decisiones estéticas: es consecuencia de decisiones técnicas tomadas con criterio normativo y orientadas simultáneamente hacia la seguridad de los trabajadores, la calidad del producto y la eficiencia del proceso. La distribución de las áreas, la señalización de seguridad, el control del ruido, el manejo del polvo de fibra textil y las condiciones de iluminación son variables del entorno físico que inciden directamente en la salud, el desempeño y la satisfacción del personal en la planta de confección.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Distribución de áreas, señalización y control ambiental: ruido, polvo e iluminación

      p.mb-5(data-aos='fade-right') La distribución de las áreas en una planta de confección debe responder a un principio de separación funcional que garantice la seguridad de los desplazamientos, el control del flujo de materiales y la delimitación de las zonas de riesgo. El Decreto 1072 de 2015 (Decreto Único Reglamentario del Sector Trabajo) y las normas técnicas colombianas aplicables establecen los requisitos mínimos para el diseño y la señalización de los ambientes de trabajo industrial.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 20.] Áreas funcionales en una planta de confección y criterios de distribución
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Área]
              th #[b Función]
              th #[b Criterios de ubicación y separación]
              th #[b Señalización requerida]
          tbody
            tr
              td #[b Bodega de insumos y materias primas]
              td Almacenamiento de telas, hilos, avíos y materiales de empaque.
              td Adyacente al área de corte; acceso controlado; ventilación adecuada para prevenir acumulación de polvo de fibra.
              td Señal de área restringida; identificación de estanterías; rutas de evacuación.
            tr
              td #[b Área de corte]
              td Tendido, trazado y corte de tela en capas.
              td Adyacente a bodega de insumos; mesas de corte con espacio lateral mínimo de 80 cm para circulación del operario.
              td Señal de peligro por elementos cortantes; EPP obligatorio; demarcación del área de trabajo.
            tr
              td #[b Módulos de costura]
              td Operaciones de ensamble de las prendas.
              td Distribución modular con pasillos de circulación de mínimo 90 cm entre módulos; acceso para supervisión y calidad.
              td Identificación de cada puesto y operación; indicadores visuales de producción.
            tr
              td #[b Área de terminados y revisión]
              td Deshilado, ojalado, botonado, planchado e inspección final.
              td Separada de los módulos de costura para evitar contaminación por polvo de fibra durante la revisión.
              td Señal de zona de calor (plancha); señalización de ruta de evacuación.
            tr
              td #[b Área de empaque y despacho]
              td Doblado, empaque individual, empaque en caja y alistamiento para despacho.
              td Adyacente al área de terminados; acceso directo a zona de cargue sin cruzar el área productiva.
              td Demarcación de zona de almacenamiento temporal de producto terminado; señal de cargue.
            tr
              td #[b Servicios sanitarios y bienestar]
              td Vestieres, baterías sanitarias, comedor, enfermería.
              td Separados del área productiva; uno por género; proporción mínima según Decreto 1072 de 2015.
              td Señalización de servicios; rutas de evacuación.
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t8/2.png')(data-aos='fade-right')
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t8/3.svg')
        .col-sm-12.col-lg-8
          .bg-color-2.p-5
            p.mb-4.text-white La señalización de seguridad en una planta de confección debe considerar los criterios establecidos en la NTC 1461, Higiene y seguridad. Colores y señales de seguridad, que define el uso de colores, formas y señales para comunicar situaciones relacionadas con la seguridad y la salud.

            p.mb-4.text-white En la planta, las señales permiten identificar peligros, indicar acciones de obligatorio cumplimiento, señalar prohibiciones y orientar hacia condiciones o zonas seguras, como salidas de emergencia y equipos de primeros auxilios.

            p.mb-0.text-white Para que cumplan su función, deben ubicarse en lugares visibles, claramente identificados y libres de obstáculos, de manera que el mensaje pueda ser reconocido y comprendido oportunamente.



      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 21.] Factores de riesgo ambiental en la confección industrial y valores límite de referencia
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Factor ambiental]
              th #[b Fuente en la confección]
              th #[b Valor límite de referencia]
              th #[b Norma]
          tbody
            tr
              td #[b Ruido]
              td Maquinaria de costura (plana, fileteadora, collaretera) y cortadoras eléctricas.
              td 85 dB(A) como límite de exposición para 8 horas de jornada; por encima de este nivel se requiere protección auditiva.
              td Resolución 1792 de 1990 del Ministerio de Trabajo y Seguridad Social de Colombia.
            tr
              td #[b Polvo de fibra textil]
              td Corte de tela, fileteado, manejo de insumos fibrosos.
              td Polvo inerte: 10 mg/m³ como concentración máxima permisible (CMP) en 8 horas; fibras: 1 fibra/cm³.
              td ACGIH Threshold Limit Values (TLV) para fibras sintéticas, adoptados como referencia técnica en Colombia.
            tr
              td #[b Temperatura]
              td Calor generado por maquinaria y prensas; condiciones climáticas de la región.
              td Temperatura efectiva entre 16 °C y 24 °C para trabajo ligero o moderado en posición sedente.
              td NTC 5655; ISO 7730 (ambientes térmicos moderados).
            tr
              td #[b Iluminación general de la planta]
              td Deficiencia lumínica en naves industriales sin luz natural suficiente.
              td Mínimo 200 lux para áreas de tránsito; 500 lux para puestos de costura y revisión; 1000 lux para inspección de calidad de detalle.
              td RETILAP (Reglamento Técnico de Iluminación y Alumbrado Público) de Colombia; NTC 5655.

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t8/4.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t8/5.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 El control del polvo de fibras textiles requiere especial atención en las plantas de confección, ya que la exposición prolongada a determinados tipos de polvo puede afectar la salud respiratoria de los trabajadores.
            p.mb-0 Las principales medidas de control incluyen la instalación de sistemas de extracción localizada en áreas donde se genere polvo, como las mesas de corte y determinadas máquinas de confección. También es importante realizar la limpieza frecuente de las superficies mediante métodos húmedos o sistemas de aspiración, evitando el uso de aire comprimido o el soplado, ya que estas prácticas pueden dispersar nuevamente las partículas en el ambiente.

      p.mb-0(data-aos='fade-right') Cuando los controles implementados no permiten mantener la exposición dentro de los niveles establecidos, debe evaluarse el uso de protección respiratoria adecuada, de acuerdo con el tipo de contaminante, el nivel de exposición y los resultados de la evaluación del riesgo.











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
