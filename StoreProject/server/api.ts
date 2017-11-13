import { Router } from 'express';
import productController from './controllers/product.ctrl';
import contactFormController from './controllers/contactform.ctrl';
import purchasesController from './controllers/purchases.ctrl';
import categoriesController from './controllers/categories.ctrl';
import paymentsController from './controllers/payments.ctrl';

const router = Router();

router.use('/product', productController);
router.use('/contactforms', contactFormController);
router.use('/purchases', purchasesController);
router.use('/categories', categoriesController);
router.use('/payments', paymentsController);

export default router;