const express = require('express');
const router = express.Router();
const logger = require('../../config/logger');
const Widget = require('../models/Widget');
const widgetController = require('../controllers/widgets');
router.get('/', customerWidgets.getWidget);
router.get('/', customerWidgets.createWidget);
router.get('/', customerWidgets.updateWidget);
router.get('/', customerWidgets.deleteWidget);


router.get('/widgets', (req, res, next) => {
    logger.log('Getting all widgets', 'info');
    res.status(200).json('Widgets retrieved');
});

router.get('/widgets/:id', (req, res, next) => {
    logger.log('Getting widget from primary key', 'info');
    res.status(200).json({id: req.params.id});
});

router.get('/widgets/:name', (req, res, next) => {
    logger.log('Getting widget from name', 'info');
    res.status(200).json({id: req.params.id});
});

router.post('/widgets', (req, res) => {
    const widget = new Widget({
        name: req.body.name
    })
});

updateWidget = (req, res, next) => {
    Widgets.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, safe: true, 
multi: false }, (error, widget) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widget);
        }
    })
}

deleteWidget = (req, res, next) => {
    Widget.remove({ _id: req.params.id }, (error, widget) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widget);
        }
    });
}

module.exports = router;
