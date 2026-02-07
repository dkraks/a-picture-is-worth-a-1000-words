import { tutorials } from '../data/tutorials';
import InteractiveTutorial from '../components/InteractiveTutorial';

export default function TutorialsPage() {
  const tutorial = tutorials[0];

  return (
    <div className="tutorials-page">
      <InteractiveTutorial tutorial={tutorial} />
    </div>
  );
}
