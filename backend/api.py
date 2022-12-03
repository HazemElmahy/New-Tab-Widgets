from enum import Enum

from fastapi import FastAPI
from pydantic import BaseModel


class ModelName(str, Enum):
    h = "hazem"
    a = "ahmed"
    m = 'mohamed'

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

app = FastAPI()

@app.post("/items/")
async def create_item(item: Item):
    return item



@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name == ModelName.h:
        return {"model_name": model_name, "message": "DEep Leanirng FTW!"}

    if model_name == ModelName.a:
        return {"model_name": model_name, "message": "DEep Leccn all the imgaFTW!"}
    
    if model_name == ModelName.m:
        return {"model_name": model_name, "message": "have omse resulsts?!"}

@app.get("/did_it/")
async def read_item():
    return {"message": "did_it"}


@app.get("/did_it/{item_id}")
async def read_item(item_id: int, skip: bool):
    return {item_id: f"did it > {skip}"}