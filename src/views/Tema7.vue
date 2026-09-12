<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Seguridad y salud en el trabajo
      
      p.mb-5(data-aos='fade-right') Las condiciones de trabajo en la industria de la confección presentan riesgos específicos que el marco normativo colombiano regula con precisión creciente. Agujas en movimiento a alta velocidad, tijeras, prensas de calor, ruido continuo de maquinaria, posturas sostenidas, movimientos repetitivos y el manejo de productos químicos en los procesos de tinción y acabado configuran un entorno de trabajo que exige la implementación sistemática de un sistema de gestión de seguridad y salud en el trabajo efectivo y verificable.

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-tercer-nivel.mb-5
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Marco normativo: Ley 1562 de 2012 y Resolución 0312 de 2019
          p.mb-4 #[b El Sistema General de Riesgos Laborales (SGRL)] en Colombia cuenta con un marco normativo orientado a la prevención de accidentes de trabajo y enfermedades laborales y a la protección de la seguridad y salud de los trabajadores.
          
          .bg-color-3.p-4
            p.mb-5 La #[bLey 1562 de 2012] modificó el Sistema General de Riesgos Laborales y estableció que el concepto de #[b salud ocupacional] se entendería como #[b Seguridad y Salud en el Trabajo (SST)]. Asimismo, determinó que el Programa de Salud Ocupacional se entendería como el #[b Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST)], concebido como un proceso lógico y por etapas, basado en la mejora continua.
            p.mb-0 La #[b Resolución 0312 de 2019], expedida por el Ministerio del Trabajo el 13 de febrero de 2019, estableció los #[b Estándares Mínimos del SG-SST] que deben cumplir los empleadores y contratantes, de acuerdo con las características de cada organización. La norma establece requisitos diferenciados considerando, entre otros aspectos, el #[b número de trabajadores y la clase de riesgo].
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t7/1.svg')
      
      p.mb-5(data-aos='fade-right') De esta manera, la normativa proporciona criterios para implementar, verificar y mejorar las condiciones de seguridad y salud en el trabajo, promoviendo una gestión preventiva acorde con las características y necesidades de cada organización.
      
      
      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 17.] Estándares mínimos del SG-SST según tamaño de empresa - Resolución 0312 de 2019
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Clasificación de la empresa]
              th #[b N.° de estándares mínimos]
              th #[b Nivel de riesgo aplicable]
              th #[b Criterios principales]
          tbody
            tr
              td #[b Hasta 10 trabajadores, riesgo I, II o III]
              td 7 estándares.
              td Bajo a medio.
              td Afiliación al SGRL, responsable SST, plan de trabajo anual, capacitaciones, evaluación médica, botiquín, medidas de prevención.
            tr
              td #[b Entre 11 y 50 trabajadores, riesgo I, II o III]
              td 21 estándares.
              td Bajo a medio.
              td Política SST, objetivos, plan anual, programa de capacitación, comité paritario (COPASST), evaluaciones médicas periódicas, inspecciones de seguridad.
            tr
              td #[b Más de 50 trabajadores o cualquier empresa con riesgo IV o V]
              td 60 estándares.
              td Alto (riesgo IV y V incluye confección industrial con maquinaria).
              td Sistema completo: política, objetivos, recursos, gestión de peligros, programa de medicina preventiva, plan de emergencias, auditorías, mejora continua.

      
      .cajon.color-acento-contenido.p-5.mb-0
        p.mb-0 Para la industria de la confección industrial, la clasificación de riesgo determina el nivel de exigencia normativa. Las plantas que operan maquinaria de corte automatizada, prensas de calor y equipos de costura industrial con operarios expuestos a riesgos mecánicos y ergonómicos califican típicamente en los niveles III o IV, lo que implica el cumplimiento del conjunto completo de 60 estándares mínimos establecidos por la Resolución 0312 de 2019.
      
      
      
      
      
      
      Separador
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 7.1 Protocolos de operación segura y elementos de protección personal (EPP)
      
      p.mb-5(data-aos='fade-right') Un protocolo de operación segura (POS) es el documento que establece la secuencia correcta y segura de pasos para ejecutar una tarea específica, incluyendo los riesgos asociados, los EPP requeridos y las medidas de control aplicables. En la confección industrial, cada operación de maquinaria (plana, fileteadora, collaretera, prensa de calor, cortadora eléctrica) debe contar con su propio POS, disponible en el puesto de trabajo y conocido por el operario antes de iniciar sus funciones.
      
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 18.] Estándares mínimos del SG-SST según tamaño de empresa y nivel de riesgo
          .tabla-a.color-secundario.mb-0
            table
              thead
                tr
                  th #[b Operación]
                  th #[b Riesgo principal]
                  th #[b EPP requerido]
                  th #[b Norma técnica de referencia]
              tbody
                tr
                  td #[b Corte manual (tijeras, cuchilla)]
                  td Corte accidental de dedos y manos.
                  td Guante de malla anticorte en la mano de sujeción del material.
                  td NTC 3221 (guantes de protección).
                tr
                  td #[b Cortadora eléctrica circular o de banda]
                  td Atrapamiento de dedos por la hoja cortante.
                  td Guante de malla anticorte, protector de dedos de acero, calzado de seguridad con puntera reforzada.
                  td NTC 3221; NTC 1741 (calzado de seguridad).
                tr
                  td #[b Operación de máquinas de coser]
                  td Punción por aguja, atrapamiento de dedos.
                  td Gafas de seguridad (protección contra rotura de aguja), calzado con suela antideslizante.
                  td NTC 3610 (gafas de seguridad).
                tr
                  td #[b Prensa de calor / plancha industrial]
                  td Quemaduras por contacto con superficies calientes, vapores.
                  td Guantes de protección térmica, protección respiratoria básica si hay vapores de adhesivos.
                  td NTC 3221; resolución MSPS sobre agentes químicos.
                tr
                  td #[b Bodega e insumos (cargue/descargue)]
                  td Caída de objetos, golpes por manejo de rollos de tela.
                  td Calzado de seguridad con puntera reforzada, faja lumbar cuando se manejan cargas mayores de 15 kg de forma manual.
                  td NTC 1741.
                tr
                  td #[b Área de tinción / acabados químicos]
                  td Contacto dérmico con productos químicos, inhalación de vapores.
                  td Guantes de nitrilo, gafas de seguridad, mascarilla con filtro apropiado, delantal de protección química.
                  td Decreto 1072 de 2015; fichas de seguridad de cada producto (SDS).

          
      
      
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 7.2 Ergonomía aplicada a maquinaria textil
      
      p.mb-5(data-aos='fade-right') La maquinaria de confección industrial presenta características específicas que condicionan la postura y los movimientos del operario durante toda la jornada laboral. La altura de la superficie de trabajo de la máquina de coser plana, la posición del pedal, la ubicación del porta-bobinas, la distancia entre el ojo del operario y el punto de costura, y la fuerza de empuje requerida para guiar el material son variables ergonómicas que determinan la carga física acumulada del trabajo de costura.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10  
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 19.] Parámetros ergonómicos de referencia para puestos de maquinaria textil
          .tabla-a.color-secundario.mb-0
            table
              thead
                tr
                  th #[b Parámetro]
                  th #[b Valor de referencia]
                  th #[b Consecuencia de incumplimiento]
                  th #[b Medida de ajuste]
              tbody
                tr
                  td #[b Altura de superficie de costura]
                  td 68 - 76 cm desde el suelo (ajustable según la talla del operario).
                  td Postura de hombros elevados o columna en flexión excesiva; lumbalgia y cervicalgia.
                  td Mesa regulable en altura o uso de plataforma elevada para operarios de menor estatura.
                tr
                  td #[b Altura del asiento]
                  td Rodillas a 90° con los pies apoyados en el pedal o en una superficie.
                  td Compresión de muslos, fatiga de piernas, varices.
                  td Silla regulable con apoyo lumbar; reposapiés cuando el pedal no permite apoyo completo.
                tr
                  td #[b Distancia visual al punto de costura]
                  td 30 - 50 cm entre el ojo del operario y la aguja.
                  td Fatiga visual, postura de cuello en flexión para aproximarse; cervicalgia.
                  td Ajuste de la posición del asiento y la inclinación de la mesa; iluminación localizada adecuada.
                tr
                  td #[b Iluminación en el puesto]
                  td Mínimo 500 lux en el punto de costura (NTC 5655).
                  td Fatiga visual, errores de costura, aumento de defectos por falta de visibilidad del material.
                  td Lámpara de tarea con articulación orientable integrada en la máquina o en el puesto.
                tr
                  td #[b Frecuencia de pausas activas]
                  td Pausa mínima de 5-10 minutos cada 45-60 minutos de trabajo continuo.
                  td Acumulación de fatiga muscular; incremento del riesgo de lesiones musculoesqueléticas.
                  td Programa de pausas activas con ejercicios de estiramiento documentados en el SG-SST.

      p.mb-0(data-aos='fade-right') La vigilancia epidemiológica de las lesiones musculoesqueléticas es un componente obligatorio del programa de medicina preventiva del SG-SST en plantas de confección clasificadas en riesgo III o superior. Este programa debe incluir la aplicación periódica de cuestionarios validados de morbilidad sentida, exámenes médicos ocupacionales con enfoque en miembro superior y columna, y el análisis de los registros de ausentismo para identificar tendencias y orientar las acciones preventivas con base en evidencia.

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
