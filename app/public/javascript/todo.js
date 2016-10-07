function AddToDo() {
  var todo = $('#new-todo').val()
  request = $.ajax({ url: '/api/todo', type: 'POST', data: todo })
  request.done(function (msg) {
    alert(JSON.stringify(msg))
    window.location.href = '/'
  })
  request.fail(function (jqXHR, textStatus) {
    alert('Request failed: ' + textStatus)
  })
}
