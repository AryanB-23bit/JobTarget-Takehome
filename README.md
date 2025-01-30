# JobTarget Takehome Project

This project is a full-stack web application demonstrating a job board with a React frontend and a FastAPI backend. The application allows users to view a list of jobs, search for jobs by ID or name, and view detailed information about each job.

## Project Structure

The project is organized into two main directories:

-   `backend/`: Contains the FastAPI backend application.
-   `frontend/`: Contains the React frontend application.

### Backend (`backend/`)

The backend is built using FastAPI, a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.

-   `data/`:
    -   `jobs.json`: Contains the initial job data in JSON format.
-   `main.py`: The main FastAPI application file, including API routes.
-   `models.py`: Defines the Pydantic models for data validation.
-   `requirements.txt`: Lists the Python dependencies for the backend.

### Frontend (`frontend/`)

The frontend is a React application built using `create-react-app`.

-   `public/`: Contains static assets like `index.html`.
-   `src/`:
    -   `components/`: Contains React components:
        -   `JobList.js`: Displays the list of jobs and handles search functionality.
        -   `JobDetails.js`: Displays details for a specific job.
    -   `services/`:
        -   `api.js`: Handles API communication with the backend using `fetch`.
    -   `App.js`: The main application component with routing.
    -   `index.js`: The entry point for the React application.
    -   `index.css`: Global styles (optional).
-   `package.json`: Frontend dependencies, scripts, and project metadata.

## Getting Started

### Prerequisites

-   **Python 3.11+**
-   **Node.js (v18 or higher recommended)**
-   **npm (v9 or higher recommended)** or **Yarn**

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Create a virtual environment (recommended):**

    ```bash
    python3 -m venv .venv
    ```

3. **Activate the virtual environment:**

    -   On Linux/macOS:

        ```bash
        source .venv/bin/activate
        ```

    -   On Windows:

        ```bash
        .venv\Scripts\activate
        ```

4. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

5. **Run the FastAPI application:**

    ```bash
    uvicorn main:app --reload
    ```

    The backend will start running at `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Run the React development server:**

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

    The frontend will start running at `http://localhost:3000`.

### Accessing the Application

Once both the backend and frontend are running, open your web browser and go to `http://localhost:3000` to access the application.

## API Endpoints

The backend exposes the following API endpoints:

-   **`GET /jobs`:** Retrieves a list of all jobs. Supports optional `search` query parameter to filter by job ID or name.
-   **`GET /jobs/{job_id}`:** Retrieves details for a specific job by ID.

## Features

-   **Job Listing:** Displays a list of jobs with their ID, name, and status.
-   **Job Search:** Allows users to search for jobs by ID or name.
-   **Job Details:** Displays detailed information about a selected job, including its postings.
-   **Responsive Design:** The frontend is designed to be responsive and work on different screen sizes.

## Further Development

-   **Database Integration:** Consider using a more robust database like PostgreSQL or MySQL for production.
-   **Authentication:** Add user authentication to protect certain routes or features.
-   **Error Handling:** Implement more comprehensive error handling and user feedback mechanisms.
-   **Deployment:** Deploy the backend and frontend to a production environment (e.g., using Heroku, AWS, or other cloud providers).
-   **Styling:** Further enhance the styling and user interface of the frontend.
-   **Additional Features:** Add features like creating, updating, and deleting job postings.
