from fastapi import APIRouter, Depends, HTTPException
from src.routers.auth import get_current_user
from src.db import Team
import uuid

router = APIRouter()

@router.post("/create_team")
async def create_team(team_name: str, current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]

    team_id = str(uuid.uuid4())

    team_exists = await Team.find_one({"team_name": team_name})
    if team_exists:
        raise HTTPException(status_code=400, detail="Team name already exists")

    new_team = {"team_id": team_id, "team_name": team_name, "members": [user_id]}
    created_team = await Team.insert_one(new_team)

    return {"message": "Team created successfully", "team_id": team_id}
