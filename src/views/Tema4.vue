<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Indicadores de productividad
      
      p.mb-5(data-aos='fade-right') En la gestión de la producción de confección, los indicadores de productividad son herramientas que permiten transformar el seguimiento del proceso en datos verificables, comparables y útiles para la toma de decisiones. Su adecuada definición, cálculo y análisis periódico constituyen una competencia fundamental, ya que su aplicación trasciende la inspección de la prenda terminada y permite realizar un seguimiento integral del proceso productivo, identificar oportunidades de mejora y orientar acciones para optimizar el desempeño. 

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t4/1.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              h3 Pódcast. Eficiencia, tiempos estándares y balanceo de líneas
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Para profundizar en la eficiencia del proceso productivo, los tiempos estándar y el balanceo de líneas en confección, atienda el pódcast y reconozca cómo estos elementos contribuyen a optimizar las operaciones y mejorar el desempeño de la producción."
              :audio="require_src('@/assets/curso/temas/t4/podcast.mp3')"
          )
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 12.] Fórmulas e indicadores clave de productividad en confección industrial
          .tabla-a.color-secundario
            table
              thead
                tr
                  th #[b Indicador]
                  th #[b Fórmula]
                  th #[b Unidad]
                  th #[b Interpretación]
              tbody
                tr
                  td #[b Tiempo estándar (TS)]
                  td TS = Tiempo normal × (1 + Suplementos).
                  td Minutos por operación.
                  td Tiempo requerido por un operario calificado en condiciones normales, incluidos los suplementos.
                tr
                  td #[b Tiempo normal (TN)]
                  td TN = Tiempo observado × Factor de calificación.
                  td Minutos.
                  td Tiempo de ciclo ajustado al ritmo de un operario promedio.
                tr
                  td #[b Eficiencia del operario (%)]
                  td (Producción real / Producción estándar) × 100.
                  td Porcentaje.
                  td Relación entre lo que el operario produjo y lo que debería haber producido según el tiempo estándar.
                tr
                  td #[b Eficiencia de línea (%)]
                  td (Suma de tiempos estándar de todas las operaciones) / (N.° de puestos × Tiempo disponible) × 100.
                  td Porcentaje.
                  td Grado de aprovechamiento del tiempo disponible en la línea de producción. Valor de referencia industrial: 75 - 85 %.
                tr
                  td #[b Capacidad de producción]
                  td Minutos disponibles por turno / Tiempo estándar de la prenda.
                  td Unidades por turno.
                  td Número máximo de prendas que la línea puede producir en un turno al ritmo estándar.
                tr
                  td #[b #[i Takt time]]
                  td Tiempo disponible de producción / Demanda del cliente (unidades).
                  td Minutos por unidad.
                  td Ritmo al que el sistema debe producir para satisfacer la demanda exacta del cliente.

      p.mb-0(data-aos='fade-right') El balanceo de líneas es el proceso de asignar las operaciones del proceso productivo a los puestos de trabajo de manera que el tiempo total de cada puesto sea lo más cercano posible al #[i takt time], eliminando así los tiempos de espera entre operaciones y maximizando la eficiencia de la línea. En una planta de confección organizada en módulos, el balanceo define cuántos operarios se asignan a cada operación y en qué secuencia se organizan los puestos dentro del módulo.

      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 #[i OEE] (<i>Overall Equipment Effectiveness</i>) en plantas de confección
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p.mb-5 Formalizado por la norma ISO 22400-2:2014 como indicador compuesto de gestión de la efectividad de los equipos en manufactura, el #[i OEE] (efectividad global del equipo) es el producto de tres factores que miden dimensiones independientes del desempeño de la maquinaria: disponibilidad, rendimiento y calidad. Su valor integra en un único número el porcentaje del tiempo productivo planificado que efectivamente genera productos conformes al ritmo esperado.
          .bg-color-3.p-5
            p.mb-4.fw-bold Fórmula #[i OEE] (ISO 22400-2:2014): 
            p.mb-3 #[b #[i OEE] (%) =] disponibilidad (%) × rendimiento (%) × calidad (%). 
            p.mb-3 #[b Donde:] disponibilidad = tiempo de operación / tiempo planificado de producción; rendimiento = (tiempo de ciclo ideal × cantidad producida) / tiempo de operación.
            p.mb-0 Calidad = cantidad de unidades conformes / cantidad total producida.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.svg')  


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 13.] Componentes del #[i OEE] y pérdidas asociadas en maquinaria de confección
          .tabla-a.color-secundario
            table
              thead
                tr
                  th #[b Componente]
                  th #[b Qué mide]
                  th #[b Pérdidas que identifica]
                  th #[b Ejemplo en confección]
              tbody
                tr
                  td #[b Disponibilidad]
                  td Proporción del tiempo planificado en que la máquina estuvo operativa.
                  td Paros no programados, fallas mecánicas, cambios de referencia prolongados.
                  td Fileteadora detenida por rotura de aguja o ajuste de guía de costura no previsto.
                tr
                  td #[b Rendimiento]
                  td Velocidad real de operación en relación con la velocidad teórica máxima.
                  td Microparos, reducción voluntaria de velocidad, material atascado.
                  td Operaria de máquina plana trabajando al 75 % de la velocidad estándar definida.
                tr
                  td #[b Calidad]
                  td Proporción de unidades producidas que cumplen las especificaciones sin reproceso.
                  td Defectos, reprocesos, rechazos, prendas de segunda.
                  td Costuras descuadradas, puntada floja, referencias incorrectas detectadas en revisión.
      p.mb-0(data-aos='fade-right') Un valor de #[i OEE] del 85 % se cita frecuentemente en la literatura industrial como referencia de desempeño de clase mundial para manufactura discreta (Nakajima, 1988). Sin embargo, este valor es una referencia de benchmarking y no un estándar normativo: cada empresa debe establecer sus propias metas en función del tipo de maquinaria, la variedad de referencias que procesa y las condiciones operativas de su planta. En el contexto de la confección colombiana, el seguimiento del #[i OEE] por máquina y por turno permite tomar decisiones informadas sobre mantenimiento preventivo, asignación de carga y programación de paros planificados.
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
