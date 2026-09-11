export default {
  global: {
    Name: 'Gestión de la producción y seguridad industrial',
    Description:
      'El componente formativo gestión de la producción y seguridad industrial aborda los fundamentos técnicos para organizar procesos productivos en la confección industrial, integrando planificación de la producción, gestión de inventarios, trazabilidad, logística interna, distribución de planta, indicadores de productividad, ficha técnica de producción, digitalización, seguridad y salud en el trabajo, gestión de ambientes productivos y tecnologías emergentes.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planificación de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              '<i>Lean manufacturing</i> y <i>just in time</i> aplicados a la confección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Teoría de restricciones en procesos de confección industrial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de inventarios y trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Control de insumos y trazabilidad de materiales en la confección',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Logística interna y distribución de planta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Flujo de materiales en confección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Distribución de planta aplicada a confección',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Relación entre flujo de materiales y distribución de planta',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Criterios para organizar la distribución de planta en confección',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Ejemplo de flujo interno aplicado a una prenda de confección',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Problemas frecuentes en el flujo de materiales',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Recomendaciones para mejorar la logística interna en confección',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores de productividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'OEE (<i>Overall Equipment Effectiveness</i>) en plantas de confección',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ficha técnica de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Diagramas de flujo y rutas críticas',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Digitalización de la producción',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Protocolos de operación segura y elementos de protección personal (EPP)',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Ergonomía aplicada a maquinaria textil',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Clasificación ABC',
      significado:
        'método de organización de inventarios que clasifica materiales e insumos según su participación en el valor total, con el fin de priorizar el control de los elementos de mayor impacto.',
    },
    {
      termino: 'Control de calidad',
      significado:
        'proceso de verificación que permite revisar si materiales, operaciones, prendas en proceso o productos terminados cumplen con las especificaciones técnicas establecidas.',
    },
    {
      termino: 'Cuello de botella',
      significado:
        'operación, máquina, recurso o etapa del proceso que limita la capacidad total de producción y genera acumulaciones o demoras en el flujo de trabajo.',
    },
    {
      termino: 'Distribución de planta',
      significado:
        'organización física de áreas, máquinas, puestos de trabajo, zonas de almacenamiento y recorridos internos para facilitar el flujo productivo.',
    },
    {
      termino: 'EPP',
      significado:
        'elementos de protección personal utilizados para reducir la exposición a riesgos durante operaciones de corte, costura, planchado, cargue, descargue o manejo de insumos.',
    },
    {
      termino: 'Ficha técnica de producción',
      significado:
        'documento que reúne la información necesaria para fabricar una prenda, incluyendo materiales, insumos, operaciones, tiempos, parámetros de calidad, empaque y etiquetado.',
    },
    {
      termino: 'Flujo de materiales',
      significado:
        'recorrido que siguen materias primas, insumos, piezas cortadas, prendas en proceso y productos terminados dentro de una planta de confección.',
    },
    {
      termino: 'Inventario en proceso',
      significado:
        'conjunto de materiales, piezas o prendas que se encuentran en transformación dentro de la planta y aún no han llegado a la etapa de producto terminado.',
    },
    {
      termino: '<i>Just in time</i>',
      significado:
        'sistema de gestión que busca disponer de materiales e insumos en el momento requerido por el proceso, evitando acumulaciones innecesarias y faltantes productivos.',
    },
    {
      termino: '<i>Lean manufacturing</i>',
      significado:
        'enfoque de mejora orientado a eliminar desperdicios, optimizar recursos, reducir tiempos improductivos y aumentar el valor entregado al cliente.',
    },
    {
      termino: '<i>MRP</i>',
      significado:
        'sistema de planificación de requerimientos de materiales que calcula qué insumos se necesitan, en qué cantidad y en qué momento, a partir del plan maestro de producción, la lista de materiales y el inventario disponible.',
    },
    {
      termino: '<i>OEE</i>',
      significado:
        'indicador de efectividad global del equipo que integra disponibilidad, rendimiento y calidad para medir el desempeño real de una máquina o recurso productivo.',
    },
    {
      termino: 'Ruta crítica',
      significado:
        'secuencia de operaciones que determina la duración mínima total de un proceso productivo y cuyo retraso afecta directamente el cumplimiento del pedido.',
    },
    {
      termino: 'SG-SST',
      significado:
        'sistema de gestión de seguridad y salud en el trabajo que organiza acciones, responsabilidades, controles y medidas preventivas para proteger la salud del personal en el entorno laboral.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de rastrear el recorrido de materiales, insumos o productos a lo largo del proceso productivo, desde su ingreso hasta su incorporación en la prenda terminada.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Conference of Governmental Industrial Hygienists. (2024). Threshold limit values for chemical substances and physical agents and biological exposure indices. ACGIH.',
    },
    {
      referencia:
        'Chase, R. B., Aquilano, N. J., & Jacobs, F. R. (2009). Administración de operaciones: Producción y cadena de suministros (12.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Goldratt, E. M., & Cox, J. (1984). The goal: A process of ongoing improvement. North River Press.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (1993). NTC 1461: Higiene y seguridad: Colores y señales de seguridad. ICONTEC.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2007). NTC 5655: Principios para el diseño ergonómico de sistemas de trabajo. ICONTEC.',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo. (2015). Ergonomía: Posturas de trabajo y criterios preventivos. INSST.',
    },
    {
      referencia:
        'Ministerio de Minas y Energía de Colombia. (2010). Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP).',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Diario Oficial n.º 49.523.',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2019). Resolución 0312 de 2019, por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Diario Oficial n.º 50.872.',
    },
    {
      referencia:
        'Ministerio del Trabajo y Seguridad Social de Colombia. (1990). Resolución 1792 de 1990, por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.',
    },
    {
      referencia:
        'Muther, R. (1973). Systematic layout planning (2.ª ed.). Cahners Books.',
    },
    {
      referencia:
        'Nakajima, S. (1988). Introduction to TPM: Total productive maintenance. Productivity Press.',
    },
    {
      referencia:
        'Niebel, B. W., & Freivalds, A. (2009). Ingeniería industrial: Métodos, estándares y diseño del trabajo (12.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2014). ISO 22400-2:2014: Automation systems and integration—Key performance indicators (KPIs) for manufacturing operations management—Part 2: Definitions and descriptions of work in process. ISO.',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (1996). Introducción al estudio del trabajo (4.ª ed.). OIT.',
    },
    {
      referencia:
        'Orlicky, J. (1975). Material requirements planning. McGraw-Hill.',
    },
    {
      referencia:
        'República de Colombia. (2012). Ley 1562 de 2012, por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Diario Oficial n.º 48.488.',
    },
    {
      referencia:
        'Womack, J. P., Jones, D. T., & Roos, D. (1990). The machine that changed the world. Rawson Associates.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
