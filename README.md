# Maticas web page
Here we host the code for the Maticas web page. Yes, literally the web page, not the app. The app is hosted in a different repository.

# How to run the web page for local development

### 1. Clone the repository:
   ```bash
    git clone https://github.com/maticas-org/maticas-kratky-system.git
    cdmaticas-kratky-system
   ```
Here's the README file based on your context:

### 2. Install Dependencies:

To run the web page locally, you need to install the necessary dependencies:

```bash
npm install
```

### 3. Run the Web Page:

To start the web server locally and run the web page in development mode:

```bash
npm run dev
```

This will launch a development server that you can access through `http://localhost:3000`.

## How to Run the Web Page Using Docker

You can run the web page using Docker to simulate a production-like environment or for easy deployment.

### 1. Build the Docker Image

You can build the Docker image by running the following command in the root of the repository (where the Dockerfile is located):

```bash
docker build -t maticas-web-page .
```

### 2. Run the Docker Container

Once the Docker image is built, you can run the web page by executing the following command:

```bash
docker run -p 80:80 maticas-web-page
```

This will start an Nginx server serving the built web page. You can access it through `http://localhost`.

### Running the Web Page Locally Without SSL (for Development)

If you're running the web page in a local environment (e.g., for development), you can use the `local.dev.Dockerfile` for a more simplified version without SSL setup.

To run the local version, use the following steps:

1. Build the Docker image for local development:

```bash
docker build -f local.dev.Dockerfile -t maticas-web-page-local .
```

2. Run the Docker container for local development:

```bash
docker run -p 80:80 maticas-web-page-local
```

### 3. Stopping the Docker Container

If you want to stop the running Docker container:

```bash
docker stop <container-id>
```

You can get the container ID by running:

```bash
docker ps
```

## File Descriptions

### Dockerfile (Production)

This Dockerfile builds the project using Node.js (for installing dependencies and building the static assets) and then serves it using Nginx with SSL certificates configured. It exposes both HTTP (80) and HTTPS (443) ports.

### local.dev.Dockerfile (Development)

This Dockerfile is for local development. It builds the project in the same way but skips SSL setup, making it simpler for local development environments. It exposes only HTTP (port 80).