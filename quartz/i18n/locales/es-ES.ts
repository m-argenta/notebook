import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Nota",
    description: "...",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Resumen",
      info: "Info",
      todo: "Checklist",
      tip: "Consejo",
      success: "Completado",
      question: "Pregunta",
      warning: "Advertencia",
      failure: "Error",
      danger: "Cuidado",
      bug: "Bug",
      example: "Ejemplo",
      quote: "Cita",
    },
    backlinks: {
      title: "Notas relacionadas",
      noBacklinksFound: "Esta página está suelta 🍂",
    },
    themeToggle: {
      lightMode: "No veo nada",
      darkMode: "Me quedo ciega",
    },
    explorer: {
      title: "Archivos",
    },
    footer: {
      createdWith: "Creado con",
    },
    graph: {
      title: "Gráfico",
    },
    recentNotes: {
      title: "Actualizaciones",
      seeRemainingMore: ({ remaining }) => `Ver ${remaining} más →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Extraído de ${targetSlug}`,
      linkToOriginal: "Enlace al original",
    },
    search: {
      title: "Buscar",
      searchBarPlaceholder: "",
    },
    tableOfContents: {
      title: "Esquema de contenidos",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes}m de lectura`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Actualizaciones",
      lastFewNotes: ({ count }) => `Últimas ${count} actualizaciones`,
    },
    error: {
      title: "Error",
      notFound: "Esta página ha desaparecido en extrañas circunstancias.",
      home: "Aceptar con resignación →",
    },
    folderContent: {
      folder: "Carpeta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 nota en en esta carpeta." : `${count} notas en esta carpeta.`,
    },
    tagContent: {
      tag: "Etiqueta",
      tagIndex: "Todas las etiquetas",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "(1 nota)" : `(${count} notas)`,
      showingFirst: ({ count }) => `Mostrando las primeras ${count} etiquetas encontradas... 🔍`,
      totalTags: ({ count }) =>
      count === 1 ? "Todavía hay solo un tipo de etiqueta diferente. 🐌" : `Se han encontrado ${count} etiquetas diferentes.`,
    },
  },
} as const satisfies Translation
