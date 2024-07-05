document.addEventListener('DOMContentLoaded', () => {
    const quizRecordTableBody = document.getElementById('quizRecordTableBody');
    const entryInfo = document.getElementById('entryInfo');
    const searchInput = document.getElementById('search');
    const entriesSelect = document.getElementById('entries');
    const btnPrevious = document.getElementById('btnPrevious');
    const btnNext = document.getElementById('btnNext');
    const currentPageElement = document.getElementById('currentPage');

    let quizRecords = [
        { studentName: 'John Doe', quiz: 'Math Test', score: 85 },
        { studentName: 'Jane Smith', quiz: 'Science Test', score: 90 },
        // Add more records as needed
    ];
    let currentPage = 1;
    let itemsPerPage = parseInt(entriesSelect.value);

    function renderTable() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, quizRecords.length);
        quizRecordTableBody.innerHTML = '';

        for (let i = startIndex; i < endIndex; i++) {
            const record = quizRecords[i];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-2 border-b text-center">${i + 1}</td>
                <td class="py-2 border-b text-center">${record.studentName}</td>
                <td class="py-2 border-b text-center">${record.quiz}</td>
                <td class="py-2 border-b text-center">${record.score}</td>
            `;
            quizRecordTableBody.appendChild(row);
        }

        entryInfo.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${quizRecords.length} entries`;
        currentPageElement.textContent = currentPage;
    }

    function filterRecords() {
        const searchTerm = searchInput.value.toLowerCase();
        quizRecords = quizRecords.filter(record => 
            record.studentName.toLowerCase().includes(searchTerm) ||
            record.quiz.toLowerCase().includes(searchTerm) ||
            record.score.toString().includes(searchTerm)
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
});
