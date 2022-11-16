const controller = {
    startIndex: function(req,res){
		res.render('index');
	},

    generateShop: function (req,res){
		res.render('shop');
	},

    generateProfile: function (req,res){
		res.render('profile');
	},
}

module.exports = controller;