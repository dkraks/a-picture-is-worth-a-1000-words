import { useState } from 'react';
import TutorialStep from './TutorialStep';

export default function InteractiveTutorial({ tutorial }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const toggleStep = (index) => {
    if (activeStep === index) {
      setActiveStep(-1);
    } else {
      setActiveStep(index);
      setCompletedSteps((prev) => {
        const next = new Set(prev);
        // Mark all previous steps as completed when advancing
        for (let i = 0; i < index; i++) next.add(i);
        return next;
      });
    }
  };

  const progress = Math.round(
    (completedSteps.size / tutorial.steps.length) * 100
  );

  return (
    <div className="interactive-tutorial">
      <div className="tutorial-header">
        <div className="tutorial-meta">
          <span className={`difficulty ${tutorial.difficulty.toLowerCase()}`}>
            {tutorial.difficulty}
          </span>
          <span className="duration">{tutorial.estimatedMinutes} min</span>
        </div>
        <h1>{tutorial.title}</h1>
        <p className="tutorial-description">{tutorial.description}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-text">{progress}% complete</span>
      </div>

      <div className="steps-list">
        {tutorial.steps.map((step, i) => (
          <TutorialStep
            key={i}
            step={step}
            stepNumber={i + 1}
            isActive={activeStep === i}
            onToggle={() => toggleStep(i)}
          />
        ))}
      </div>
    </div>
  );
}
