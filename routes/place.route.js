const express = require('express')
const router= express.Router()
const placeController= require('../controllers/place.controller')
router.get('/',placeController.index);
router.get('/getAllPlaces',placeController.getAllPlaces)
router.get('/getPlaces/:id',placeController.getplaces);
router.post('/deletePlace',placeController.deletePlace);
router.post('/addPlace',placeController.addPlace);

module.exports= router;