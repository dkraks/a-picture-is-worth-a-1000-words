export const tutorials = [
  {
    id: 'getting-started',
    title: 'Getting Started with the Doodle SDK',
    description: 'Learn how to install, configure, and make your first API call.',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    steps: [
      {
        title: 'Install the SDK',
        description:
          'Install the Doodle SDK using your preferred package manager.',
        languages: {
          javascript: {
            label: 'JavaScript',
            install: 'npm install @doodle-api/sdk',
            code: `import { DoodleClient } from '@doodle-api/sdk';

// Initialize the client with your API key
const client = new DoodleClient({
  apiKey: 'your-api-key-here',
});

console.log('SDK initialized successfully!');`,
          },
          python: {
            label: 'Python',
            install: 'pip install doodle-sdk',
            code: `from doodle_sdk import DoodleClient

# Initialize the client with your API key
client = DoodleClient(api_key="your-api-key-here")

print("SDK initialized successfully!")`,
          },
          curl: {
            label: 'cURL',
            install: '# No installation needed for cURL',
            code: `# Test your API key with a simple request
curl -s https://api.doodles.example.com/v1/categories \\
  -H "Authorization: Bearer your-api-key-here" \\
  | python3 -m json.tool`,
          },
        },
        expectedOutput: `SDK initialized successfully!`,
      },
      {
        title: 'List all doodles',
        description:
          'Fetch a list of all available doodles from the API. You can filter by category and paginate results.',
        languages: {
          javascript: {
            label: 'JavaScript',
            code: `import { DoodleClient } from '@doodle-api/sdk';

const client = new DoodleClient({
  apiKey: 'your-api-key-here',
});

// Fetch the first page of doodles
const response = await client.doodles.list({
  limit: 5,
  category: 'algorithms',
});

console.log(\`Found \${response.total} doodles\`);
response.data.forEach(doodle => {
  console.log(\`  - \${doodle.title} [\${doodle.category}]\`);
});`,
          },
          python: {
            label: 'Python',
            code: `from doodle_sdk import DoodleClient

client = DoodleClient(api_key="your-api-key-here")

# Fetch the first page of doodles
response = client.doodles.list(limit=5, category="algorithms")

print(f"Found {response.total} doodles")
for doodle in response.data:
    print(f"  - {doodle.title} [{doodle.category}]")`,
          },
          curl: {
            label: 'cURL',
            code: `curl -s "https://api.doodles.example.com/v1/doodles?limit=5&category=algorithms" \\
  -H "Authorization: Bearer your-api-key-here" \\
  | python3 -m json.tool`,
          },
        },
        expectedOutput: `Found 12 doodles
  - Big O Notation [algorithms]
  - Array Data Structure [algorithms]
  - Linked List [algorithms]
  - Stack & Queue [algorithms]
  - Hash Table Part 1 [algorithms]`,
      },
      {
        title: 'Get a specific doodle',
        description:
          'Retrieve details for a single doodle by its ID, including download URLs for different formats.',
        languages: {
          javascript: {
            label: 'JavaScript',
            code: `import { DoodleClient } from '@doodle-api/sdk';

const client = new DoodleClient({
  apiKey: 'your-api-key-here',
});

// Get a specific doodle by ID
const doodle = await client.doodles.get('doodle_abc123');

console.log(\`Title: \${doodle.title}\`);
console.log(\`Category: \${doodle.category}\`);
console.log(\`Tags: \${doodle.tags.join(', ')}\`);
console.log(\`PNG: \${doodle.formats.png}\`);
console.log(\`TIFF: \${doodle.formats.tiff}\`);`,
          },
          python: {
            label: 'Python',
            code: `from doodle_sdk import DoodleClient

client = DoodleClient(api_key="your-api-key-here")

# Get a specific doodle by ID
doodle = client.doodles.get("doodle_abc123")

print(f"Title: {doodle.title}")
print(f"Category: {doodle.category}")
print(f"Tags: {', '.join(doodle.tags)}")
print(f"PNG: {doodle.formats.png}")
print(f"TIFF: {doodle.formats.tiff}")`,
          },
          curl: {
            label: 'cURL',
            code: `curl -s https://api.doodles.example.com/v1/doodles/doodle_abc123 \\
  -H "Authorization: Bearer your-api-key-here" \\
  | python3 -m json.tool`,
          },
        },
        expectedOutput: `Title: Big O Notation
Category: algorithms
Tags: algorithms, big-o, complexity
PNG: https://api.doodles.example.com/v1/images/doodle_abc123.png
TIFF: https://api.doodles.example.com/v1/images/doodle_abc123.tiff`,
      },
      {
        title: 'Create a new doodle',
        description:
          'Upload a new doodle to the collection. This requires an authenticated client with write permissions.',
        languages: {
          javascript: {
            label: 'JavaScript',
            code: `import { DoodleClient } from '@doodle-api/sdk';
import { readFileSync } from 'fs';

const client = new DoodleClient({
  apiKey: 'your-api-key-here',
});

// Read the image file and encode as base64
const imageData = readFileSync('./my-doodle.png');
const base64Image = imageData.toString('base64');

// Create a new doodle
const newDoodle = await client.doodles.create({
  title: 'My Custom Doodle',
  description: 'A hand-drawn explanation of recursion',
  category: 'algorithms',
  tags: ['recursion', 'algorithms', 'custom'],
  image_base64: base64Image,
});

console.log(\`Created doodle: \${newDoodle.id}\`);
console.log(\`View at: \${newDoodle.image_url}\`);`,
          },
          python: {
            label: 'Python',
            code: `import base64
from doodle_sdk import DoodleClient

client = DoodleClient(api_key="your-api-key-here")

# Read the image file and encode as base64
with open("./my-doodle.png", "rb") as f:
    base64_image = base64.b64encode(f.read()).decode()

# Create a new doodle
new_doodle = client.doodles.create(
    title="My Custom Doodle",
    description="A hand-drawn explanation of recursion",
    category="algorithms",
    tags=["recursion", "algorithms", "custom"],
    image_base64=base64_image,
)

print(f"Created doodle: {new_doodle.id}")
print(f"View at: {new_doodle.image_url}")`,
          },
          curl: {
            label: 'cURL',
            code: `# Encode your image as base64
BASE64_IMAGE=$(base64 -w 0 ./my-doodle.png)

curl -s -X POST https://api.doodles.example.com/v1/doodles \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d "{
    \\"title\\": \\"My Custom Doodle\\",
    \\"description\\": \\"A hand-drawn explanation of recursion\\",
    \\"category\\": \\"algorithms\\",
    \\"tags\\": [\\"recursion\\", \\"algorithms\\", \\"custom\\"],
    \\"image_base64\\": \\"$BASE64_IMAGE\\"
  }" | python3 -m json.tool`,
          },
        },
        expectedOutput: `Created doodle: doodle_xyz789
View at: https://api.doodles.example.com/v1/images/doodle_xyz789.png`,
      },
    ],
  },
];
