type Props = {
    title: string
}

const AnchorComponent = ({ title }: Props): JSX.Element => {
    if (!title) return <></>
    return (
        <h4 id={title}>
            <a href={`#${title}`} className="header-anchor">
                #
            </a>
            <code>{title}</code>
        </h4>
    )
}

export default AnchorComponent
