document.addEventListener('DOMContentLoaded', () => {
    const quizListTableBody = document.getElementById('quizListTableBody');
    const entryInfo = document.getElementById('entryInfo');
    const searchInput = document.getElementById('search');
    const entriesSelect = document.getElementById('entries');
    const btnPrevious = document.getElementById('btnPrevious');
    const btnNext = document.getElementById('btnNext');
    const currentPageElement = document.getElementById('currentPage');

    let quizRecords = [
        { id: 1, title: 'Test Exam', items: 1, points: 5, faculty: 'Tapushe Rabaya Toma' },
        // Add more records as needed
    ];
    let currentPage = 1;
    let itemsPerPage = parseInt(entriesSelect.value);

    function renderTable() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, quizRecords.length);
        quizListTableBody.innerHTML = '';

        for (let i = startIndex; i < endIndex; i++) {
            const record = quizRecords[i];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-2 border-b text-center">${i + 1}</td>
                <td class="py-2 border-b text-center">${record.title}</td>
                <td class="py-2 border-b text-center">${record.items}</td>
                <td class="py-2 border-b text-center">${record.points}</td>
                <td class="py-2 border-b text-center">${record.faculty}</td>
                <td class="py-2 border-b text-center">
                    <button class="px-2 py-1 font-semibold text-blue-500 border border-blue-500 rounded">Manage</button>
                    <button class="px-2 py-1 font-semibold text-white bg-blue-500 rounded">Edit</button>
                    <button class="px-2 py-1 font-semibold text-white bg-red-500 rounded" onclick="deleteQuiz(${record.id})">Delete</button>
                </td>
            `;
            quizListTableBody.appendChild(row);
        }

        entryInfo.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${quizRecords.length} entries`;
        currentPageElement.textContent = currentPage;
    }

    function deleteQuiz(id) {
        if (confirm('Are you sure you want to delete this data?')) {
            quizRecords = quizRecords.filter(record => record.id !== id);
            renderTable();
        }
    }

    function filterRecords() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecords = quizRecords.filter(record => 
            record.title.toLowerCase().includes(searchTerm) ||
            record.items.toString().includes(searchTerm) ||
            record.points.toString().includes(searchTerm) ||
            record.faculty.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderTable();
    }

    searchInput.addEventListener('input', filterRecords);

    entriesSelect.addEventListener('change', () => {
        itemsPerPage = parseInt(entriesSelect.value);
        currentPage = 1;
        renderTable();
    });

    btnPrevious.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });

    btnNext.addEventListener('click', () => {
        if ((currentPage * itemsPerPage) < quizRecords.length) {
            currentPage++;
            renderTable();
        }
    });

    renderTable();

    window.deleteQuiz = deleteQuiz; // Make deleteQuiz function accessible globally
});
