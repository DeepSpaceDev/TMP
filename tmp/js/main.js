function l(s){
	console.log(s);
}
function getRandomBoolean(){
	return Math.random() >= 0.5;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomString(length) {
	var text = '';
	var pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < length; i++) {
		text += pool.charAt(Math.floor(Math.random() * pool.length));
	}
	return text;
}
function getRotation(obj) {
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
  if(matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.atan2(b, a) * (180/Math.PI);
  } else { var angle = 0; }
  return (angle < 0) ? angle +=360 : angle;
}
function intersects(obj1, obj2) {
  var rect1 = obj1.getBoundingClientRect();
  var rect2 = obj2.getBoundingClientRect();

  return !(rect1.right < rect2.left || 
           rect1.left > rect2.right ||
           rect1.bottom < rect2.top ||
           rect1.top > rect2.bottom);
}
function virtualIntersection(qs1, qs2) {
  var elements = [qs1, qs2];
  var elPoints = [];

  for (var i = 0; i < elements.length; i++) {
    var jqEl = $(elements[i]);
    var jsEl = qs(elements[i]);

    var boundingRect = jsEl.getBoundingClientRect();
    var left = boundingRect.left;
    var top = boundingRect.top;
    var boundingW = boundingRect.width;
    var boundingH = boundingRect.height;
    var actualH = jsEl.style.height;
    var actualW = jsEl.style.width;
    var a = getRotation(jqEl);
    var smallW = Math.sin(a) * actualH;
    var smallH = Math.cos(a) * actualW;

    var points = [
      {x: left + smallW, y: top},
      {x: left + boundingW, y: top + smallH},
      {x: left + boundingW - smallW, y: top + boundingH},
      {x: left, y: top + boundingH - smallH}
    ];
    elPoints[i] = points;
  }
  return doPolygonsIntersect(elPoints[0], elPoints[1]);
}

function isUndefined(e) {
  return e === undefined;
}

/**
 * Helper function to determine whether there is an intersection between the two polygons described
 * by the lists of vertices. Uses the Separating Axis Theorem
 *
 * @param a an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @param b an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @return true if there is any intersection between the 2 polygons, false otherwise
 */
function doPolygonsIntersect (a, b) {
    var polygons = [a, b];
    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {

        // for each polygon, look at each edge of the polygon, and determine if it separates
        // the two shapes
        var polygon = polygons[i];
        for (i1 = 0; i1 < polygon.length; i1++) {

            // grab 2 vertices to create an edge
            var i2 = (i1 + 1) % polygon.length;
            var p1 = polygon[i1];
            var p2 = polygon[i2];

            // find the line perpendicular to this edge
            var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

            minA = maxA = undefined;
            // for each vertex in the first shape, project it onto the line perpendicular to the edge
            // and keep track of the min and max of these values
            for (j = 0; j < a.length; j++) {
                projected = normal.x * a[j].x + normal.y * a[j].y;
                if (isUndefined(minA) || projected < minA) {
                    minA = projected;
                }
                if (isUndefined(maxA) || projected > maxA) {
                    maxA = projected;
                }
            }

            // for each vertex in the second shape, project it onto the line perpendicular to the edge
            // and keep track of the min and max of these values
            minB = maxB = undefined;
            for (j = 0; j < b.length; j++) {
                projected = normal.x * b[j].x + normal.y * b[j].y;
                if (isUndefined(minB) || projected < minB) {
                    minB = projected;
                }
                if (isUndefined(maxB) || projected > maxB) {
                    maxB = projected;
                }
            }

            // if there is no overlap between the projects, the edge we are looking at separates the two
            // polygons, and we know there is no overlap
            if (maxA < minB || maxB < minA) {
                console.log("polygons don't intersect!");
                return false;
            }
        }
    }
    return true;
}
function qs(selectorString) {
  return document.querySelector(selectorString);
}