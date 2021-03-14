import { createGlobalStyle } from 'styled-components'

import { variables } from './variables'
import { reset } from './reset'
import { text } from './text'
import { tables } from './tables'
import { form } from './form'

const GlobalStyle = createGlobalStyle`
  ${variables}
  ${reset}
  ${text}
  ${tables}
  ${form}
`
export default GlobalStyle
