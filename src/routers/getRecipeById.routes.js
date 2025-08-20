import { Router } from "express";
import { isValidId } from "../middlewares/isValidId.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getRecipeByIdController } from "../controllers/getRecipeByIdController.js";

const router = Router();

router.get(
  '/:recipeId',
  isValidId,
  ctrlWrapper(getRecipeByIdController),
);

export default router;
