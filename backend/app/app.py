from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.config.config import SECRET_KEY, ALLOWED_ORIGINS
from app.api import root, data

app = FastAPI()

# Add CORS middleware for cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def verify_secret_header(request: Request, call_next):
    if request.method == "OPTIONS":
        return await call_next(request)
    if request.headers.get("x-app-secret") != SECRET_KEY:
        raise HTTPException(status_code=403, detail="Forbidden")
    return await call_next(request)

app.include_router(root.router)
app.include_router(data.router, prefix="/data")
