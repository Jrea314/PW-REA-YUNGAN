import {Router} from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'

router.post('/', productsCtrl.createProdudct)

router.get('/', productsCtrl.getProdudcts)

router.get('/:productId', productsCtrl.getProdudctById)

router.put('/:productId', productsCtrl.updateProdudctById)

router.delete('/:productId', productsCtrl.deleteProdudctById)

export default router;