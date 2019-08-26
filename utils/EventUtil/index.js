var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListerner) {
      element.addEventListerner(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  },
  removeHanler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.dettachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  }
};
