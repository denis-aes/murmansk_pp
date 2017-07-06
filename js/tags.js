
function initTags() {
    $.ajax({
        type: 'post',
        url: 'https://siis.ru:8443/PubSys/source_tags',
        data: 'command=search&payload={}',
        success: function (data) {
            populateTags(JSON.parse(data));
        }
    });
}

function populateTags(data){
    var html = [];
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var htmlItem = '<li class="mdl-list__item"><a href="">' + obj['name'] + '</a></li>';
        html.push(htmlItem);
    }

    var tags_list = document.getElementById('tags_list');
    tags_list.innerHTML = html.join('');
}

$(initTags);