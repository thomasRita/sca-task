'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require('./swagger');

var _swagger2 = _interopRequireDefault(_swagger);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));

app.use('/', _routes2.default);

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