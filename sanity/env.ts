// Configuration de connexion au projet Sanity du client.
// Les valeurs par defaut correspondent au projet Elity Conseils ;
// elles restent surchargeables via variables d'environnement (Vercel).

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3fi17iq8";

export const studioUrl = "/studio";
