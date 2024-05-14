module.exports = app => {
    const movies = require("../controllers/student.controller");
    const router = require('express').Router();
    router.get("/getStudents", movies.findAllStudents);
    app.use('/api/students', router);
}