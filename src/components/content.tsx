type Props = {
    title: string
    children: any
}

const ContentComponent = ({ title, children }: Props): JSX.Element => {
    return (
        <div className="content-box mb-24">
            {title && <h4 className="w500">🚀 {title}</h4>}
            <div
                className="pl-24 pt-16 pb-16 pr-16 radius-4"
                style={{
                    background: '#faebd7',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ContentComponent
