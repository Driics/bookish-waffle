import py from "react-syntax-highlighter/dist/cjs/languages/hljs/python"
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash"
import {Light as SyntaxHighlighter} from "react-syntax-highlighter"
import {FileIcon, TerminalIcon} from "lucide-react";
import monokaiCustomTheme from './CodeBlock.utils'

export interface CodeBlockProps {
    lang: 'py' | 'bash'
    startingLineNumber?: number
    hideCopy?: boolean
    showLineNumbers?: boolean
    className?: string
    children?: string
    size?: 'small' | 'medium' | 'large'
    background?: string
}

const CodeBlock = (props: CodeBlockProps) => {
    const firstLine = props.children ? props.children.split('\n')[0] : ''

    let filename = ''

    if (firstLine.includes('filename =')) {
        filename = firstLine.split('=')[1]
    }

    const content =
        props.children && filename ? props.children.replace(`${firstLine}\n\n`, '') : props.children

    let lang = props.lang
        ? props.lang
        : props.className
            ? props.className.replace('language-', '')
            : 'py'

    SyntaxHighlighter.registerLanguage('py', py)
    SyntaxHighlighter.registerLanguage('bash', bash)

    const large = false

    return (
        <div className="not-prose dark overflow-hidden">
            {filename && (
                <div
                    className="bg-background text-muted flex h-8 w-full items-center gap-1 rounded-tr rounded-tl border-t border-r border-l px-4 font-sans">
                    {lang === 'bash' ? (
                        <TerminalIcon size={12} strokeWidth={2}/>
                    ) : (
                        <FileIcon size={12} strokeWidth={2}/>
                    )}
                    <span className="text-xs">{filename ?? 'index.js'}</span>
                </div>
            )}
            <div className="relative">
                {/* @ts-ignore */}
                <SyntaxHighlighter
                    language={lang}
                    style={monokaiCustomTheme}
                    className={[!filename && 'rounded-t-lg', 'rounded-b-lg'].join(' ')}
                    customStyle={{
                        padding: '21px 24px',
                        fontSize: large ? 18 : '0.875rem',
                        lineHeight: large ? 1.6 : 1.4,
                        background: props.background ?? '#111',
                    }}
                    showLineNumbers={props.showLineNumbers}
                    lineNumberStyle={{
                        padding: '0px',
                        marginRight: '21px',
                        minWidth: '1.5em',
                        opacity: '0.3',
                        fontSize: large ? 14 : '0.75rem',
                    }}
                >
                    {content}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodeBlock;