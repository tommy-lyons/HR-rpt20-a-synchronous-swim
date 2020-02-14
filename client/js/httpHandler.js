(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'http://127.0.0.1:3000', // should work
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);  // invokes POST request with
  });


  /////////new GET request
  const ajaxRandomGet = (callback) => {
    console.log('ajaxRandomGet was called');
    $.ajax({
      type: 'GET',
      data: 'random',
      url: 'http://127.0.0.1:3000',
      success: (data) => {
        console.log('this is the data from the server', data);
        callback(data);
      }
    });
  };

  const ajaxServerSwimGet = (callback) => {
    console.log('ajaxRandomGet was called');
    $.ajax({
      type: 'GET',
      data: 'S',
      url: 'http://127.0.0.1:3000',
      success: (data) => {
        console.log('this is the data from the server', data);
        callback(data);
      }
    });
  };

  // const ajaxGetImage = (callback) => {
  //   console.log('ajaxGetImage was called');
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://127.0.0.1:3000',
  //     data: 'image',
  //     success: (data) => {
  //       console.log('this is the data from the server', data);
  //       callback(data);
  //     }
  //   });
  // };
  // var addImage = (data) => {
  //   // debugger;
  //     $('.pool').css('background-image', 'url(' + data + ')');
  //   }


  // add setInterval random swimming functionality that starts on the page load
  // $(document).ready(
    // call an ajax fuction
    // ajaxGetImage(addImage)

  //   $(document).ready(
  //   setInterval(function(){
  //   ajaxRandomGet(SwimTeam.move)
  //   }, 1000)
  //  );

  $('body').on('keydown', (event) => {
    // debugger;
    console.log('Logging the event ', event);

    var sPress = event.key.match(/s/);
    console.log(sPress);
    if (sPress) {
    // call get request with a callback to call swimTeam.move(randomMessage);
    ajaxServerSwimGet(SwimTeam.move);
    }
  });

})();

