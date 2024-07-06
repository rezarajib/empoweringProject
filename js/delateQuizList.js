document.addEventListener('DOMContentLoaded', () => {
    const entriesSelect = document.getElementById('entries');
    const searchInput = document.getElementById('search');
    const quizListTableBody = document.getElementById('quizListTableBody');
    const entryInfo = document.getElementById('entryInfo');
    const btnPrevious = document.getElementById('btnPrevious');
    const btnNext = document.getElementById('btnNext');
    const currentPage = document.getElementById('currentPage');
    const addNewButton = document.getElementById('addNewButton');

    let quizList = []; // This should be your data source, fetch it from the server in a real application
    let filteredList = [];
    let perPage = parseInt(entriesSelect.value);
    let page = 1;

    // Sample data (you should replace this with data fetched from your server)
    quizList = [
        { id: 1, title: 'Test Exam', items: 1, pointPerItem: 5, faculty: 'Tapushe Rabaya Toma' }
        // Add more quizzes here
    ];

    const renderTable = () => {
        quizListTableBody.innerHTML = '';
        filteredList.slice((page - 1) * perPage, page * perPage).forEach((quiz, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-2 border-b">${(page - 1) * perPage + index + 1}</td>
                <td class="py-2 border-b">${quiz.title}</td>
                <td class="py-2 border-b">${quiz.items}</td>
                <td class="py-2 border-b">${quiz.pointPerItem}</td>
                <td class="py-2 border-b">${quiz.faculty}</td>
                <td class="py-2 border-b">
                    <button class="px-2 py-1 text-blue-500 border border-blue-500 rounded" onclick="manageQuiz(${quiz.id})">Manage</button>
                    <button class="px-2 py-1 text-blue-500 border border-blue-500 rounded" onclick="editQuiz(${quiz.id})">Edit</button>
                    <button class="px-2 py-1 text-red-500 border border-red-500 rounded" onclick="deleteQuiz(${quiz.id})">Delete</button>
                </td>
            `;
            quizListTableBody.appendChild(row);
        });

        const totalEntries = filteredList.length;
        entryInfo.innerText = `Showing ${(page - 1) * perPage + 1} to ${Math.min(page * perPage, totalEntries)} of ${totalEntries} entries`;
    };

    const updateFilteredList = () => {
        const searchText = searchInput.value.toLowerCase();
        filteredList = quizList.filter(quiz => quiz.title.toLowerCase().includes(searchText));
        page = 1; // Reset to first page
        renderTable();
    };

    entriesSelect.addEventListener('change', (e) => {
        perPage = parseInt(e.target.value);
        renderTable();
    });

    searchInput.addEventListener('input', updateFilteredList);

    btnPrevious.addEventListener('click', () => {
        if (page > 1) {
            page--;
            renderTable();
            currentPage.innerText = page;
        }
    });

    btnNext.addEventListener('click', () => {
        if (page * perPage < filteredList.length) {
            page++;
            renderTable();
            currentPage.innerText = page;
        }
    });

    addNewButton.addEventListener('click', () => {
        const title = prompt('Enter quiz title:');
        const items = prompt('Enter number of items:');
        const pointPerItem = prompt('Enter point per item:');
        const faculty = prompt('Enter faculty:');

        if (title && items && pointPerItem && faculty) {
            const newQuiz = {
                id: quizList.length + 1,
                title,
                items: parseInt(items),
                pointPerItem: parseInt(pointPerItem),
                faculty
            };
            quizList.push(newQuiz);
            updateFilteredList();
        }
    });

    // Initial render
    updateFilteredList();
});

// Delete quiz function (you can replace this with a real API call)
function deleteQuiz(id) {
    if (confirm('Are you sure you want to delete this quiz?')) {
        quizList = quizList.filter(quiz => quiz.id !== id);
        updateFilteredList();
    }
}

// Placeholder functions for manage and edit quiz (you can implement these as needed)
function manageQuiz(id) {
    alert(`Manage quiz with ID: ${id}`);
}

function editQuiz(id) {
    alert(`Edit quiz with ID: ${id}`);
}