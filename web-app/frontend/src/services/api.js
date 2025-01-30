const ROOT_URL = 'http://localhost:8000';

const api = {
    async getJobs() {
        try {
            const response = await fetch(`${ROOT_URL}/jobs`);
            return await response.json();
        } catch (error) {
            throw error;
        }
    },

    async getJob(jobId) {
        try {
            const response = await fetch(`${ROOT_URL}/jobs/${jobId}`);
            return await response.json();
        } catch (error) {
            throw error;
        }
    },
};

export default api;