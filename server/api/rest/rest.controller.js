'use strict';

var fs = require('fs');

function handleError (res, err) {
  return res.status(500).send(err);
}


/**
 * @api {get} /rests Get a list of rests
 * @apiVersion 0.1.0
 * @apiName GetRests
 * @apiGroup Rests
 *
 */
exports.index = function (req, res) {
  fs.readFile('server/api/rest/rest.data.json', 'utf-8', function (err, rests) {
    if (err) { return handleError(res, err); }
    res.status(200).json(JSON.parse(rests));
  });
};


/**
 * @api {get} /rests/:id Get a single rest
 * @apiVersion 0.1.0
 * @apiName GetRest
 * @apiGroup Rests
 *
 */
exports.show = function (req, res) {
  res.status(200).json({});
};


/**
 * @api {post} /rests Create a new rest
 * @apiVersion 0.1.0
 * @apiName CreateRest
 * @apiGroup Rests
 *
 */
exports.create = function (req, res) {
  res.status(201).json({});
};


/**
 * @api {put} /rests/:id Updates an existing rest
 * @apiVersion 0.1.0
 * @apiName UpdateRest
 * @apiGroup Rests
 *
 */
exports.update = function (req, res) {
  res.status(200).json({});
};


/**
 * @api {delete} /rests/:id Deletes a rest
 * @apiVersion 0.1.0
 * @apiName RemoveRest
 * @apiGroup Rests
 *
 */
exports.destroy = function (req, res) {
  return res.status(204);
};
