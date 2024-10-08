import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
  S.list()
    .title('Geral')
    .items([
      S.documentTypeListItem('page-builder').title('Layout da Página'),
      S.divider(),
      S.documentTypeListItem('generalConfig').title('Configurações gerais'),
      S.divider(),
    ])
