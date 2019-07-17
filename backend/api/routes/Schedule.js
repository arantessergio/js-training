module.exports = (app) => {
    const ScheduleControler = require('../controllers/Schedule')

    app.route('/schedules')
        .get(ScheduleControler.list)
        .post((req, res) => ScheduleControler.create(req, res))

    app.route('/schedules/:id')
        .get(ScheduleControler.get)
        .put((req, res) => ScheduleControler.update(req, res))
        .delete((req, res) => ScheduleControler.delete(req, res))
}

