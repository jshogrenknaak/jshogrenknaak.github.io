let papers = [
    {
        title: "Sample Paper 1",
        authors: "Author One",
        conference: "Sample Conference",
        selected: true,
        bib: "Sample Bib",
        abstract: "Sample abstract for paper 1.",
        arxiv_link: "#",
        journal_link: "#",
        data: "#",
        slides: "#",
        talk: "#"
    },
    {
        title: "Sample Paper 2",
        authors: "Author Two",
        conference: "Sample Conference",
        selected: false,
        bib: "Sample Bib 2",
        abstract: "Sample abstract for paper 2.",
        arxiv_link: "#",
        journal_link: "#",
        data: "#",
        slides: "#",
        talk: "#"
    },
    // Add more papers as needed
];

function renderPapers() {
    const papersList = document.getElementById('papersList');
    const allPapersList = document.getElementById('allPapersList');

    papersList.innerHTML = '';
    allPapersList.innerHTML = '';

    papers.forEach((paper, index) => {
        const listEntry = `
            <li style="font-size:18px">
                <b>${paper.title}</b><br>${paper.authors}.<br>${paper.conference}.<br>
                ${window.location.pathname.includes("all_papers.html") ? `
                    <input type="checkbox" id="select${index}" ${paper.selected ? 'checked' : ''} onclick="toggleSelection(${index})">
                    <label for="select${index}">Select</label>
                ` : ''}
                <br>
                <a href="javascript:copy('bib${index}')" class="button">[bib]</a>
                <a href="javascript:copy('abstract${index}')" class="button">[abstract]</a>
                <a href="${paper.arxiv_link}" class="button">[arXiv]</a>
                <a href="${paper.journal_link}" class="button">[journal]</a>
                <a href="${paper.data}" class="button">[data]</a>
                <a href="${paper.slides}" class="button">[slides]</a>
                <a href="${paper.talk}" class="button">[talk]</a>
                
                <div id="bib${index}" style="display:none; margin-top: 10px; padding-left: 20px;">${paper.bib}</div>
                <div id="abstract${index}" style="display:none; margin-top: 10px; padding-left: 20px;">${paper.abstract}</div>
            </li>
        `;

        if (window.location.pathname.includes("index.html")) {
            if (paper.selected) papersList.innerHTML += listEntry;
        } else {
            allPapersList.innerHTML += listEntry;
        }
    });
}

function toggleSelection(index) {
    papers[index].selected = !papers[index].selected;
}

function updateSelectedPapers() {
    // Here you could implement localStorage or a backend call to save the selections
    alert("Selected papers updated!");
}

function copy(id) {
    // Hide the last shown element if it's different from the current one
    if (lastShown && lastShown !== id) {
        document.getElementById(lastShown).style.display = "none";
    }

    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block"; // Show the element
        element.style.width = "800px"; // Adjust width as needed
        element.style.padding = "10px"; // Adjust padding as needed
        element.style.border = "2px dotted gray"; // Set border
        element.style.background = "#F5F5F5"; // Set background color
        lastShown = id; // Update the last shown element
    } else {
        element.style.display = "none"; // Hide the element
        lastShown = null; // Reset last shown if hiding
    }
}

// Initial render
renderPapers();
