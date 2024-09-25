import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title('Seu evento')
    .items([
      S.documentTypeListItem('generalConfig').title('Configurações gerais'),
    ])
