import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
  S.list()
    .title('Geral')
    .items([
      S.documentTypeListItem('hero').title('Hero'),
      S.documentTypeListItem('resource').title('Resource'),
      S.documentTypeListItem('faq').title('FAQ - Perguntas frequentes'),
      S.divider(),
      S.documentTypeListItem('generalConfig').title('Configurações gerais'),
      S.divider(),
    ])
