let _commonJs = {

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

}


