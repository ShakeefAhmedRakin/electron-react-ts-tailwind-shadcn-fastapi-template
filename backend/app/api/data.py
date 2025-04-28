from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def read_data():
    return {"message": "Hello from the Data Endpoint"}
