// javaScript => 1. Synchronous 
//               2. Single threaded (Default)


// Execution Context =>
//                     (Execute one line of code at a time )
//                    console log - 1 (call stack)
//                    console.log - 2 (Memory Heap)
// Each Opaeration waits for the previous one to complete before executing the next one.
// FIFO (First In First Out) - Queue
// LILO (Last In Last Out) - Stack

// Example of Synchronous Code
console.log("1");
console.log("2");
console.log("3");

// Example of Asynchronous Code
setTimeout(() => {
    console.log("4");
}, 2000);


// Bloking code vs Non-Blocking code
//      1. Blocking Code:  => block the flow of program => Read File Sync
//      2. Non-Blocking Code: => does not block the flow of program => Read File Async    

