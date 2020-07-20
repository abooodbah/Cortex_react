// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
sleep(2000).then(() => {
    var Beta = document.getElementById("LoadingPage");
    var alpha = document.getElementById("html");
    var Gamma = document.getElementById("LoadingSection");
    Beta.style.display = 'none';
    alpha.style.background = 'white';
    Gamma.style.display = 'none';
});

