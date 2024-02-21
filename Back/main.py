from fastapi import FastAPI
from openai import OpenAI
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Load environment variables from .env
load_dotenv()

class InputText(BaseModel):
    inputText: str

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/openai")
async def openai(input_text: InputText):
    promptMessage = input_text.inputText
    
    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY")
    )
    
    system = {"role": "system", "content": "You are a color assistant, skilled in creating beautiful color palettes. I'm giving you a description, and you will generate a color palette based on it, it should be between 2 and 8 colors."}
    user = {"role": "system", "content": "A beautiful sunset"}
    assistant = {"role": "assistant", "content": '["#ffccb3", "#f9ad81", "#c87733", "#ad5c42", "#7a3b1f", "#ffd2b3", "#f9bb81", "#d68c33"]'}
    prompt = {"role": "user", "content": promptMessage}
    message = [system, user, assistant, prompt]
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=message
    )
    return {"colors": completion.choices[0].message.content}