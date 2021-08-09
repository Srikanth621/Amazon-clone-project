let input = document.querySelector('input')
let textarea = document.querySelector('textarea')

input.addEventListener('change', () => {
    let files = input.files;

    if (files.length == 0) return;
    
    const file = files[0]
    
    //read the file
	
	let reader = new FileReader()

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/)
        textarea.value = lines.join('\n')
		
		
		//fetching of the api key
		
        fetch('https://api.textgears.com/spelling?key=UGpUzODZpbQDqcUa&text='+ textarea.value)
            .then(response => response.json())
           
    }

	//Display the error
    reader.onerror = (e) => alert(e.target.error.name)

    reader.readAsText(file)

    
})
