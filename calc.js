$(function () {
  $('#conv').click(function () {
    const milhas = parseFloat($('#milhas').value())
    const metros = 1609.34 * milhas
    $('#metros').val(metros)
  })
})