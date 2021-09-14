
// variables
let mainContainer = document.querySelector('.todo-container');
let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let tasksContent = document.querySelector('.tasks-content');

let tasksCount = document.querySelector('.tasks-count span');
let tasksCompleted = document.querySelector('.tasks-Completed span');

let delAll = document.querySelector('.delAll');
let finishAll = document.querySelector('.finishAll');

//focus in input field

window.onload = function focusIn() {

    theInput.focus();
};

// adding task

theAddButton.onclick = function () {

    //check input field

    if (theInput.value === '') {
        swal({
            title: "problem!",
            text: "You cannot ignore input field!",
            icon: "warning",
        });
    } else {

        let noTasksMessage = document.querySelector('.no-tasks-message');

        //check if span  noTasksMessage exist
        if (document.body.contains(document.querySelector('.no-tasks-message'))) {

            // remove no-task-message
            noTasksMessage.remove();
        }



        //create main span element
        let mainSpan = document.createElement('span');

        //create Delete button
        let delButton = document.createElement('span');

        //create mainSpan text
        let spText = document.createTextNode(theInput.value);

        //add text to mainSpan
        mainSpan.appendChild(spText);

        //add class to span
        mainSpan.className = 'task-box';

        //crate delButton text
        let delButtonText = document.createTextNode('Delete');

        //add text to delButton
        delButton.appendChild(delButtonText);

        //add class to delButton
        delButton.className = 'delete';

        //add delete button to mainSpan
        mainSpan.appendChild(delButton);

        // add main span to document body
        tasksContent.appendChild(mainSpan);

        theInput.value = '';
        focusIn()

        // calc tasks
        calcTasks();
    }
};


// delete task

document.addEventListener('click', function (e) {

    if (e.target.className == 'delete') {

        e.target.parentNode.remove();
    }


    // finish task

    if (e.target.classList.contains('task-box')) {

        e.target.classList.toggle('finished');
    }

    // check number of tasks inside container

    if (tasksContent.childElementCount == 0) {

        createTaskMessage();
    };

    
    calcTasks();
});


// delete all
delAll.onclick = function () {

    tasksContent.remove();

};


//finish all
finishAll.onclick = function () {

    tasksContent.classList.toggle('finished');
};

//function to create no task message

function createTaskMessage() {

    // create span element
    let spanMessage = document.createElement('span');

    // create  span text
    let textSpanMessage = document.createTextNode('no tasks to show');

    //add text to span
    spanMessage.appendChild(textSpanMessage);

    // add class to span element
    spanMessage.className = 'no-tasks-message';

    //add span to tasks-content
    tasksContent.appendChild(spanMessage);


};


//function to calculate tasks

function calcTasks() {

    // clac all tasks

    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // calc completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

};



