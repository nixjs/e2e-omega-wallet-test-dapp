import { useState, useEffect } from 'react'

type AppProps = Record<string, unknown>

const HeaderComponent = ({}: AppProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('show-aside', isOpen)
    }, [isOpen])

    return (
        <header>
            <div></div>
            <div className="left">
                <button id="hamburger" type="button" onClick={() => setIsOpen(!isOpen)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="hamburgerIcon">
                        <path d="M3 8V6H21V8H3Z" fill="currentColor"></path>
                        <path d="M3 13H21V11H3V13Z" fill="currentColor"></path>
                        <path d="M3 18H21V16H3V18Z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
            <h1>Wallet Connector</h1>
        </header>
    )
}

export default HeaderComponent
