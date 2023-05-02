function generateGraph() {
  // Get the selected values from the form
  var q1Value = parseInt(document.getElementById("q1").value);
  var q2Value = parseInt(document.getElementById("q2").value);
  var q3Value = parseInt(document.getElementById("q3").value);
  var q4Value = parseInt(document.getElementById("q4").value);
  var q5Value = parseInt(document.getElementById("q5").value);
  var q6Value = parseInt(document.getElementById("q6").value);
  var q7Value = parseInt(document.getElementById("q7").value);
  var q8Value = parseInt(document.getElementById("q8").value);
  var q9Value = parseInt(document.getElementById("q9").value);
  var q10Value = parseInt(document.getElementById("q10").value);

  // Calculate the average score
  var avgScore =
    (q1Value +
      q2Value +
      q3Value +
      q4Value +
      q5Value +
      q6Value +
      q7Value +
      q8Value +
      q9Value +
      q10Value) /
    5;

  // Generate the graph
  var graph = "";
  graph += "<h2>Your Emotion Graph</h2>";
  graph +=
    "<div style='width: 200px; height: 20px; background-color: #f5f5f5; border: 1px solid #ccc;'>";
  graph +=
    "<div style='width: " +
    avgScore * 20 +
    "px; height: 20px; background-color: #008000;'></div>";
  graph += "</div>";
  graph +=
    "<p>Your average emotion score is " +
    avgScore.toFixed(2) +
    " out of 5.</p>";

  // Update the HTML with the graph
  document.getElementById("graph").innerHTML = graph;
}
