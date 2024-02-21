from fastapi import FastAPI
from openai import OpenAI
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/openai")
async def openai():
    # Create a client to use the OpenAI API
    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY")
    )
    
    # Create a completion using the GPT-3.5-turbo model
    
    system = {"role": "system", "content": "You are a color assistant, skilled in creating beautiful color palettes. I'm giving you a description, and you will generate a color palette based on it."}
    user = {"role": "system", "content": "A beautiful sunset"}
    assistant = {"role": "assistant", "content": '["#ffccb3", "#f9ad81", "#c87733", "#ad5c42", "#7a3b1f", "#ffd2b3", "#f9bb81", "#d68c33"]'}
    promptMessage = {"role": "user", "content": "Google Colors"}
    message = [system, user, assistant, promptMessage]
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=message
    )
    return {"message": completion.choices[0].message.content}