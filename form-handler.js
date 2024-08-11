document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return;
        }

        // Capture user input
        const userInput = {
            name: name,
            email: email,
            message: message
        };

        // Display the captured input (for demonstration purposes)
        displayFormData(userInput);
    });

    function displayFormData(data) {
        const output = document.getElementById('formOutput');
        output.innerHTML = `
            <h3>Form Submission Data:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
    }
});
