function completeTask(button, taskTitle) {
    alert(`Board added successfully `);
    button.disabled = true;
    button.classList.add('bg-gray-400', 'cursor-not-allowed');
    button.classList.remove('bg-blue-500');
    
    let taskAssigned = document.getElementById("taskAssigned");
    let taskCompleted = document.getElementById("taskCompleted");
    let activityLog = document.getElementById("showtext");

    let assignedCount = parseInt(taskAssigned.innerText);
    let completedCount = parseInt(taskCompleted.innerText);
    
    if (assignedCount > 0) {
        taskAssigned.innerText = assignedCount - 1;
    }
    taskCompleted.innerText = completedCount + 1;

    let currentTime = new Date().toLocaleTimeString();
    let logEntry = `<p class="bg-slate-100 rounded-lg w-[280px] h-[50px] ml-3 p-3 mt-4 text-xs font-semibold"> You have completed the task ${taskTitle} at ${currentTime}</p>`;
    activityLog.innerHTML += logEntry;
}
function completeTaskWithDoubleAlert(button, taskTitle) {
    let activityLog = document.getElementById("showtext");
    alert(`Board updated successfully`);
    alert(`Congrats!!! You have completed all the current task`);
    
    button.disabled = true;
    button.classList.add('bg-gray-400', 'cursor-not-allowed');
    button.classList.remove('bg-blue-500');
    let currentTime = new Date().toLocaleTimeString();
    let logEntry = `<p class="bg-slate-100 rounded-lg w-[280px] h-[50px] ml-3 p-3 mt-4 text-xs font-semibold"> You have completed the task ${taskTitle} at ${currentTime}</p>`;
    activityLog.innerHTML += logEntry;
    
    
}







// document.querySelectorAll(".btn").forEach(button => {
//     button.addEventListener("click", function() {
//         alert(this.innerText + " clicked!");
//         this.disabled = true;
//         this.classList.add("bg-gray-400", "cursor-not-allowed");
//         this.classList.remove("bg-blue-700");
//     });
// });