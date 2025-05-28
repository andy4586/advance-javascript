let intervalId = null;

    const changeColor = function () {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        console.log("Color changed to:", randomColor);
    };

    document.querySelector('#start').addEventListener('click', function () {
        if (!intervalId) {
            intervalId = setInterval(changeColor, 1000);
            console.log("Started changing colors");
        }
    });

    document.querySelector('#stop').addEventListener('click', function () {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Stopped changing colors");
    });