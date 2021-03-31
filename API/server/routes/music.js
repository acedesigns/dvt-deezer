/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function (req, res, next) {

    axios.all([
        axios.get('https://api.deezer.com/artist/429675'),
        axios.get('https://api.deezer.com/artist/4338602'),
        axios.get('https://api.deezer.com/artist/9635624')
    ])
    .then(axios.spread( function(bruno, burna, billie) {

        res.json( {
            bruno: bruno.data,
            burna: burna.data,
            billie: billie.data
        } );

    }))
    .catch( function( error) {
        console.log(error);
        res.status(500).json({
            title: 'An error occurred',
            error: error
        });
    });

});


router.get('/artist/:artistID', function (req, res, next) {
    var artistId = req.params.artistID;
    axios.all([
        axios.get('https://api.deezer.com/artist/'+ artistId+ '/top'),
        axios.get('https://api.deezer.com/artist/'+ artistId+ '/albums'),
        axios.get('https://api.deezer.com/artist/'+ artistId)
    ])
    .then(axios.spread( function(top, albums, artist) {

        var alb = albums.data.data.filter(function (elem) {
            return elem.record_type == 'album';
        });
        res.json( {
            topTracks: top.data.data,
            albums: alb,
            artist: artist.data
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
