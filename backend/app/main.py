import uvicorn
import app.app as app 

if __name__ == "__main__":
    uvicorn.run("app.app:app", host="127.0.0.1", port=8000)
