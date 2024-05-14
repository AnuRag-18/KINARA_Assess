const db = require("../models/student.model");
const Student = db.student;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

exports.findAllStudents = (req, res) => {
    const { page, size, title } = req.query;
    var condition = title
        ? { title: { $regex: new RegExp(title), $options: "i" } }
        : {};

    const { limit, offset } = getPagination(page, size);

    Student.paginate(condition, { offset, limit })
        .then((data) => {
            res.send({
                totalItems: data.totalStudents,
                students: data.students,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving students."
            });
        });
};