const courses = require("../data/courses.json");

module.exports = {
  list: (req, res) => {
    return res.render("courses/list", {
      title: "Listado de cursos",
      courses,
    });
  },
  detail: (req, res) => {
    const { id, price, description, image, chef } = req.params;

    const course = courses.find((course) => course.id === +id);

    return res.render("courses/detail", {
      title: "Detalles del curso",

      course,
    });
  },
};
