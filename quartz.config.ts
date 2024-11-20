import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Notebook",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "notebook.margenta.art",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Atkinson Hyperlegible",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F8F5F1",
          lightgray: "#DDD9D2",
          gray: "#A9A098",
          darkgray: "#594949",
          dark: "#3E2727",
          secondary: "#633C81",
          tertiary: "#9670A6",
          highlight: "rgba(166, 118, 202, 0.10)",
          textHighlight: "rgba(255, 203, 108, 0.3)",
        },
        darkMode: {
          light: "#3B3A49",
          lightgray: "#524C5F",
          gray: "#736C81",
          darkgray: "#D4CADA",
          dark: "#E5E3EA",
          secondary: "#8077E3",
          tertiary: "#9C82E3",
          highlight: "rgba(44, 6, 98, 0.169)",
          textHighlight: "rgba(106, 62, 171, 0.673)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
