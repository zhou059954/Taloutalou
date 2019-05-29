const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Playlist', (err) => {
    if (!err)
        console.log('Connexion mandea.');
    else
        console.log('Connexion erreur : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;