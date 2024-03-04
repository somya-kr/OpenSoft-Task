FROM python:3.12-slim

EXPOSE 8000

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

COPY requirements.txt /app/
COPY .env /app/
RUN python -m pip install -r /app/requirements.txt

WORKDIR /app
COPY src /app/src

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "-k", "uvicorn.workers.UvicornWorker", "src.main:app"]
