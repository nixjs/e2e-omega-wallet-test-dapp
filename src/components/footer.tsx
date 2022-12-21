type Props = Record<string, any>

const FooterComponent = ({}: Props): JSX.Element => {
    return (
        <footer className="footer">
            <section className="container">
                <p className="copyright">
                    Licensed under the{' '}
                    <a href="/license" target="_blank" rel="noopener noreferrer" title="MIT License">
                        MIT License
                    </a>
                    .
                </p>
            </section>
        </footer>
    )
}

export default FooterComponent
