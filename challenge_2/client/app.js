
var outputBox = document.getElementById('outputBox');
var file;
var CSVdata;

function extractFilename(path) {
  if (path.substr(0, 12) == "C:\\fakepath\\")
    return path.substr(12); // modern browser
  var x;
  x = path.lastIndexOf('/');
  if (x >= 0) // Unix-based path
    return path.substr(x+1);
  x = path.lastIndexOf('\\');
  if (x >= 0) // Windows-based path
    return path.substr(x+1);
  return path; // just the file name
}


var fetchData = (data,callback) => {


console.log('data in fetchData:',data);

fetch('http://127.0.0.1:4568/',
	{method:'POST',
	headers: {
	'Accept': 'application/json',
    'Content-Type': 'application/json'
	},
	body: JSON.stringify({data})
})
.then(function(response) {
  return response.json();
})
.then( (data) => {
	outputBox.innerHTML = data;
	CSVdata = data;
});

}

$('form').on('submit', (event) => {
	event.preventDefault();
	console.log('file :', file);

	fetchData(file, () => {

		console.log('done');

	});

});

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURI(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  console.log($('a'));
  element.click();
  document.body.removeChild(element);
}


$('#download').on('click', (event) => {
	download('file.csv',CSVdata);
});

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    
    for (var i = 0, f; f = files[i]; i++) {
 		console.log(f);
		
		if (f) {
	       var reader = new FileReader();
	       reader.readAsText(f, "UTF-8");
	       reader.onload = function (evt) {
	           
	           file = evt.target.result;
	       }
	       reader.onerror = function (evt) {
	           console.log('error');
	       }
		}


	}



    //console.log(output);
  }



$('#inputBox').on('change', handleFileSelect);