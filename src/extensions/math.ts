import type { Lexer } from 'marked'
import { MathBlock, Math as MathToken } from './types'

export default function math(lexer: Lexer) {
  return {
    name: 'math',
    block(src: string) {
      const match = /^\$\$(?:\n)?([\s\S]+?)(?:\n)?\$\$/.exec(src)
      if (!match) return
      const [raw, text] = match
      const token: MathBlock = {
        type: 'mathBlock',
        raw,
        text,
      }
      return token
    },
    inline(src: string) {
      const match = /^\$([^$\n]+?)\$/.exec(src)
      if (!match) return
      const [raw, text] = match
      const token: MathToken = {
        type: 'math',
        raw,
        text,
      }
      return token
    },
  }
}
