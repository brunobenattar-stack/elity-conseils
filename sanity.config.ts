"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas";
import { structure, SINGLETON_TYPES } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Elity Conseils",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // Empeche la creation d'un 2e document pour les singletons (hero...).
    newDocumentOptions: (prev) =>
      prev.filter((item) => !SINGLETON_TYPES.has(item.templateId)),
    // Retire les actions Supprimer / Dupliquer sur les singletons.
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(
            (a) => !["delete", "duplicate", "unpublish"].includes(a.action ?? "")
          )
        : prev,
  },
});
