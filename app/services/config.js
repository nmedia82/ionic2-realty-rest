function isHeroku()
{
    // Rudimentary check to see if we are running on Heroku. Should provide a more flexible config.
    return window.location.indexOf('herokuapp') > 0;
}

export let SERVER_URL = isHeroku() ? "/" : "http://localhost:5000/";