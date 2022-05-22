exports.install = function() {
	ROUTE('GET /');
	ROUTE('GET /contacts/', contacts);
	ROUTE('GET /utilisateurs/', utilisateurs);
	ROUTE('GET /utilisateur/', utilisateur);
	ROUTE('GET /add_user/', add_user);
	ROUTE('GET /edit_user/{id}', edit_user);
};

function contacts() {
	var controller = this;
	controller.view('contacts');
}
function utilisateurs() {
	var controller = this;
	var users;
	NOSQL('users').find().callback(function (err, res) {
		if(err){
			return;
		}
		users = res;
		controller.view('utilisateurs',users);
	})
}
function utilisateur($) {
	var controller = this;
	var users;
	controller.view('utilisateur',users);
}
function add_user() {
	var controller = this;
	controller.view('add_user');
}
function edit_user() {
	var controller = this;
	controller.view('edit_user');
}