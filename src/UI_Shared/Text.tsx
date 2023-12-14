import { ReactNode } from 'react';

interface Iprops  {
    children:ReactNode
}
function Text({children}:Iprops) {
  return (
    <div>Text</div>
  )
}

export default Text