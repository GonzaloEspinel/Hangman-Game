var exports = module.exports = {};
var wordBank = ['cardinals', 
                'falcons', 
                'ravens', 
                'bills', 
                'panthers', 
                'bears', 
                'bengals', 
                'browns', 
                'cowboys', 
                'broncos', 
                'lions', 
                'packers', 
                'texans', 
                'colts', 
                'jaguars', 
                'chiefs', 
                'dolphins', 
                'vikings', 
                'patriots', 
                'saints', 
                'giants', 
                'jets', 
                'raiders', 
                'eagles', 
                'steelers', 
                'rams', 
                'chargers',
                '49ers', 
                'seahawks', 
                'buccaneers', 
                'titans', 
                'redskins'];

module.exports.getRandomWord = function() {
    var index = parseInt(Math.random() * (wordBank.length));
    return wordBank[index];
	};