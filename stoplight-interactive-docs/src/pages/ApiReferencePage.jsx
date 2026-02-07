import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

export default function ApiReferencePage() {
  return (
    <div className="api-reference-page">
      <API
        apiDescriptionUrl="/petstore.json"
        router="hash"
        layout="sidebar"
      />
    </div>
  );
}
