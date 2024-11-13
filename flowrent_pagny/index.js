const crypto = require('crypto');

function execWorkflow(id, input, tasks) {
    let rank = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]["id"] === id) {
            rank = i;
            break;
        }
    }
    if (tasks[rank]["task_type"] === "primitive") {
        return crypto.createHash('md5').update(input).digest();
    } else if (tasks[rank]["task_type"] === "") {
        return crypto.createHash('md5').update(Buffer.from("")).digest();
    } else if (tasks[rank]["tasks"].length === 0) {
        return crypto.createHash('md5').update(Buffer.from("")).digest();
    } else {
        const workflowTasks = tasks[rank]["tasks"];
        let result = Buffer.from("");
        for (let i = 0; i < workflowTasks.length; i++) {
            result = Buffer.concat([result, execWorkflow(workflowTasks[i], input, tasks)]);
        }
        return crypto.createHash('md5').update(result).digest();
    }
}

function execWorkflowRoot(id, input, tasks) {
    let result = Buffer.from('');
    let rank = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]["id"] === id) {
            rank = i;
            break;
        }
    }
    const workflowTasks = tasks[rank]["tasks"];
    if (workflowTasks.length === 0) {
        return crypto.createHash('md5').update(result).digest('hex');
    }
    for (let i = 0; i < workflowTasks.length; i++) {
        result = Buffer.concat([result, execWorkflow(workflowTasks[i], input, tasks)]);
    }
    return crypto.createHash('md5').update(result).digest('hex');
}

function flowrentPagny(tasks, exec) {
    const result = [];
    for (let i = 0; i < exec.length; i++) {
        result.push(execWorkflowRoot(exec[i]["workflow_id"], exec[i]["input"], tasks));
    }
    return result;
}

function main() {
    const tasks = JSON.parse(process.argv[2]);
    const exec = JSON.parse(process.argv[3]);
    console.log(JSON.stringify(flowrentPagny(tasks, exec)));
}

main();