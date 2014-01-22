$(document).ready(function() {
	var editor = $('<input type="text" id="editor" autofocus>');

	var edit = function() {
		var cssObj = getEditableCss($(this));
		console.log(cssObj);
		$(this).after(editor);
		$(editor).width(cssObj.newWidth).height(cssObj.newHeight).position(cssObj.newPos);
		$(editor).focus();
		$(this).addClass('editing');
		$(this).hide();
	};

	var removeEditor = function() {
		$('#editor').val("");
		$('#editor').remove();
		$('.editing').show();
		$('.editing').removeClass('editing')
	}

	var writeText = function() {	
		if ($('#editor').val()) {
			var newText = $('#editor').val();
			$('.editing').text(newText);
			removeEditor();
		} else {
			removeEditor();
		}
	};

	var getEditableCss = function(element) {
		var newHeight = element.height();
		var newWidth = element.width();
		var newPos = element.position();
		return {newHeight:newHeight, newWidth:newWidth, newPos:newPos};
	}

	$('.editable').click(edit);
	$(document).on('blur','#editor',writeText);


});