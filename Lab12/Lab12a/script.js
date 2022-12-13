function calcCircleGeometries(radius) {}

for (var i = 0; i < 3; i++) {
  var r = 100 * Math.random();
  ans = calcCircleGeometries(r);

  let r_trunc = r.toFixed(2);

  console.log("calcCircleGeometries(Radius) " + " R: " + r_trunc);

  document.write("calcCircleGeometries(Radius) " + " R: " + r_trunc + "<br>");
}