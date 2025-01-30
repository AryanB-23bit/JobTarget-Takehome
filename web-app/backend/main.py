from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import json
import uvicorn

from models import *

app = FastAPI()
DATA_FILE_PATH = os.path.join(os.path.dirname(__file__), "data", "jobs.json")

allowed_origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def load_from_json(file_path: str) -> List[Job]:
    try:
        with open(file_path, "r") as file:
            data = json.load(file)
            return [Job(**item) for item in data]

    except FileNotFoundError:
        raise Exception(f"Error: Data file not found at {file_path}")
    except json.JSONDecodeError:
        raise Exception(f"Error: Invalid JSON format in {file_path}")


jobs_data = load_from_json(DATA_FILE_PATH)


@app.get("/jobs")
def get_all_jobs():
    if not jobs_data:
        raise HTTPException(status_code=404, detail="No job data found")
    return jobs_data


@app.get("/jobs/{job_id}")
def get_job_by_id(job_id: int):
    for job in jobs_data:
        if job.id == job_id:
            return job
    raise HTTPException(status_code=404, detail=f"No Job with the ID: {job_id} found in the data")


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, log_level="info")
