import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

export const App = () => (
  <div className="text-3xl">
    <div>Path: /about</div>
    <div>Page: About</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
