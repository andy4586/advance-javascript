//  fetch('https://jsonplaceholder.typicode.com/posts/1').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    // Do An Asynchronous Task
    // DB Calls , cyptography , network calls, etc.
    setTimeout(() => {
        console.log('Any Asynchronous Task is Completed');
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log('Promise Consumed');
});

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Another Asynchronous Task is Completed');
        resolve();
    }, 1000)
}).then(function () {
    console.log('Another Promise Consumed');
});


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "JohnDoe", age: 30 });
    }, 1000)
});

promiseThree.then(() => {
    console.log(user);
});

const promiseFour = new Promise(resolve, reject => {
    setTimeout(() => {
        let error = True;
        if (!error) {
            resolve({
                username: "JaneDoe",
                age: 25
            });
        } else {
            reject('ERROR: Unable to fetch user data');
        }

    }, 1000)
});

promiseFour.then(user => {
    console.log(user);
    return user.username;
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Promise Completed Or Failed');
    // This will always execute
    // Useful for cleanup tasks
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = True;
        if (!error) {
            resolve({
                username: "JavaScriptMaster",
                password: "securePassword123"
            });
        } else {
            reject('ERROR: JS Master data not found');
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        console.log(data);
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

getAllUsers()



