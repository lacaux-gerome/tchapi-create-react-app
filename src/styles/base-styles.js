// base-styles.js
import { injectGlobal } from 'styled-components'
import reset from './global/reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* other styles */
`;

export default baseStyles