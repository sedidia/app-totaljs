// const { ROUTE } = require("total4")
// fonctions disponible au sein de l'application
exports.install = function () {
    ROUTE('GET /utilisateurs/list/          *utilisateurs --> @query');
    ROUTE('POST /utilisateurs/create/       *utilisateurs --> @insert');

    ROUTE('POST /utilisateurs/update/{id}/       *utilisateurs --> @update');

    ROUTE('GET /utilisateurs/{id}/          *utilisateurs --> @read');
    ROUTE('GET /utilisateurs/delete/{id}/       *utilisateurs --> @remove');

    ROUTE('GET /login/                      *utilisateurs --> @login');
    ROUTE('GET /logout/                     *utilisateurs --> @logout');
}