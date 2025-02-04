
var displayCount = 6;
var displayItems;
var actualData;
var faqJson = $(".faqquestionfileloc").val();
// var faqJson = "questions/best-catering-bangalore.json";
fetch(faqJson)
    .then((response) => response.json())
    .then((json) => {
        actualData = json;
        displayItems = actualData.slice(0, displayCount);
        displayItems.forEach(listPopulate);
    });

function listPopulate(item, index) {
    html = '';
    html = '<div class="quesans">';
    html += '<div class="questions" role="tab" id="headingOne">';
    html += '<div class="ques" data-toggle="collapse" data-parent="#accordion" href="#' + item.id + '" aria-expanded=' + item.expanded + ' aria-controls="' + item.id + '">';
    html += item.ques;
    if (item.expanded == true) {
        html += '<i class="fas fa-minus"></i>';
    }
    else {
        html += '<i class="fas fa-plus"></i>';
    }
    html += '</div>';
    html += '</div>';
    if (item.expanded == true) {
        html += '<div id="' + item.id + '" class="panel-collapse collapse ans show" role="tabpanel" aria-labelledby="headingOne">';
    } else {
        html += '<div id="' + item.id + '" class="panel-collapse collapse ans" role="tabpanel" aria-labelledby="headingOne">';
    }
    html += '<div class="panel-body">';
    html += item.ans;
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $('#FAQ').append(html);
}


// FAQ Toggler
$('.quesans').on('hide.bs.collapse', toggleIcon);
$('.quesans').on('show.bs.collapse', toggleIcon);
function toggleIcon(e) {
    console.log($(e.target).prev().find("i"));
    $(e.target)
        .prev()
        .find("i")
        .toggleClass('fa-minus fa-plus');
}

// Read more question
function loadMoreQuestions() {
    if (displayCount <= actualData.length) {
        displayCount += 6;
        displayItems = actualData.slice(displayCount - 6, displayCount);
        displayItems.forEach(listPopulate);
        if (displayCount >= actualData.length) {
            $(".viewmore.more").css('display', 'none');
            $(".viewmore.less").css('display', 'block');
        }
    }
}

function loadLessQuestions() {
    $('#FAQ').html('');
    if (displayCount > 6) {
        displayCount -= 6;
        displayItems = actualData.slice(0, displayCount);
        displayItems.forEach(listPopulate);
        if (displayCount <= 6) {
            $(".viewmore.more").css('display', 'block');
            $(".viewmore.less").css('display', 'none');
        }
    }
}