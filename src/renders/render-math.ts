import { Math, MathRun, Paragraph } from 'docx'

import { MarkdownDocx } from '../MarkdownDocx'
import { classes } from '../styles'
import { IBlockAttr } from '../types'

export function renderMathBlock(render: MarkdownDocx, text: string, attr: IBlockAttr) {
  return new Paragraph({
    children: [new Math({ children: [new MathRun(text)] })],
    style: attr.style || classes.MathBlock,
  })
}

export function renderMath(text: string) {
  return new Math({ children: [new MathRun(text)] })
}
