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
        <div>
            {(data && (
                <pre>
                    <code className="language-javascript">{renderCode(data)}</code>
                </pre>
            )) || <></>}
        </div>
    )
})

export default DataViewer
