import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import 'milligram/dist/milligram.css'
import './index.css'
import './style/base.css'
import './style/color.css'
import './style/code.css'
import './style/navigation.css'
import './style/pagination.css'
import './style/footer.css'
import './style/codetree.css'
import './style/switchbox.css'
import './style/dropdown.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>
)
