import express from 'express';
// import { getIndexPage, getAboutPage } from '../controllers/pageController'
import * as photoController from '../controllers/photoController.js';

const router = express.Router();

router
  .route('/')
  .post(photoController.createPhoto)
  .get(photoController.getAllPhotos);

router.route('/:id').get(photoController.getAPhoto);
router.route('/:id').delete(photoController.deletePhoto);

export default router;
