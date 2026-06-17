import { redirect } from "next/navigation";

// L'ancien editeur /admin (stockage navigateur local) est remplace par le
// Studio Sanity : tout le contenu se gere desormais sur /studio.
export default function AdminRedirectPage() {
  redirect("/studio");
}
