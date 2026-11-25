-- Quarto leaves a figure's <img alt=""> empty when it has a caption but no fig-alt.
-- For any image that doesn't set fig-alt explicitly, use its caption as the alt text
-- so screen readers and search engines still get a description.
function Image(el)
  if el.attributes["fig-alt"] == nil then
    local caption = pandoc.utils.stringify(el.caption)
    if caption ~= "" then
      el.attributes["fig-alt"] = caption
    end
  end
  return el
end
