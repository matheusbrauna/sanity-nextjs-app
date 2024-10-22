import type { StructureResolver } from 'sanity/structure'
import { singleton } from './utils'

export const structure: StructureResolver = S =>
  S.list()
    .title('Conteúdo Geral')
    .items([
      S.documentTypeListItem('page-builder').title('Páginas'),
      S.divider(),
      S.documentTypeListItem('navigation').title('Navegação/Links'),
      singleton(S, 'site').title('Configurações gerais do Site'),
      S.divider(),
    ])
