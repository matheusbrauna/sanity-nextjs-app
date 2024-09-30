import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title('Geral')
    .items([
      S.documentTypeListItem('generalConfig').title('Configurações gerais'),
      S.divider(),
      S.documentTypeListItem('faq').title('FAQ - Perguntas frequentes'),
    ])
