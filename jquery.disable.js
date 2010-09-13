/*
jquery extension to simplify disabling/enabling elements.
useful for disabling submit buttons during form submission.
*/
(function($) {
  $.fn.disable = function() {
    return this.attr('disabled', 'disabled');
  };
  $.fn.enable = function() {
    return this.removeAttr('disabled');
  };
})(jQuery);
