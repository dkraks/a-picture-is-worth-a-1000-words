import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const LANG_MAP = {
  javascript: 'jsx',
  python: 'python',
  curl: 'bash',
};

export default function CodeBlock({ code, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);
  const prismLang = LANG_MAP[language] || language;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <Highlight theme={themes.nightOwl} code={code.trim()} language={prismLang}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="line-number">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
