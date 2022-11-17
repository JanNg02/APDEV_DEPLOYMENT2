const controller = {
    startIndex: function(req,res){
		res.render('index');
	},

    generateShop: function (req,res){
		res.render('shop');
	},

	generateAboutUs: function (req,res){
		res.render('AboutUs2');
	},

    generateProfile: function (req,res){
		res.render('profile');
	},

    generateAdminView: function (req,res){
		res.render('adminView');
	},
}

module.exports = controller;