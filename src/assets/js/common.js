let _commonJs = {

  toString(obj) {
    return JSON.stringify(exportObj, null, 2);
  },

  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  },

  ckEditorDefaultConfig: any = {
    allowedContent: true,
    toolbar: [['Bold', 'Italic', 'Underline', '-', 'BulletedList', 'NumberedList', 'Link', '-', 'Table', 'Image', '-', 'Source']],
    removePlugins: 'elementspath',
    resize_enabled: true,
    extraPlugins: 'font, divarea',
    contentsCss: ["body {font-family: arial, sans-serif;}"],
    autoParagraph: false,
    enterMode: 2,
    height: 120
  },

  removeItem(arr, item) {
    let idx = arr.indexOf(item)
    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  },

  arrayChunks(inputArray, perChunk) {
    if (inputArray == undefined || inputArray.length == 0) {
      return [];
    }

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index/perChunk)

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])

    return result;
  },

  clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  extendObj(obj, ext) {
    return Object.assign(this.clone(obj), ext);
  },

  camelizeString(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  },

  doOnFileChange(event, callback) {
    const files = event.target.files
    if (files.length >= 1 ) {
      const selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(selectedFile, "UTF-8");
      fileReader.onload = () => {
        const fileAsText = fileReader.result;
        callback(fileAsText)
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }

      event.target.value = '';
    }
  },

  downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  },


  appendString(_string, _toAppend, _separator) {
    var separator = _separator;
    var string = _string;
    var toAppend = _toAppend;
    if (string == undefined) {
      string = "";
    }
    if (toAppend == undefined) {
      toAppend = "";
    }

    if (string === "" || toAppend === "") {
      separator = "";
    }
    return string + separator + toAppend;
  },

  triggerPrint() {
    alert(
      "For the best printing result:\n"+
      "1) Use Chrome browser\n" +
      '2) Tick "Background Graphics"\n' +
      '3) Set Margin to "Minimum"\n\n' +
      'To SAVE AS PDF:\n' +
      '1) Set Destination "Save as PDF\n' +
      '2) Tick "Background Graphics\n' +
      '3) Select Margin to "None"\n'
    )
    window.print();
  },

}


