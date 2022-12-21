type Props = {
    title: string
    children: any
}

const ContentComponent = ({ title, children }: Props): JSX.Element => {
    return (
        <div className="content-box">
            {title && <h4>🚀 {title}</h4>}
            <div>{children}</div>
        </div>
    )
}

export default ContentComponent
