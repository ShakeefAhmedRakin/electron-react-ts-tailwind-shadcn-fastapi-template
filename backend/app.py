from fastapi import FastAPI,Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def verify_secret_header(request: Request, call_next):
    # Allow preflight CORS requests through
    if request.method == "OPTIONS":
        return await call_next(request)
    
    # Only enforce secret header for other methods
    if request.headers.get("x-app-secret") != "secret-key-not-expose-backend-outside-app":
        raise HTTPException(status_code=403, detail="Forbidden")

    return await call_next(request)


@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.get("/data")
def read_data():
    return {"message": "Hello from FastAPI"}
