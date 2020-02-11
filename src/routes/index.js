
import { Router } from 'express';
import userRoute from './api/users';

const router = new Router();
router.use('/users', userRoute);
/*
router.use('/', resetPasswordRoute);
router.use('/', accommodationRoute);
router.use('/', roomRoute);
router.use('/auth', authRoutes);
router.use('/users', userRoute);
router.use('/profiles', profileRoutes);
*/
export default router;
