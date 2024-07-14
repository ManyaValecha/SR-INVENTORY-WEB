document.addEventListener('DOMContentLoaded', function () {
    // Fetch inventory data from backend
    function fetchInventory() {
        fetch('/api/inventory')
            .then(response => response.json())
            .then(data => {
                // Example: Update UI with fetched inventory data
                console.log('Fetched inventory:', data);
                // Replace with actual UI update logic
                displayInventory(data); // Example function to display inventory
            })
            .catch(error => {
                console.error('Error fetching inventory:', error);
                alert('Error fetching inventory. Please try again.');
            });
    }

    // Fetch issue history from backend
    function fetchIssueHistory() {
        fetch('/api/issue-history')
            .then(response => response.json())
            .then(data => {
                // Example: Update UI with fetched issue history
                console.log('Fetched issue history:', data);
                // Replace with actual UI update logic
                displayIssueHistory(data); // Example function to display issue history
            })
            .catch(error => {
                console.error('Error fetching issue history:', error);
                alert('Error fetching issue history. Please try again.');
            });
    }

    // Event listeners for buttons
    document.getElementById('viewInventoryBtn').addEventListener('click', fetchInventory);
    document.getElementById('viewIssueHistoryBtn').addEventListener('click', fetchIssueHistory);

    document.getElementById('addProjectBtn').addEventListener('click', function () {
        // Example: Open modal or form for adding a new project
        console.log('Opening modal/form to add a new project');
        // Replace with actual modal or form handling logic
        openProjectModal(); // Example function to open modal for adding projects
    });

    document.getElementById('addItemBtn').addEventListener('click', function () {
        // Example: Open modal or form for adding a new item
        console.log('Opening modal/form to add a new item');
        // Replace with actual modal or form handling logic
        openItemForm(); // Example function to open form for adding items
    });

    // Example function to display inventory (replace with your actual UI update logic)
    function displayInventory(data) {
        const inventoryList = document.getElementById('inventoryList');
        if (inventoryList) {
            inventoryList.innerHTML = ''; // Clear existing list
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `Item ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}`;
                inventoryList.appendChild(listItem);
            });
        }
    }

    // Example function to display issue history (replace with your actual UI update logic)
    function displayIssueHistory(data) {
        const issueHistoryList = document.getElementById('issueHistoryList');
        if (issueHistoryList) {
            issueHistoryList.innerHTML = ''; // Clear existing list
            data.forEach(issue => {
                const listItem = document.createElement('li');
                listItem.textContent = `Date: ${issue.date}, Item ID: ${issue.itemId}, Issued To: ${issue.issuedTo}`;
                issueHistoryList.appendChild(listItem);
            });
        }
    }

    // Example function to open modal for adding projects (replace with your actual UI handling logic)
    function openProjectModal() {
        // Example: Code to open a modal dialog for adding projects
        console.log('Opening modal dialog to add a new project');
        // Replace with actual modal handling logic
    }

    // Example function to open form for adding items (replace with your actual UI handling logic)
    function openItemForm() {
        // Example: Code to open a form for adding items
        console.log('Opening form to add a new item');
        // Replace with actual form handling logic
    }
});
