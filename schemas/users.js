NEWSCHEMA('utilisateurs', function(schema) {
	// Fields definition
	schema.define('id');
	schema.define('nom', 'string(30)', true);
	schema.define('prenom', 'string(30)', true);
	schema.define('email', 'Email', true);
	schema.define('phone', 'Phone', true);
	schema.define('adresse', 'string');
    // ...

	// Pre-defined
	schema.setQuery(function($) { 
        // la liste des utilisateurs
        var database = NOSQL('users');
        database.find().callback($.callback);        
    });
	schema.setRead(function($) {
        // retourner un seul utilisateur par son id
        NOSQL('users').one().where('id',$.id).callback(function (err,res) {
            $.callback(res);
        });
    });
	schema.setInsert(function($, model) {
        // inserer un nouvel utilisateur en base de données
        // fournir un id unique
        model.id = UID();
        // date de creation
        model.dtcreated = NOW;
        // inserer
        NOSQL('users').insert(model, true).where('email',model.email).callback($.callback);
    });
	schema.setRemove(function($) {
        // callback1: reponse de la bdd, callback2: reponse de notre schema
        NOSQL('users').remove().where('id',$.id).callback(function (err,res) {
            $.callback(res);
        });
    });
	schema.setUpdate(function($) {
        // NOSQL('users').modify({ nom: 'Peter' }).where('id', 'pzhu001nn41d');
        NOSQL('users').modify().where('id',$.id).callback(function (err,res) {
            $.callback(res);
        });
    });

    /*
	schema.setSave(function($, model) {});
	schema.setUpdate(function($, model) {});
	schema.setPatch(function($, model) {});
    */

	// Custom workflows
	schema.addWorkflow('login', function($) {
        $.callback("Connected !");
    });
	schema.addWorkflow('logout', function($) {
        $.callback("Disconnected !");
    });

});