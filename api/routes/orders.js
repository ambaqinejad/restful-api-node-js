const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET /Orders'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST /Orders'
    })
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
});



module.exports = router;