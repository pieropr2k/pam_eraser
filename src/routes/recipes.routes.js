import { Router } from "express"
import { getRecipeInfoById, getRecipesByCategory } from "../controllers/recipes.controllers.js"

const router = Router()

router.get("/",(req,res)=>{
    res.send("Testing")
})

router.get("/recipes/:category", getRecipesByCategory)
router.get("/oneRecipe/:id", getRecipeInfoById)

export default router