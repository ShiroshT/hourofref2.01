var endpoint = '/api/stats/highscore/'
var defaultData = []
var labels = [];
var candidateList = [];


function gainesAttach(){

        $.each(candidateList , function(key, value)
			{

			            var candidateId = value.candidate_id;
                 		var candidateName = value.candiate_name;
                		var candidateSummary = value.summary_wiki;
                		var candidateUrl = value.slug;
                		var candidateScoreUp = value.score_up;
                		var candidateScoreDown = value.score_down;
                		var candidateScore = value.score;

                		document.getElementById("candidategain_name-" + key ).innerHTML  = candidateName;
                		document.getElementById("candidategain_summ-" + key ).innerHTML  = candidateSummary;
			})


}


function fetchCandidate(){
    $.ajax({
        method: "GET",
        url: endpoint,
        success: function(data){
            candidateList = data
            gainesAttach()

        },
        error: function(error_data){
            console.log("error")
            console.log(error_data)
        }
    })
}

fetchCandidate()

//
//  $.ajax({
//      url: '/api/candidates/',
//      data: {
//      	"q":query
//      },
//      method: 'get', // This is the default though, you don't actually need to always mention it
//      success: function(data) {
//      	candidateList = data.results;
//      	if(data.next) {
//      		nextCandidateUrl = data.next
//      	} else {
//      		$('#loadmore-candidates-search-results').css("display", "none")
//      	}
//
//      	parseCandidates();
//      },
//      failure: function(data) {
//          alert('Got an error dude');
//      }
//  });



//function fetchCandidate(url)
//{
//  var fetchUrl;
//  if (!url) {
//  	fetchUrl = '/api/candidates/';
//  } else {
//  	fetchUrl = url;
//  }
//  console.log("fetching candidates...");
//  $.ajax({
//      url: '/api/candidates/',
//      data: {
//      	"q":query
//      },
//      method: 'get', // This is the default though, you don't actually need to always mention it
//      success: function(data) {
//      	candidateList = data.results;
//      	if(data.next) {
//      		nextCandidateUrl = data.next
//      	} else {
//      		$('#loadmore-candidates-search-results').css("display", "none")
//      	}
//
//      	parseCandidates();
//      },
//      failure: function(data) {
//          alert('Got an error dude');
//      }
//  });
//}
//
//
//
//function staticGainers(){
//		if (candidateList == 0) {
//			$("#candidate-search-results").text("No Candidates availble by that name")
//		} else
//		// if candidate name exsist display the candidate
//		 {
//				$.each(candidateList , function(key, value)
//				{
//						console.log(key, value)
//				})
//		 }
//
//}