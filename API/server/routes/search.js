/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:searchTerm', function (req, res, next) {

    var term = req.params.searchTerm;

    axios.all([
        axios.get('https://api.deezer.com/search?q='+term+'')
    ])
    .then(axios.spread( function(results) {

        res.json( {
            results: results.data
        });

    }))
    .catch( function( error) {
            console.log(error);
            res.status(500).json({
                title: 'An error occurred',
                error: error
            });
    });

});


module.exports = router;