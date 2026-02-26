import { Marp } from '@marp-team/marp-core'

/** @type {import('@marp-team/marp-cli').Config} */
const config = {
  engine: Marp,
  html: true,
  options: {
    math: 'katex',
    markdown: {
      breaks: false,
    },
  },
}

export default config
