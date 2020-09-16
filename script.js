/*Downloaded from https://www.codeseek.co/codifiedconcepts/practice-js-election-map-dpvNxQ */
// Assigning candidate names and party color
var getCandidate = function(name, partyColor)
{
    var politician = {};
    politician.name = name;
    politician.partyColor = partyColor;
    politician.electionResults = null;
    politician.totalVotes = 0;

    return politician;
};

var candidate1 = getCandidate("Bartlet", [0, 174, 243]);
var candidate2 = getCandidate("Ritchie", [166, 0, 26]);

// Election results by state
candidate1.electionResults = [4, 1, 8, 4, 51, 9, 6, 3, 3, 18, 14, 4, 1, 18, 11, 6, 1, 6, 5, 4, 8, 7, 15, 9, 2, 9, 2, 3, 4, 4, 11, 3, 25, 15, 2, 18, 3, 4, 18, 3, 6, 2, 10, 16, 2, 2, 11, 11, 4, 9, 1]
candidate2.electionResults = [5, 2, 2, 2, 4, 0, 1, 0, 0, 9, 1, 0, 3, 3, 0, 0, 5, 2, 3, 0, 2, 4, 2, 1, 4, 2, 1, 2, 1, 0, 4, 2, 6, 0, 1, 2, 4, 3, 3, 1, 2, 1, 1, 18, 3, 1, 2, 0, 1, 1, 2]

// Changing some state results that were initially misreported
candidate1.electionResults[24] = 3;
candidate1.electionResults[12] = 2;


candidate2.electionResults[24] = 3;
candidate2.electionResults[12] = 2;


// State results
var setStateResults = function(state)
{
    theStates[state].winner = null;

    if ( candidate1.electionResults[state] > candidate2.electionResults[state] )
    {
        theStates[state].winner = candidate1.name;
        theStates[state].winnerColor = candidate1.partyColor;
    }
    else if ( candidate1.electionResults[state] < candidate2.electionResults[state] )
    {
        theStates[state].winner = candidate2.name;
        theStates[state].winnerColor = candidate2.partyColor;
    }

	// Puts state results in the table
	var stateInfoTable = document.getElementById('stateResults');

	var header = stateInfoTable.children[0];
	var body = stateInfoTable.children[1];

	var stateName = header.children[0].children[0];
	var abbrev = header.children[0].children[1];

	var candidate1Name = body.children[0].children[0];
	var candidate2Name = body.children[1].children[0];

	var candidate1Results = body.children[0].children[1];
	var candidate2Results = body.children[1].children[1];

	var winnersName = body.children[2].children[1];

	stateName.innerText = theStates[state].nameFull;
	abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

	candidate1Name.innerText = candidate1.name;
	candidate2Name.innerText = candidate2.name;

	candidate1Results.innerText = candidate1.electionResults[state];
	candidate2Results.innerText = candidate2.electionResults[state];

	if (theStates[state].winner === null)
	{
	  winnersName.innerText = "DRAW";
	}
	else
	{
	  winnersName.innerText = theStates[state].winner;
	}

  // Set state with winner's color
	var stateColor = theStates[state].winnerColor;

    if (theStates[state].winner !== null)
    {
      theStates[state].rgbColor = stateColor;
    }
    else
    {
      theStates[state].rgbColor = [11,32,57];
    }
};

// Tallying the votes
candidate1.tallyVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
         this.totalVotes = this.totalVotes + this.electionResults[i];
         //console.log(this.totalVotes);
    }
};
candidate1.tallyVotes();

candidate2.tallyVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
         this.totalVotes = this.totalVotes + this.electionResults[i];
         //console.log(this.totalVotes);
    }
};
candidate2.tallyVotes();

// Declare a winner
var winner = function()
{
  if ( candidate1.totalVotes > candidate2.totalVotes )
  {
    winner = candidate1.name;
  }
  else if ( candidate2.totalVotes > candidate1.totalVotes )
  {
    winner = candidate2.name;
  }
  else
    winner = "We have an unprecedented tie!"
};
winner();

//console.log ("Ladies and Gentlemen, the next president of the United States is " + winner + "!");

// Populate table announcing the overall winner
var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = candidate1.name;
row.children[1].innerText = candidate1.totalVotes;
row.children[2].innerText = candidate2.name;
row.children[3].innerText = candidate2.totalVotes;

row.children[5].innerText = winner;
