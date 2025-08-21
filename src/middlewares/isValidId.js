import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { recipeId } = req.params;
  if (!isValidObjectId(recipeId)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
};
