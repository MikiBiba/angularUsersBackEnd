const userBL = require("../models/usersBL");
const express = require("express");
const { status } = require("express/lib/response");
const router = express.Router();

router.route('/').get(async function(req,resp) {
    let data = await userBL.getUsers();
    return resp.json(data);
});

router.route('/:id').get(async function(req,resp) {
    let id = req.params.id;
    let data = await userBL.getUser(id);
    return resp.json(data);
});

router.route('/:id').put(async function(req,resp) {
    let id = req.params.id;
    let obj = req.body;
    let status = await userBL.updateUser(id, obj);
    return resp.json(status);
});

router.route('/:id').delete(async function(req,resp) {
    let id = req.params.id;
    let status = await userBL.deleteUser(id);
    return resp.json(status);
});

// router.route('/:id').put(async function(req,resp) {
//     let id = req.params.id;
//     let obj = req.body;
//     let status = await userBL.updateUserTasks(id, obj);
//     return resp.json(status);
// });

module.exports = router;