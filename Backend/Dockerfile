# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.12-slim

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt /app/
COPY .env /app/
RUN python -m pip install -r /app/requirements.txt

# Set the working directory
WORKDIR /app

# Copy the application code
COPY src /app/src

# During debugging, this entry point will be overridden.
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "-k", "uvicorn.workers.UvicornWorker", "src.main:app"]
