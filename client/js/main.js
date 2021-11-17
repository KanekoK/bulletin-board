const url = 'http://localhost:8080/api/page';

function format(id, title, message) {
  let card = '';
  card += '<li id="post-' + id + '" class="card" data-id="' + id + '">';
  card += '<div class="left">' + message + '</div>';
  card += '<div class="right"><div class="button-block"><button class="edit">編集</button><button class="delete">削除</button></div><p class="name">' + title + '</p></div>'
  card += '</li>';
  return card;
}

// 一覧取得
$.ajax({
  type: 'GET',
  url: url
}).done(function(data){
  data = JSON.parse(data)
  data.forEach(function(post) {
    $('#lists').append(format(post[0], post[1], post[2]));
  });
});

$('#post').on('click', () => {
  let title = $('#title').val();
  let message = $('#message').val();

  $.ajax({
    type: 'POST',
    url: url,
    data: {
        "title": title,
        "message": message
    }
  }).done(function(data){
    window.location.reload();
  });
});


$('body').on('click', '.edit', () => {
  alert('編集が押されました');
  // 投稿idを取得

  // 投稿idからデータを取得して、タイトルとメッセージを格納

  // ボタンテキストを「編集」に変更

  // 更新APIを叩く

});

$('body').on('click', '.delete', () => {
  // 投稿idを取得
  alert('削除が押されました');
  console.log($(this).parents('.card'));

  // アラートを出す

  // 投稿idをもとに削除APIを叩く

});

