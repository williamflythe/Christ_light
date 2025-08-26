# Christ-Prompter Next.js Application

A Next.js application for displaying Christ-centered sentences with dynamic timing based on sentence length.

## Features

- Dynamic timing based on sentence length (longer sentences display longer)
- Audio playback with automatic playlist shuffling
- Keyboard controls for navigation
- Responsive design
- Dockerized for easy deployment

## Prerequisites

- Node.js 18 or later
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## Getting Started

### Local Development

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Copy your MP3 files to the `public/audio` directory.

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. Make sure Docker and Docker Compose are installed on your system.

2. Copy your MP3 files to the `public/audio` directory.

3. Build and start the Docker container:

```bash
docker-compose up -d
```

4. Access the application at [http://localhost:3000](http://localhost:3000).

## Customizing Content

To customize the sentences displayed in the presentation:

1. Open `src/app/page.tsx`
2. Locate the `sentences` array (around line 15)
3. Modify the array with your own sentences
4. Save the file

To customize the audio files:

1. Add your MP3 files to the `public/audio` directory
2. Open `src/app/page.tsx`
3. Locate the `musicFiles` array (around line 30)
4. Update the array with your MP3 filenames
5. Save the file

## Usage

- Click the "Start Presentation" button to begin
- Use Space or Right Arrow to manually advance to the next sentence
- Press P to pause/resume the automatic advancement
- Click anywhere on the screen to advance to the next sentence

## Dynamic Timing

The application calculates display time for each sentence based on its length:

- Base delay: 1.5 seconds
- Additional time: 50 milliseconds per character
- Maximum delay: 8 seconds

This ensures that longer sentences are displayed for a longer time, making the presentation more comfortable to read.