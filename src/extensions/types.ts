import { Lexer, Token, TokenizerExtensionFunction } from 'marked'

export type IExtension = {
  name: string
  block: TokenizerExtensionFunction
  inline: TokenizerExtensionFunction
}

export type IExtensionFn = (lexer: Lexer) => IExtension

/**
 * Represents a single footnote.
 */
export type Footnote = {
  id: number
  type: 'footnote'
  raw: string
  label: string
  // refs: FootnoteRef[]
  tokens: Token[]
}

/**
 * Represents a reference to a footnote.
 */
export type FootnoteRef = {
  type: 'footnoteRef'
  raw: string
  id: number
  label: string
}

export type MathBlock = {
  type: 'mathBlock'
  raw: string
  text: string
}

export type Math = {
  type: 'math'
  raw: string
  text: string
}

