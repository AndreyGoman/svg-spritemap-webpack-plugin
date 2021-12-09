var xmldom = require('@xmldom/xmldom');


module.exports = (sources = []) => {
    var content = "";
    sources.forEach((sprite) => {
      var className = sprite.path.split('/').pop().split('.')[0];
      var file = new xmldom.DOMParser().parseFromString(sprite.content);
      var viewBox = file.documentElement.getAttribute('viewBox');
      if (!viewBox) return;
      viewBox = viewBox.split(' ');
      content += '.' + className;
      content += ' {\n';
      content += '  width: '+ viewBox[2] +'px;\n'
      content += '  height: '+ viewBox[3] +'px;\n'
      content += '}\n';
    })

    return {
      warnings: [],
      content,
    }
};
