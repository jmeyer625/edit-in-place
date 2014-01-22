$(document).ready(function() {
	var editor = $('<textarea id="editor" autofocus style="resize:none">');

	var getEditableCss = function(element) {
		var newHeight = element.height();
		var newWidth = element.width();
		var newPos = element.position();
		return {newHeight:newHeight, newWidth:newWidth, newPos:newPos};
	};

	var edit = function() {
		var cssObj = getEditableCss($(this));
		$(this).after(editor);
		$(editor).width(cssObj.newWidth).height(cssObj.newHeight).position(cssObj.newPos);
		$(editor).val($(this).text()).focus();
		$(this).addClass('editing').hide();
	};

	var removeEditor = function() {
		$('#editor').val("").remove();
		$('.editing').show().removeClass('editing');
	};

	var writeText = function() {	
		if ($('#editor').val()) {
			var newText = $('#editor').val();
			$('.editing').text(newText);
			removeEditor();
		} else {
			removeEditor();
		}
	};

	$('.editable').click(edit);
	$(document).on('blur','#editor',writeText);
	
});