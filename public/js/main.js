$(function() {
	// очищаем чекбоксы при загрузке
  $('input.course-checkbox').prop('checked', false);
  // узнаем сколько чекбоксов на странице и записываем в переменную
  var numCheck = $('input.course-checkbox').length;
  // обрабатываем изменение состояния
  // если checked - добавляем класс к ближайшему элементу .course-box и скрываем ближайший .column
  $('input.course-checkbox').on('change', (function() {
   	if( $(this).is(':checked') ){
   		$(this).closest('.course-box').addClass('done');
			$(this).closest('.column').fadeOut(1000);
   	};
   	// записываем сколько отмеченных чекбоксов
   	var numDone = $('input.course-checkbox:checked').length;
   	// сравниваем кол-во отмеченных чекбоксов с их общим кол-вом
   	// если равно - показываем .all-course-done
   	if ( numDone == numCheck ) {
   		$('.all-course-done').slideDown('slow', 'swing');
  	};
  }));
});