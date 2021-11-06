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

}


