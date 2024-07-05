document.addEventListener('DOMContentLoaded', () => {
    const quizTableBody = document.getElementById('quizTableBody');
    const entryInfo = document.getElementById('entryInfo');
    const addNewQuizModal = document.getElementById('addNewQuizModal');
    const btnAddNew = document.getElementById('btnAddNew');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const addNewQuizForm = document.getElementById('addNewQuizForm');

    let quizzes = [];
    let currentPage = 1;
    const itemsPerPage = 5;

    function renderTable() {
        quizTableBody.innerHTML = '';
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, quizzes.length);

        for (let i = startIndex; i < endIndex; i++) {
            const quiz = quizzes[i];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-2 border-b text-center">${i + 1}</td>
                <td class="py-2 border-b text-center">${quiz.title}</td>
                <td class="py-2 border-b text-center">${quiz.items}</td>
                <td class="py-2 border-b text-center">${quiz.points}</td>
                <td class="py-2 border-b text-center">${quiz.faculty}</td>
                <td class="py-2 border-b text-center">
                    <button class="px-2 py-1 font-semibold text-blue-500 border border-blue-500 rounded">Manage</button>
                    <button class="px-2 py-1 font-semibold text-white bg-blue-500 rounded">Edit</button>
                    <button class="px-2 py-1 font-semibold text-white bg-red-500 rounded" onclick="deleteQuiz(${i})">Delete</button>
                </td>
            `;
            quizTableBody.appendChild(row);
        }

        entryInfo.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${quizzes.length} entries`;
    }

    function deleteQuiz(index) {
        quizzes.splice(index, 1);
        renderTable();
    }

    btnAddNew.addEventListener('click', () => {
        addNewQuizModal.classList.remove('hidden');
    });

    btnCloseModal.addEventListener('click', () => {
        addNewQuizModal.classList.add('hidden');
    });

    addNewQuizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newQuiz = {
            title: document.getElementById('newQuizTitle').value,
            items: document.getElementById('newQuizItems').value,
            points: document.getElementById('newQuizPoints').value,
            faculty: document.getElementById('newQuizFaculty').value,
        };
        quizzes.push(newQuiz);
        addNewQuizModal.classList.add('hidden');
        renderTable();
    });

    renderTable();
});
