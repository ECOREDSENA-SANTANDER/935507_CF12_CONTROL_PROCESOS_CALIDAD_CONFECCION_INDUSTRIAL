<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Planificación de la producción
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png')
        .col-sm-12.col-lg-9
          p.mb-4 Producir sin planificar equivale a operar sin dirección: el resultado es la acumulación de inventarios, el incumplimiento de fechas de entrega y el desperdicio de recursos que ninguna empresa textil puede permitirse en los mercados actuales. La planificación de la producción es el proceso mediante el cual una organización define qué producir, en qué cantidad, con qué recursos y en qué secuencia temporal, con el propósito de satisfacer la demanda de manera eficiente y rentable.
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-7
              .bg-color-2.p-5
                p.mb-0.text-white En el sector confección, la planificación adquiere características particulares derivadas de la variabilidad de la demanda por temporada, la multiplicidad de referencias y tallas, la dependencia de insumos importados y la alta participación del trabajo manual en los procesos de costura. Estas condiciones hacen que la elección del sistema de planificación sea una decisión estratégica con consecuencias directas sobre la productividad, la calidad y la competitividad de la empresa.
            .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-5
              img(src='@/assets/curso/temas/t1/2.svg')
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 #[i MRP (Material Requirements Planning)] y gestión de requerimientos de materiales
      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t1/3.png')(data-aos='fade-right')
      p.mb-5(data-aos='fade-right') Desarrollada a mediados del siglo XX y formalizada por Joseph Orlicky en IBM durante la década de 1960, la planificación de requerimientos de materiales (#[i MRP], por sus siglas en inglés) transformó la manera en que la industria manufacturera administra sus necesidades de insumos. El #[i MRP] es un sistema de información que calcula automáticamente cuánto material se necesita, cuándo se necesita y en qué cantidades, a partir de tres fuentes de datos: el plan maestro de producción (#[i MPS]), la lista de materiales (#[i BOM, Bill of Materials]) y los registros de inventario.
      
      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Componentes del sistema #[i MRP] y su función en la confección industrial
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Componente]
              th #[b Descripción]
              th #[b Aplicación en confección]
          tbody
            tr
              td Plan maestro de producción (#[i MPS])
              td Define las cantidades y fechas de producción para cada referencia en un horizonte de tiempo
              td Programa la producción de prendas por referencia, talla y color según los pedidos confirmados.
            tr
              td Lista de materiales (#[i BOM])
              td Especifica todos los insumos, subcomponentes y materias primas requeridos para producir una
              td Detalla telas, hilos, botones, cierres, etiquetas y accesorios por prenda y por talla.
            tr
              td Registro de inventario
              td Contiene el estado actualizado de las existencias, incluyendo cantidades disponibles, en tránsito y
              td Controla el #[i stock] de telas, insumos de costura y avíos en bodega y en proceso.
            tr
              td Órdenes de producción
              td Documentos generados por el sistema que indican qué producir, cuánto y cuándo iniciar cada lote.
              td Instrucciones para la línea de corte, costura y acabados con fechas y cantidades definidas.
            tr
              td Órdenes de compra
              td Solicitudes automáticas de reabastecimiento generadas cuando el sistema detecta faltantes
              td Adquisición planificada de telas e insumos con tiempos de entrega de proveedores incorporados.

      p.mb-5(data-aos='fade-right') El principal aporte del #[i MRP] a la gestión de la confección consiste en transformar la gestión reactiva de insumos (comprar cuando ya no hay) en una gestión anticipada y documentada. El sistema calcula hacia atrás desde la fecha de entrega requerida y determina con precisión cuándo deben estar disponibles cada tela, hilo y accesorio para que la producción no se detenga. Para una empresa de confección que maneja decenas de referencias simultáneamente con proveedores que tienen tiempos de entrega variables, esta capacidad de anticipación es determinante.

      
      .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 1.]  Estructura del sistema #[i MRP] y flujo de información entre sus componentes principales
      img.mb-5(src='@/assets/curso/temas/t1/4.svg', lat='Diagrama de flujo del sistema MRP que muestra sus entradas, procesamiento y componentes principales: MPS, BOM y registro de inventario.')(data-aos='fade-right')
      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        p.mb-0 El tiempo de entrega (#[i lead time]) de cada insumo es el parámetro más crítico del #[i MRP] en confección. Si los tiempos de entrega de las telas importadas no están correctamente registrados en el sistema, los cálculos del #[i MRP] generarán órdenes de compra tardías que paralizarán la producción.

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 #[i Lean manufacturing] y #[i just in time] aplicados a la confección
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p.mb-4 Ninguna metodología ha influido más en la industria manufacturera del siglo XX que el sistema de producción Toyota, del que derivaron tanto el #[i lean manufacturing] como el #[i just in time], desarrollado por Taiichi Ohno en Japón durante las décadas de 1950 y 1960, y sistematizado posteriormente bajo el concepto de #[i lean manufacturing] por Womack, Jones y Roos en el Massachusetts Institute of Technology (Womack et al., 1990), este enfoque parte de una premisa fundamental que toda actividad que no agrega valor al producto desde la perspectiva del cliente es un desperdicio que debe eliminarse.
          .bg-color-3.p-4
            p.mb-0 En la confección industrial, los siete tipos de desperdicio identificados por el sistema Toyota se manifiestan de forma específica; la sobreproducción se materializa en prendas terminadas que permanecen en bodega sin despachar, los tiempos de espera ocurren cuando una mesa de costura aguarda que la anterior termine su operación, el transporte innecesario se produce cuando los paquetes de corte recorren distancias excesivas entre módulos, el inventario en exceso se acumula cuando la bodega de insumos supera las necesidades reales del plan de producción, Los defectos, el reproceso y el movimiento innecesario de operarios completan el cuadro de desperdicios que la filosofía #[i lean] propone eliminar de manera sistemática y continua.
        .col-sm-12.col-lg-4.d-none.d-lg-block.bg-color-5
          img(src='@/assets/curso/temas/t1/5.svg')

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Herramientas #[i lean manufacturing] y su aplicación en plantas de confección
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Herramienta]
              th #[b Definición técnica]
              th #[b Aplicación en confección]
          tbody
            tr
              td 5S
              td Metodología japonesa de organización del puesto de trabajo; #[i seiri] (clasificar), #[i seiton] (ordenar), #[i seiso] (limpiar), #[i seiketsu] (estandarizar), #[i shitsuke] (disciplinar).
              td Organización de mesas de corte, gavetas de insumos, cajas de herramientas y áreas de tránsito en la planta.
            tr
              td #[i Kaizen]
              td Mejora continua e incremental impulsada por los propios trabajadores del proceso mediante análisis y propuestas de mejora.
              td Grupos de mejora en módulos de costura que identifican y eliminan movimientos innecesarios y tiempos improductivos.
            tr
              td #[i Value Stream Mapping] (#[i VSM])
              td Representación gráfica del flujo de materiales e información desde el proveedor hasta el cliente, que permite identificar desperdicios y proponer el
              td Mapeo del flujo desde la recepción de tela hasta el despacho de la prenda terminada para identificar cuellos de botella.
            tr
              td #[i Kanban]
              td Sistema de señales visuales que regula el flujo de materiales entre etapas del proceso, produciendo solo lo que la siguiente etapa demanda.
              td Tarjetas de control entre las estaciones de costura que limitan el inventario en proceso (#[i WIP]) y regulan el ritmo de
            tr
              td #[i Takt time]
              td Tiempo disponible de producción dividido entre la demanda del cliente; define el ritmo al que el proceso debe producir para satisfacer los pedidos
              td Cálculo del ritmo de producción por operación para el balanceo de líneas en módulos de costura.
            tr
              td SMED
              td #[i Single Minute Exchange of Die]: reducción del tiempo de preparación y alistamiento de máquinas a menos de diez minutos.
              td Reducción del tiempo de cambio de referencia en máquinas planas, fileteadoras y collaretera entre pedidos.

      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0 El #[i just in time (JiT)], como componente central del sistema Toyota, establece que los materiales e insumos deben estar disponibles exactamente cuando se necesitan, ni antes ni después. En la confección, esto implica sincronizar los pedidos de tela con el inicio de los módulos de corte, coordinar la entrega de insumos de costura con el avance de la producción y gestionar las relaciones con proveedores sobre la base de la confiabilidad y no exclusivamente del precio. La implementación del #[i JiT] en confección no elimina los inventarios, sino que los dimensiona con precisión a partir de la demanda real y de los tiempos de entrega verificados.

      

      .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 2.] Módulo de costura organizado bajo principios #[i lean manufacturing] con control visual de producción
      img.mb-0(src='@/assets/curso/temas/t1/6.svg', alt='Ilustración de una planta de confección con distribución en U, tablero Kanban, puestos 5S, flujo continuo, reducción de desperdicios, indicador de takt time y balanceo del trabajo.')(data-aos='fade-right')

     
      
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Teoría de restricciones en procesos de confección industrial
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/7.png')
        .col-sm-12.col-lg-9
          p.mb-4 Formulada por el físico israelí Eliyahu M. Goldratt en su obra The Goal (1984), la teoría de restricciones (#[i TOC, Theory of Constraints]) ofrece un enfoque diferente al #[i lean manufacturing], en lugar de mejorar todos los procesos simultáneamente, propone identificar y gestionar el cuello de botella del sistema productivo, es decir, la operación que limita la capacidad total de producción.
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-7
              .bg-color-2.p-5
                p.mb-0.text-white En una planta de confección, el cuello de botella puede estar en la operación de costura más compleja de la prenda (por ejemplo, el pegado de mangas o la confección de bolsillos), en la máquina más especializada con menor disponibilidad, o en la etapa de control de calidad cuando su capacidad es inferior al ritmo de producción de las líneas. La #[i TOC] propone cinco pasos para gestionar este cuello de botella de manera sistemática.


            .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-5
              img(src='@/assets/curso/temas/t1/8.svg')


      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 3.] Los cinco pasos de la teoría de restricciones aplicados a la confección
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Paso]
              th #[b Acción]
              th #[b Ejemplo en confección]
          tbody
            tr
              td 1. Identificar la restricción
              td Determinar cuál operación o recurso limita el flujo total de producción.
              td La estación de fileteado procesa 80 prendas / hora mientras las demás producen 120 prendas / hora.
            tr
              td 2. Explotar la restricción
              td Maximizar el uso del cuello de botella sin inversión adicional.
              td Asegurar que la fileteadora nunca esté parada por falta de material; reasignar un operario de apoyo.
            tr
              td 3. Subordinar todo lo demás
              td Regular el ritmo de las demás operaciones para que no superen la capacidad del cuello de botella.
              td Las mesas de corte producen al ritmo de la fileteadora para evitar acumulación de inventario en proceso.
            tr
              td 4. Elevar la restricción
              td Aumentar la capacidad del cuello de botella cuando los pasos anteriores no son suficientes.
              td Adquirir una segunda fileteadora o implementar turno adicional en esa operación específica.
            tr
              td 5. Repetir el proceso
              td Una vez resuelta la restricción, identificar la nueva restricción del sistema.
              td Resuelta la fileteadora, el nuevo cuello de botella se traslada a la operación de ribeteado.

      .cajon.color-primario.p-4.mb-0(data-aos='fade-right')
        p.mb-0 La contribución de la #[i TOC] a la gestión de la confección reside en su capacidad de concentrar los esfuerzos de mejora en el punto del proceso que realmente determina la capacidad del sistema. Mejorar una operación que no es el cuello de botella no incrementa la producción total, solo genera más inventario en proceso antes del punto restrictivo. Esta lógica, contraintuitiva para muchos gestores de planta, tiene consecuencias prácticas directas sobre las decisiones de inversión, asignación de personal y secuenciación de pedidos.















        

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
