const controller = {}

controller.index = (req, res) => {
    res.render('home/index',{
        title:'Profile | Bayu Firmansyah',
        css : 'index',
        js: 'null',
    });
}

controller.about = (req, res) => {
    res.send(200)
}

controller.pricing = (req, res) => {
   res.send("suksess login")
}


module.exports = controller;

