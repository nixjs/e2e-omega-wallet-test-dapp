import React from 'react'
import { js_beautify, CoreBeautifyOptions } from 'js-beautify'

type AppProps = { data: any }

const options: CoreBeautifyOptions = { indent_size: 4 }

const renderCode = (data: any) => {
    try {
        if (!data) return ''
        if (typeof data === 'string') return js_beautify(data, options)
        return js_beautify(JSON.stringify(data), options)
    } catch (error) {
        return ''
    }
}

const DataViewer = React.memo(({ data }: AppProps): JSX.Element => {
    return (
        <div style={{ background: '#f8f8f8' }}>
            {(data && (
                <pre>
                    <code className="language-javascript" style={{ padding: '1em 0' }}>
                        {renderCode(data)}
                    </code>
                </pre>
            )) || (
                <pre>
                    <code className="language-javascript" style={{ height: '2.5em' }}></code>
                </pre>
            )}
        </div>
    )
})

export default DataViewer
