var sub = require('./sub');
var app = document.createElement('h1');
app.innerHTML = '<div>welcome</div>';
app.appendChild(sub());
document.body.appendChild(app);