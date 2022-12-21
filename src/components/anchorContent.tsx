type Props = {
    title: string
    children: any
}

const AnchorContentComponent = ({ title, children }: Props): JSX.Element => {
    return (
        <div className="anchor-content-box">
            {title && (
                <h3 id={title}>
                    <a href={`#${title}`} className="header-anchor">
                        #
                    </a>
                    {title}
                </h3>
            )}
            <div>{children}</div>
        </div>
    )
}

export default AnchorContentComponent
