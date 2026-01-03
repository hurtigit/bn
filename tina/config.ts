import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article",
        label: "Artiklar",
        path: "src/content/articles",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/[åä]/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Rubrik",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Sammanfattning",
            description: "Kort beskrivning som visas i artikellistor",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Publiceringsdatum",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Författare",
          },
          {
            type: "string",
            name: "category",
            label: "Kategori",
            options: [
              { value: "nyheter", label: "Nyheter" },
              { value: "sport", label: "Sport" },
              { value: "kultur", label: "Kultur" },
              { value: "naringsliv", label: "Näringsliv" },
              { value: "kommun", label: "Kommun" },
              { value: "fritid", label: "Fritid" },
              { value: "omsorg", label: "Omsorg" },
              { value: "opinion", label: "Opinion" },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Huvudbild",
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Bildbeskrivning (alt-text)",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Utvald artikel",
            description: "Visa som huvudnyhet på startsidan",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Innehåll",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Sidor",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Sidtitel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "SEO-beskrivning",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Innehåll",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Inställningar",
        path: "src/content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Sajtnamn",
          },
          {
            type: "string",
            name: "tagline",
            label: "Slogan",
          },
          {
            type: "string",
            name: "email",
            label: "Kontakt-email",
          },
          {
            type: "string",
            name: "phone",
            label: "Telefon",
          },
          {
            type: "object",
            name: "social",
            label: "Sociala medier",
            fields: [
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "instagram", label: "Instagram URL" },
            ],
          },
        ],
      },
    ],
  },
});
