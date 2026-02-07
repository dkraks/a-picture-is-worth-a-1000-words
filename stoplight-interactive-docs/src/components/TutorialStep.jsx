import { useState } from 'react';
import CodeBlock from './CodeBlock';
import LanguageTabs from './LanguageTabs';

export default function TutorialStep({ step, stepNumber, isActive, onToggle }) {
  const [language, setLanguage] = useState('javascript');
  const [showOutput, setShowOutput] = useState(false);

  const currentLang = step.languages[language];

  return (
    <div className={`tutorial-step ${isActive ? 'active' : ''}`}>
      <button className="step-header" onClick={onToggle}>
        <span className="step-number">{stepNumber}</span>
        <span className="step-title">{step.title}</span>
        <span className={`step-chevron ${isActive ? 'open' : ''}`}>&#9662;</span>
      </button>

      {isActive && (
        <div className="step-content">
          <p className="step-description">{step.description}</p>

          <LanguageTabs
            languages={step.languages}
            active={language}
            onSelect={setLanguage}
          />

          {currentLang.install && (
            <div className="install-block">
              <span className="install-label">Install</span>
              <code>{currentLang.install}</code>
            </div>
          )}

          <CodeBlock code={currentLang.code} language={language} />

          {step.expectedOutput && (
            <div className="output-section">
              <button
                className="run-btn"
                onClick={() => setShowOutput((v) => !v)}
              >
                {showOutput ? 'Hide Output' : 'Run Example'}
              </button>
              {showOutput && (
                <div className="expected-output">
                  <span className="output-label">Expected Output</span>
                  <pre>{step.expectedOutput}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
