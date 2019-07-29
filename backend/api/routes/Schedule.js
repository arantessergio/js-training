module.exports = app => {
    const ScheduleControler = require('../controllers/Schedule')

    app.route('/schedules/:id')
        .get(ScheduleControler.get)
        .put((req, res) => ScheduleControler.update(req, res))
        .delete((req, res) => ScheduleControler.delete(req, res))

    app.route('/users/:id/schedules')
        .post((req, res) => ScheduleControler.create(req, res))
        .get(ScheduleControler.list)

    app.route('/schedules/search')
        .post((req, res) => ScheduleControler.search(req, res))
}
