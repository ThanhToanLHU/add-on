console.log(window.location.href);

function isImagePath(path) {
    // /PROFILE_WS/symlink/ ... Id_OK.jpg
    return path &&
        path.endsWith('.jpg');
    return path &&
        path.startsWith('/PROFILE_WS/symlink/') &&
        path.endsWith('_OK.jpg');
}

if (isImagePath(window.location.pathname)) {
    console.log('Can be downloaded');

    const IMAGE_URL = window.location.href;
    const FILE_NAME = IMAGE_URL.substring(IMAGE_URL.lastIndexOf('/') + 1);

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', IMAGE_URL);
    downloadLink.setAttribute('download', FILE_NAME);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
