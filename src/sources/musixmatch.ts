import { HTMLElement } from 'node-html-parser'

export const musixmatch = {
  name: 'Musixmatch',
  parse: (html: HTMLElement): Promise<string> => {
    const content = html
      .querySelectorAll('p.mxm-lyrics__content')
      .map(x => x.textContent)
      .join('')
    return Promise.resolve(content)
  },
}
