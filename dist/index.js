'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/api/v1', _routes2.default);

app.get('/', function (req, res) {
    return res.status(200).json({ message: 'Creating APIs' });
});

app.use('*', function (req, res) {
    return res.status(404).json({
        message: 'Route not found'
    });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});