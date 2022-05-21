import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
    children: React.ReactElement;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }: CodeBlockProps) => {
    return (
        <Prism language={children.props.className?.replace('lang-', '')} style={base16AteliersulphurpoolLight}>
            {children.props.children}
        </Prism>
    );
};

export default CodeBlock;
