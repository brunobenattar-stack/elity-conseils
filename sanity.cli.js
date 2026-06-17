import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "3fi17iq8",
    dataset: "production",
  },
  // URL du studio heberge : https://elity-conseils.sanity.studio
  studioHost: "elity-conseils",
});
