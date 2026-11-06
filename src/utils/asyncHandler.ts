import type { Request, Response, NextFunction } from 'express';

type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<void>;

/**
 * Wraps an async controller function and forwards any thrown errors to next().
 * This eliminates try/catch boilerplate in every controller.
 */
export function asyncHandler(fn: AsyncController) {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
