

var defaultData = []
var labels = [];
var candidateList = [];


function truncateText(candidateS, maxLength, newURL) {
    var len = candidateS.length

    if (len > maxLength) {
        candidateS = candidateS.substring(0,maxLength);
    }
    return candidateS +"<a href='" + "candidates/" + newURL + "'> See more </a>";
}

//document.querySelector('p').innerText = truncateText('p', 50);


function gainesAttach(act){

        $.each(candidateList , function(key, value)
			{

			            var candidateId = value.candidate_id;
                 		var candidateName = value.candiate_name;
                		var candidateSummary = value.summary_wiki;
                		var candidateUrl = value.slug;
                		var candidateScoreUp = value.score_up;
                		var candidateScoreDown = value.score_down;
                		var candidateScore = value.score;

                		var candidateSum
//                		var act ='gain'

                		var candidateHeader= "candidate"+ act + "_name-" + key
                		var candidateBlu= "candidate"+ act + "_summ-" + key

                        var oldURL = window.location.pathname;
                        var index = 0;
                        var newURL = oldURL;
                        index = oldURL.indexOf('/');

                        if(index == -1){
                            index = oldURL.indexOf('candidateUrl');
                        }
                        if(index != -1){
                            newURL = oldURL.substring(0, index);
                        }
                            newURL = newURL + candidateUrl


                		candidateSum = truncateText(candidateSummary, 180, newURL)


                        console.log(act, candidateHeader)

                		document.getElementById(candidateHeader).innerHTML = candidateName
                		document.getElementById(candidateBlu ).innerHTML = candidateSum
			})


}


function fetchCandidate(vUrl, act){
    var endpoint = '/api/stats/'
    endpoint = endpoint + vUrl +'/'

    $.ajax({
        method: "GET",
        url: endpoint,
        success: function(data){
            candidateList = data
            gainesAttach(act)

        },
        error: function(error_data){
            console.log("error")
            console.log(error_data)
        }
    })
}


function fetchCandidatesUp(){
    var valUpUrl = "scoreup"
    var act ='gain'
    fetchCandidate(valUpUrl, act)
}

function fetchCandidatesDown(){
    var valDnUrl = "scoredown"
    var act ='looser'
    fetchCandidate(valDnUrl, act)
}


//function fetchCandidatesdown(){
//var endpoint = '/api/stats/highscoredown/'
//var act = "loose"
//    fetchCandidate(endpoint, act)
//}

fetchCandidatesUp()
fetchCandidatesDown()
