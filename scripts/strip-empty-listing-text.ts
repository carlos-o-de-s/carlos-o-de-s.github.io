// Post-render: remove Quarto's hidden "No matching items" placeholder from listing pages.
// It is display:none, but text extractors (recruiter tools, crawlers) still read it.
// The listing JS checks for the element before using it, so removing it is safe.
const files = (Deno.env.get("QUARTO_PROJECT_OUTPUT_FILES") ?? "")
  .split("\n")
  .filter((f) => f.endsWith(".html"));

const placeholder = /<div class="listing-no-matching d-none">No matching items<\/div>/g;

for (const file of files) {
  const html = Deno.readTextFileSync(file);
  const cleaned = html.replace(placeholder, "");
  if (cleaned !== html) Deno.writeTextFileSync(file, cleaned);
}
