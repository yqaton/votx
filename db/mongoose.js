var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/votx');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas
var Team = new Schema({
    name: { type: String, required: true },
    image_url: { type: String, required: true }
});

var Session = new Schema({
    name: { type: String, required: true },
    teams: [Team]
});

var Voter = new Schema({
    session: Session,
    voter_id: { type: String, required: true }
});

var StatVotes = new Schema({
    session: Session,
    round: { type: String, required: true },
    voter_id: { type: String, required: true },
    team: Team
});

var SessionModel = mongoose.model('Session', Session);
var VoterModel = mongoose.model('Voter', Voter);
var StatModel = mongoose.model('StatVotes', StatVotes);
var TeamModel = mongoose.model('TestTeam', Team);

module.exports.SessionModel = SessionModel;
module.exports.VoterModel = VoterModel;
module.exports.StatModel = StatModel;
module.exports.TeamModel = TeamModel;

