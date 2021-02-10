var token = "33be01cf14cf4e807b075601e45972657fd2c7fd532da9e20a1b641f85b6c4a4bb22ff38b71167321b02b";
var ownerId = -179149180;
var url = "https://api.vk.com/method/wall.get?owner_id="+ownerId+"&access_token="+token+"&count=1&callback=response&v=5.69";
var script = document.createElement('script');
script.src = url;
document.head.appendChild(script);

function response(json) {
    if (json.response && json.response.items[0]) {
        var post = json.response.items[0];
        var el = document.getElementById('message');
        el.innerText = post.text;
    }
}