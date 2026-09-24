<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Logística interna y distribución de planta
      
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 ¿Cómo se mueve una prenda dentro de una planta de confección?
      
      p.mb-3 Desde que los materiales ingresan a la planta hasta que la prenda está lista para ser despachada, existe un recorrido que debe ser organizado y controlado.
      p.mb-5 La logística interna se encarga de coordinar el movimiento de materiales, insumos, información y productos durante este recorrido. Su propósito es garantizar que cada elemento llegue al lugar indicado, en el momento requerido y en las condiciones necesarias para continuar la producción.
      
      
      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.png')
        .col-sm-12.col-lg-9
          p.mb-4 #[b Por ejemplo], las piezas cortadas, hilos, etiquetas, avíos y prendas en proceso deben desplazarse entre diferentes áreas sin generar esperas, acumulaciones o movimientos innecesarios.
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-7
              .bg-color-2.p-5
                h4.text-white Una planta bien organizada
                p.mb-0.text-white La distribución de planta determina dónde se ubican las máquinas, puestos de trabajo, mesas, zonas de almacenamiento, puntos de inspección y demás espacios necesarios para la producción. Esta distribución debe facilitar el recorrido de los materiales y seguir, en lo posible, la secuencia de elaboración de la prenda. Una organización adecuada favorece la productividad, el orden, la calidad y la seguridad del personal. 
            .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-5
              img(src='@/assets/curso/temas/t3/2.svg')
      
      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Flujo de materiales en confección
      
      p.mb-3 El flujo de materiales representa el recorrido que siguen las materias primas, los insumos, las piezas cortadas, las prendas en proceso y el producto terminado dentro de la planta.
      p.mb-5 De manera general, el recorrido puede seguir esta secuencia:
      
      .container-fluid.py-5.d-flex.justify-content-center.align-items-center.bg-mint.mb-5
        //- Contenedor con scroll horizontal de Bootstrap
        .w-100.overflow-x-auto
          .flow-diagram.mx-auto
            //- Fila Superior (Izquierda a Derecha)
            .step.step-light.chevron Recepción
            .step.step-dark.chevron Almacenamiento
            .step.step-light.chevron Extendido
            .step.step-dark.chevron Corte
            .step.step-light.turn-down Preparación

            //- Fila Inferior (Derecha a Izquierda visualmente)
            .step.step-dark.turn-up Despacho
            .step.step-light.chevron-left Empaque
            .step.step-dark.chevron-left Control de calidad
            .step.step-light.chevron-left Acabados
            .step.step-dark.chevron-left.last-flat Ensamble









      //img.mb-5(src='@/assets/curso/temas/t3/3.svg')
      p.mb-5 Sin embargo, esta ruta puede variar según el diseño de la prenda, el número de piezas, las operaciones requeridas, la maquinaria utilizada y los controles de calidad establecidos.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 ¿Qué permite analizar este flujo?
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-3.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t3/4.svg')
            h5.text-center Dónde se generan esperas o acumulaciones.
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-3.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t3/5.svg')
            h5.text-center Cuáles son los desplazamientos innecesarios.
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-3.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t3/6.svg')
            h5.text-center En qué etapas pueden presentarse retrasos.
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4.hcard-3.mb-cus
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t3/7.svg')
            h5.text-center Cómo puede organizarse mejor la distribución de los espacios. 
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-10
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 Una logística interna eficiente y una distribución de planta adecuada permiten que los materiales avancen de manera ordenada y continua, contribuyendo al cumplimiento de los tiempos y objetivos de producción. 
      
      
      
      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 6.] Etapas del flujo de materiales en una empresa de confección
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Etapa del flujo]
              th #[b Función dentro del proceso]
              th #[b Aplicación en confección]
          tbody
            tr
              td #[b Recepción de materiales]
              td Ingreso y verificación inicial de textiles, hilos, botones, cierres, etiquetas y demás insumos.
              td Confirmar cantidades, referencias, colores, calidad y correspondencia con la orden de producción.
            tr
              td #[b Almacenamiento]
              td Organización temporal de materias primas e insumos.
              td Ubicar telas y avíos según referencia, lote, prioridad de uso o tipo de producto.
            tr
              td #[b Extendido y corte]
              td Preparación del textil y obtención de piezas.
              td Extender la tela, ubicar moldes, cortar piezas y separar tallas o referencias.
            tr
              td #[b Preparación]
              td Organización de piezas antes del ensamble.
              td Agrupar delanteros, espaldas, mangas, cuellos, bolsillos, pretinas o piezas complementarias.
            tr
              td #[b Ensamble]
              td Unión progresiva de las partes de la prenda.
              td Realizar costuras, cierres, pegado de bolsillos, unión de hombros, costados, mangas y demás operaciones.
            tr
              td #[b Terminados]
              td Aplicación de acabados finales.
              td Pulir hilos, hacer ojales, pegar botones, planchar, revisar apariencia y completar detalles.
            tr
              td #[b Control de calidad]
              td Verificación del cumplimiento técnico de la prenda.
              td Revisar medidas, costuras, simetría, limpieza, funcionalidad y especificaciones.
            tr
              td #[b Empaque y despacho]
              td Preparación del producto terminado para entrega.
              td Doblar, etiquetar, empacar, clasificar pedidos y enviar al cliente o almacén.

      p.mb-0 El flujo de materiales debe mantenerse continuo, ordenado y controlado. En confección, una interrupción en el suministro de piezas, hilos, avíos o información técnica puede detener varias operaciones y afectar el cumplimiento de la producción programada.  
      
      
      
      
      
      
      
      
      
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Distribución de planta aplicada a confección
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png')
        .col-sm-12.col-lg-7
          p.mb-4 La distribución de planta en confección organiza los espacios productivos para facilitar el movimiento de materiales, personas e información. Su diseño considera el tipo de prenda, el volumen de producción, la cantidad de operarios, la maquinaria disponible, los tiempos de operación, las áreas de apoyo y los controles necesarios para mantener calidad y eficiencia.
          .bg-color-5.p-4
            p.mb-0 Una planta puede distribuirse por procesos, por producto, por células o módulos de producción. En confección industrial, la elección depende del nivel de especialización, la variedad de referencias, la cantidad de unidades a fabricar y la flexibilidad requerida. Una empresa que produce altos volúmenes de una misma prenda puede utilizar líneas más secuenciales; en cambio, una empresa con referencias variadas puede requerir módulos flexibles.
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-9
          .titulo-sexto.color-secundario
            p.mb-0  #[b Tabla 7.] Tipos de distribución
          .tabla-a.color-secundario.mb-0
            table
              thead
                tr
                  th #[b Tipo de distribución]
                  th #[b Característica principal]
                  th #[b Aplicación en confección]
              tbody
                tr
                  td #[b Distribución por proceso]
                  td Agrupa máquinas o actividades similares en una misma zona.
                  td Área de corte, área de fileteadoras, área de planchado, área de terminados.
                tr
                  td #[b Distribución por producto]
                  td Organiza los puestos según la secuencia de elaboración de una prenda específica.
                  td Línea de producción para camisetas, pantalones, uniformes o vestidos.
                tr
                  td #[b Distribución celular o modular]
                  td Reúne máquinas y operarios alrededor de una familia de productos o proceso completo.
                  td Módulos para prendas superiores, ropa deportiva, dotación o prendas infantiles.
                tr
                  td #[b Distribución en U]
                  td Ubica los puestos de forma cercana para facilitar flujo, control y comunicación.
                  td Células de confección con menor desplazamiento y mejor seguimiento del proceso.
                tr
                  td #[b Distribución mixta]
                  td Combina áreas por proceso con líneas o módulos según necesidad productiva.
                  td Corte y bodega centralizados, con módulos independientes de ensamble y terminados.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png')
      
      .row.justify-content-center.mb-0
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.png')
        .col-sm-12.col-lg-11
            p.mb-0 La distribución de planta debe favorecer recorridos cortos, secuencias claras y reducción de movimientos innecesarios. En confección, una ubicación inadecuada de máquinas, mesas o insumos puede generar congestión, pérdida de tiempo, manipulación excesiva de piezas y dificultades para controlar la calidad.
      
      
      
      
      
      
      
      
      
      
      
      
      
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Relación entre flujo de materiales y distribución de planta
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-cus
          .bg-color-5.px-5.py-4
            p.mb-0 El flujo de materiales permite comprender cómo avanza la producción, mientras que la distribución de planta define por dónde y en qué condiciones se realiza ese avance. Cuando ambos elementos están alineados, las piezas siguen una secuencia lógica, los puestos reciben materiales oportunamente y las áreas de apoyo responden a las necesidades del proceso.
        .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/11.png')
        .col-sm-12.col-lg-4
          img.wcus-4.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t3/12.svg')
          p.mb-0 En una planta de confección, la relación entre flujo y distribución puede analizarse mediante preguntas técnicas: dónde inicia el proceso, qué áreas intervienen, qué recorrido siguen las piezas, qué operaciones generan acumulación, qué máquinas se requieren en cada etapa, qué controles deben aplicarse y qué distancia recorren los materiales antes de convertirse en producto terminado.
      
      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 8.] Aspectos en relación al flujo de materiales y distribución en planta
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Aspecto por analizar]
              th #[b Pregunta orientadora]
              th #[b Incidencia en la planta de confección]
          tbody
            tr
              td #[b Secuencia operacional]
              td ¿Cuál es el orden técnico para elaborar la prenda?
              td Permite ubicar puestos según la ruta real de producción.
            tr
              td #[b Recorrido del material]
              td ¿Qué trayecto siguen telas, piezas cortadas y prendas en proceso?
              td Ayuda a reducir traslados innecesarios y tiempos muertos.
            tr
              td #[b Ubicación de máquinas]
              td ¿Qué equipos requiere cada operación?
              td Facilita organizar máquinas según frecuencia de uso y continuidad del proceso.
            tr
              td #[b Puntos de almacenamiento]
              td ¿Dónde se ubican insumos, piezas y productos en proceso?
              td Evita acumulaciones desordenadas y pérdida de referencias.
            tr
              td #[b Control de calidad]
              td ¿En qué momentos conviene revisar el producto?
              td Permite detectar fallas antes de que avancen a etapas posteriores.
            tr
              td #[b Seguridad y ergonomía]
              td ¿El recorrido permite trabajar con comodidad y menor riesgo?
              td Reduce obstáculos, posturas inadecuadas y manipulación excesiva.

      p.mb-0 La planta resulta más eficiente cuando el material avanza de una etapa a otra sin devoluciones innecesarias. En confección, las devoluciones pueden indicar errores de corte, fallas de costura, falta de insumos, mala ubicación de puestos o deficiencias en la comunicación técnica.
      
      
      
      
      
      
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.4 Criterios para organizar la distribución de planta en confección
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          p.mb-4 La organización de una planta de confección requiere considerar criterios técnicos, productivos y operativos. No basta con ubicar máquinas en un espacio disponible; resulta necesario analizar cómo se desarrolla la prenda, qué operaciones son consecutivas, qué equipos comparten insumos, qué áreas requieren mayor control y qué recorridos favorecen la productividad.
          .bg-color-5.p-4
            p.mb-0 Entre los criterios principales se encuentran la secuencia del proceso, la cercanía entre operaciones relacionadas, la disponibilidad de materiales, la iluminación, la ventilación, la seguridad, el acceso a energía, la circulación interna, el espacio para inventario en proceso y la facilidad para supervisar la producción.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/13.png')
      
      
      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 9.] Criterios de organización
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Criterio de organización]
              th #[b Descripción]
              th #[b Aplicación en confección]
          tbody
            tr
              td #[b Secuencia del proceso]
              td Ubicar las áreas según el orden de elaboración.
              td Corte, preparación, ensamble, terminados, calidad y empaque.
            tr
              td #[b Cercanía operativa]
              td Aproximar puestos que tienen relación directa.
              td Ubicar fileteadora, plana y recubridora según operaciones consecutivas.
            tr
              td #[b Control del inventario en proceso]
              td Definir lugares para piezas pendientes, en proceso y terminadas.
              td Usar carros, bandejas, paquetes o estanterías identificadas.
            tr
              td #[b Acceso a insumos]
              td Facilitar disponibilidad de hilos, agujas, botones, cierres y etiquetas.
              td Ubicar avíos cerca de preparación, ensamble o terminados.
            tr
              td #[b Seguridad del recorrido]
              td Mantener pasillos libres y zonas de circulación definidas.
              td Reducir tropiezos, cruces innecesarios y manipulación insegura.
            tr
              td #[b Ergonomía del puesto]
              td Adecuar espacio, altura y disposición de herramientas.
              td Favorecer posturas estables y movimientos controlados durante la operación.
            tr
              td #[b Supervisión y comunicación]
              td Permitir seguimiento del proceso y resolución rápida de novedades.
              td Facilitar contacto entre operarios, supervisión, calidad y abastecimiento.

      
      p.mb-0 Una distribución adecuada contribuye a mejorar el flujo productivo y a disminuir pérdidas asociadas con desplazamientos, esperas, acumulaciones o reprocesos. Su planificación debe responder al tipo de prenda, al volumen de fabricación y a la capacidad instalada de la empresa.
      
      
      
      
      
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.5 Ejemplo de flujo interno aplicado a una prenda de confección
      
      p.mb-5 Para una prenda básica, como una camiseta, blusa, pantalón o vestido sencillo, el flujo interno puede organizarse mediante una secuencia que conecte áreas y operaciones. Este orden facilita reconocer el recorrido de los materiales y la ubicación de cada etapa dentro de la planta.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 10.] Orden de flujo interno en prendas
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-3 #[b Orden del flujo]
              th #[b Área]
              th #[b Actividad principal]
              th #[b Resultado esperado]
          tbody
            tr
              td 1
              td #[b Bodega de materias primas]
              td Recibir y verificar tela e insumos.
              td Material disponible y registrado.
            tr
              td 2
              td #[b Área de corte]
              td Extender, trazar y cortar piezas.
              td Piezas separadas por talla, color y referencia.
            tr
              td 3
              td #[b Preparación]
              td Agrupar piezas y avíos requeridos.
              td Paquetes completos para ingresar a confección.
            tr
              td 4
              td #[b Ensamble inicial]
              td Unir piezas principales.
              td Estructura básica de la prenda conformada.
            tr
              td 5
              td #[b Ensamble complementario]
              td Incorporar mangas, cuellos, bolsillos, cierres o pretinas.
              td Prenda ensamblada según ficha técnica.
            tr
              td 6
              td #[b Terminados]
              td Pulir, planchar, hacer ojales, pegar botones o ajustar detalles.
              td Prenda terminada para revisión final.
            tr
              td 7
              td #[b Control de calidad]
              td Verificar medidas, costuras, apariencia y funcionalidad.
              td Producto aprobado o separado para corrección.
            tr
              td 8
              td #[b Empaque]
              td Doblar, etiquetar y organizar pedido.
              td Producto listo para despacho.
            tr
              td 9
              td #[b Despacho]
              td Entregar al cliente, almacén o punto de distribución.
              td Pedido cerrado según programación.

      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/14.png')
      p.mb-0 Este ejemplo presenta que el flujo interno no corresponde solamente al movimiento físico de la prenda. También incluye información técnica, control de calidad, disponibilidad de insumos, coordinación entre áreas y cumplimiento de tiempos.

      
      
      
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.6 Problemas frecuentes en el flujo de materiales
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/15.svg')
        .col-sm-12.col-lg-11
            p.mb-0 Las fallas en logística interna suelen manifestarse como retrasos, acumulaciones, desorden, reprocesos o baja productividad. En confección, estos problemas pueden generarse por ausencia de planificación, mala distribución de puestos, información incompleta, inventario desorganizado o falta de coordinación entre áreas.  

      .titulo-sexto.color-secundario(data-aos='fade-right')
        p.mb-0  #[b Tabla 11.] Problemas frecuentes y su efecto en empresas de confección
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Problema frecuente]
              th #[b Posible causa]
              th #[b Efecto en confección]
          tbody
            tr
              td #[b Acumulación de piezas en proceso]
              td Desequilibrio entre operaciones o tiempos de trabajo.
              td Retrasos, congestión y dificultad para controlar avances.
            tr
              td #[b Traslados innecesarios]
              td Máquinas o áreas ubicadas lejos de la secuencia real.
              td Pérdida de tiempo y mayor manipulación del material.
            tr
              td #[b Faltantes de insumos]
              td Deficiencias en preparación o abastecimiento.
              td Paradas de producción y retrasos en entrega.
            tr
              td #[b Mezcla de referencias]
              td Identificación insuficiente de piezas o paquetes.
              td Errores de ensamble, cambios de talla o reprocesos.
            tr
              td #[b Reprocesos frecuentes]
              td Fallas de calidad detectadas tarde.
              td Mayor consumo de tiempo, materiales y mano de obra.
            tr
              td #[b Demoras en despacho]
              td Falta de coordinación entre terminados, calidad y empaque.
              td Incumplimiento de pedidos y afectación del servicio.
      p.mb-0 El control de estos problemas requiere seguimiento constante del proceso. La identificación temprana de cuellos de botella, faltantes o recorridos ineficientes permite realizar ajustes antes de que afecten toda la producción.

      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.7 Recomendaciones para mejorar la logística interna en confección

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-6
          .row.justify-content-center.mb-3.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/17.svg')
            .col-sm-12.col-lg-10
                p.mb-0 Mejorar la logística interna significa organizar el recorrido de los materiales para que cada elemento llegue al lugar correcto, en el momento necesario y con el menor desplazamiento posible.
          .row.justify-content-center.mb-0.bg-color-4.p-3
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/18.svg')
            .col-sm-12.col-lg-9
                p.mb-2 Para lograrlo, es importante:
                ul.lista-ul--color.mb-0 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0  Clasificar y organizar los insumos.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Identificar los paquetes y materiales.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Establecer puntos de abastecimiento.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Definir recorridos claros dentro de la planta.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Mantener ordenados los puestos de trabajo.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Registrar los avances de producción.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/16.png')


      p.mb-5 También es útil implementar señalización de áreas, organización visual, control del inventario en proceso y procedimientos estandarizados. Estas acciones facilitan el seguimiento de los materiales, reducen errores y mejoran la comunicación entre las áreas de corte, ensamble, terminados, calidad y despacho.


      .bloque-texto-g.bloque-texto-g.bg-color-4.p-3.p-sm-4.p-md-5.br-3.br-3
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/19.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3.fw-bold Nota técnica
          p.mb-3 Una distribución de planta eficiente no siempre requiere ampliar el espacio físico. En muchos casos, es posible mejorar el flujo reorganizando los puestos de trabajo, reduciendo recorridos, acercando los insumos críticos, delimitando las zonas de almacenamiento y eliminando movimientos que no aportan valor.

          p.mb-0 Una logística interna bien organizada permite que los materiales avancen de forma continua y ordenada, favoreciendo el cumplimiento de los tiempos, la calidad y la eficiencia del proceso de confección.












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

<style lang="sass">
:root
  --flow-bg: #c9f4e5;
  --flow-dark: #31425b;
  --flow-light: #c9ccd6;
  --flow-text-dark: #1b283d;
  --flow-text-light: #ffffff;

  /* Desktop */
  --col-w: 175px;
  --step-h: 64px;
  --gap-x: 6px;
  --gap-y: 30px;
  --arrow-d: 18px;
  --font-sz: 0.875rem;


/* Breakpoint md/lg de Bootstrap (Tablets) */
@media (max-width: 991.98px)
  :root
    --col-w: 135px;
    --step-h: 52px;
    --gap-x: 4px;
    --gap-y: 24px;
    --arrow-d: 14px;
    --font-sz: 0.72rem;



.bg-mint
  background-color: var(--flow-bg) !important;


/* Grilla del diagrama */
.flow-diagram
  display: grid;
  grid-template-columns: repeat(5, var(--col-w));
  grid-template-rows: var(--step-h) var(--step-h);
  row-gap: var(--gap-y);
  column-gap: var(--gap-x);
  align-items: center;
  width: max-content; /* Previene que las columnas se aplasten en pantallas pequeñas */


/* Colores */
.step-light
  background-color: var(--flow-light);
  color: var(--flow-text-dark);


.step-dark
  background-color: var(--flow-dark);
  color: var(--flow-text-light);


/* Base de cada paso */
.step
  height: var(--step-h);
  font-size: var(--font-sz);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  line-height: 1.2;


/* 1. Flechas superiores hacia la derecha */
.step.chevron
  padding: 0 calc(var(--arrow-d) * 0.8) 0 calc(var(--arrow-d) * 1.4);
  clip-path: polygon(
    0% 0%,
    calc(100% - var(--arrow-d)) 0%,
    100% 50%,
    calc(100% - var(--arrow-d)) 100%,
    0% 100%,
    var(--arrow-d) 50%
  );


/* 2. Preparación (Esquina superior derecha hacia abajo) */
.step.turn-down
  height: calc(var(--step-h) + var(--gap-y));
  margin-top: var(--gap-y);
  align-items: flex-start;
  padding-top: calc(var(--step-h) * 0.35);
  padding-left: 10px;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% calc(100% - calc(var(--gap-y) * 0.5)),
    calc(100% - calc(var(--col-w) * 0.18)) 100%,
    calc(100% - calc(var(--col-w) * 0.36)) calc(100% - calc(var(--gap-y) * 0.5)),
    calc(100% - calc(var(--col-w) * 0.36)) var(--step-h),
    0% var(--step-h),
    var(--arrow-d) calc(var(--step-h) * 0.5)
  );


/* 3. Despacho (Esquina inferior izquierda hacia arriba) */
.step.turn-up
  height: calc(var(--step-h) + var(--gap-y));
  margin-top: calc(var(--gap-y) * -1);
  align-items: flex-end;
  padding-bottom: calc(var(--step-h) * 0.35);
  padding-left: calc(var(--col-w) * 0.12);
  clip-path: polygon(
    calc(var(--col-w) * 0.18) 0%,
    calc(var(--col-w) * 0.36) calc(var(--gap-y) * 0.5),
    calc(var(--col-w) * 0.36) var(--gap-y),
    calc(100% - var(--arrow-d)) var(--gap-y),
    100% calc(var(--gap-y) + calc(var(--step-h) * 0.5)),
    calc(100% - var(--arrow-d)) 100%,
    0% 100%,
    0% calc(var(--gap-y) * 0.5)
  );


/* 4. Flechas inferiores hacia la izquierda */
.step.chevron-left
  padding: 0 calc(var(--arrow-d) * 1.4) 0 calc(var(--arrow-d) * 0.8);
  clip-path: polygon(
    var(--arrow-d) 0%,
    100% 0%,
    calc(100% - var(--arrow-d)) 50%,
    100% 100%,
    var(--arrow-d) 100%,
    0% 50%
  );


/* 5. Ensamble (Borde final plano) */
.step.chevron-left.last-flat
  clip-path: polygon(
    var(--arrow-d) 0%,
    100% 0%,
    100% 100%,
    var(--arrow-d) 100%,
    0% 50%
  );
</style>
