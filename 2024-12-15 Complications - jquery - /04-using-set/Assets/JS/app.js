"use strict";

(() => {

    const getData = async (URL) => {
        return fetch(URL).then(response => response.json());
    }

    const generateUsersTable = todos => {
        //With Set() we can get unique values
        const usersID = [...new Set(todos.map(todo => todo.userId))].map(user => user);
        const newHTML = usersID.map((user) => {
            return `
            <tr>
                <td>${user}</td>
                <td>${todos.filter(todo => todo.userId === user && todo.completed).length}</td>
                <td>${todos.filter(todo => todo.userId === user && !todo.completed).length}</td>         
            </tr>
            `
        }).reduce((acc, next) => acc + next, '');
        return newHTML;
    }

    const generateStatsTable = todo => {
        const totalToDos = todo.length;
        const completedToDos = todo.filter(todo => todo.completed).length;
        const notCompletedToDos = totalToDos - completedToDos;
        const completedPercentage = (completedToDos / totalToDos) * 100;

        return `
        <tr>
            <td>total todos:</td>
            <td>${totalToDos}</td>
        </tr>
        <tr>
            <td>completed todos:</td>
            <td>${completedToDos}</td>
        </tr>
        <tr>
            <td>not completed todos:</td>
            <td>${notCompletedToDos}</td>
        </tr>
        <tr>
            <td>completed percentage:</td>
            <td>${completedPercentage}%</td>
        </tr>
        `
    }

    const generateHTML = data => {
        const newHTML = data.map(todo => {
            const {userId, id, title, completed} = todo;
           return  `
            <tr>
                    <td>
                        ${userId}
                    </td>
                    <td>
                        ${id}
                    </td>
                    <td>
                        ${title}
                    </td>
                    <td>
                        ${completed ? 'Yes' : 'No'}
                    </td>
            </tr>
           `;
        }).reduce((acc, next) => acc + next, '');
        return newHTML;
    }

    const renderHTML = html => {
        document.getElementById('toDoList').innerHTML = html;
    }

    const renderStats = html => {
        document.getElementById('stats').innerHTML = html;
    }

    const renderUsers = html => {
        document.getElementById('user').innerHTML = html;
    }

    document.getElementById('btn').addEventListener('click', async () => {
        try {
            //get data from the server
            const todo = await getData('https://jsonplaceholder.typicode.com/todos');

            //generate HTML
            const todoTableHTML = generateHTML(todo);
            const statsTableHTML = generateStatsTable(todo);
            const userTableHTML = generateUsersTable(todo);

            //render HTML
            renderHTML(todoTableHTML);
            renderStats(statsTableHTML);
            renderUsers(userTableHTML);
            
        } catch (error) {
            console.error(error);
        }
    });
})();