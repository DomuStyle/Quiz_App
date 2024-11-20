let questions = [
    {
        "question": "What happens when you write 'console.log('Hello World');' in JavaScript?",
        "answer_1": "The computer says 'Hello World'",
        "answer_2": "Your screen goes blank",
        "answer_3": "A message appears in the console",
        "answer_4": "The code is ignored",
        "right_answer": 3
    },
    {
        "question": "What do you call a variable that can change?",
        "answer_1": "var",
        "answer_2": "cannotsay",
        "answer_3": "const",
        "answer_4": "let",
        "right_answer": 4
    },
    {
        "question": "Which array method removes the last element?",
        "answer_1": "array.remove()",
        "answer_2": "array.pop()",
        "answer_3": "array.shift()",
        "answer_4": "array.delete()",
        "right_answer": 2
    },
    {
        "question": "How do you add a new element to the beginning of an array?",
        "answer_1": "array.push(item)",
        "answer_2": "array.unshift(item)",
        "answer_3": "array.shift(item)",
        "answer_4": "array.addFirst(item)",
        "right_answer": 2
    },
    {
        "question": "How do you create a function that only runs once?",
        "answer_1": "function once(fn) { let ran = false; return function() { if (!ran) { ran = true; return fn.apply(this, arguments); }}};",
        "answer_2": "function single(fn) { return fn; }",
        "answer_3": "function executeOnce(fn) { fn(); }",
        "answer_4": "function oneTime(fn) { fn.call(this); }",
        "right_answer": 1
    },
    {
        "question": "Which method is used to create a delay in JavaScript?",
        "answer_1": "setTimeout()",
        "answer_2": "delay()",
        "answer_3": "sleep()",
        "answer_4": "wait()",
        "right_answer": 1
    },
    {
        "question": "What is the result of 'null == undefined' in JavaScript?",
        "answer_1": "true",
        "answer_2": "false",
        "answer_3": "null",
        "answer_4": "undefined",
        "right_answer": 1
    },
    {
        "question": "What does the spread operator (...) do when used on an array?",
        "answer_1": "It compresses the array into a single value",
        "answer_2": "It expands the array into individual elements",
        "answer_3": "It removes duplicate elements",
        "answer_4": "It sorts the array in ascending order",
        "right_answer": 2
    },
    {
        "question": "What is the purpose of the 'this' keyword in JavaScript?",
        "answer_1": "It refers to the current HTML element",
        "answer_2": "It points to the global object",
        "answer_3": "It references the current execution context of a function",
        "answer_4": "It is used to declare new variables",
        "right_answer": 3
    },
    {
        "question": "How can you create a private variable in JavaScript using a closure?",
        "answer_1": "Use the 'private' keyword",
        "answer_2": "Enclose a variable within an immediately invoked function expression (IIFE)",
        "answer_3": "Prefix the variable name with '#'",
        "answer_4": "Declare it with 'var' inside a function",
        "right_answer": 2
    }
];