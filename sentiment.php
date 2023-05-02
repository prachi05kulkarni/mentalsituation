<!DOCTYPE html>
<html>
<head>
	<title>Sentiment Analysis</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f5f5f5;
		}
		
		h1 {
			text-align: center;
			margin-top: 50px;
		}
		
		.container {
			margin: 50px auto;
			max-width: 600px;
			background-color: white;
			padding: 20px;
			border-radius: 5px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		}
		
		.textarea {
			width: 100%;
			height: 150px;
			font-size: 16px;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 5px;
			border: 1px solid #ccc;
		}
		
		.button {
			background-color: #4CAF50;
			color: white;
			padding: 12px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-size: 16px;
			margin-top: 10px;
		}
		
		.result {
			margin-top: 20px;
			font-size: 20px;
			font-weight: bold;
			text-align: center;
		}
		
		.positive {
			color: green;
		}
		
		.negative {
			color: red;
		}
	</style>
</head>
<body>
	<h1>Sentiment Analysis</h1>
	
	<div class="container">
		<label for="text">Enter some text:</label>
		<textarea id="text" class="textarea"></textarea>
		<button onclick="analyze()" class="button">Analyze</button>
		<div id="result" class="result"></div>
	</div>
	
	<script>
		function analyze() {
			var text = document.getElementById("text").value;
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "https://api.openai.com/v1/engines/davinci-codex/completions", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Authorization", "Bearer YOUR_API_KEY_HERE");
			xhr.onreadystatechange = function() {
				if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					var response = JSON.parse(this.responseText);
					var sentiment = response.choices[0].text.trim();
					var result = document.getElementById("result");
					result.innerText = sentiment;
					if (sentiment === "Positive") {
						result.classList.add("positive");
						result.classList.remove("negative");
					} else if (sentiment === "Negative") {
						result.classList.add("negative");
						result.classList.remove("positive");
					} else {
						result.classList.remove("positive");
						result.classList.remove("negative");
					}
				}
			};
			var data = {
				prompt: "analyze sentiment of: " + text,
				max_tokens: 1,
				model: "text-davinci-002",
				stop: ["\n"]
			};
			xhr.send(JSON.stringify(data));
		}
	</script>
</body>
</html>
