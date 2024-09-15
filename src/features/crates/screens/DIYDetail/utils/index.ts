export function stripHtmlTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, '')
}

export function wrapTextWithParagraph(input: string): string {
  return `<p>${input}</p>`
}
