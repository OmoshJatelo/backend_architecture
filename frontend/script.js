const signupForm = document.getElementById("signupForm");

const message = document.getElementById("message");

const fetchUsersButton = document.getElementById("fetchUsers");

const userList = document.getElementById("userList");


// SIGN UP
signupForm.addEventListener("submit", async (event) => {

    // Stop the browser from submitting the form normally
    event.preventDefault();


    // Get values from the form
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;


    try {

        // Send data to Express backend
        const response = await fetch(
            "http://localhost:3000/api/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email
                })
            }
        );


        const user = await response.json();


        if (!response.ok) {
            message.textContent = user.message || "Something went wrong";
            return;
        }


        message.textContent =
            `Account created for ${user.name}`;


        // Clear form
        signupForm.reset();

    } catch (error) {

        console.error(error);

        message.textContent =
            "Could not connect to the server.";
    }

});


// FETCH USERS
fetchUsersButton.addEventListener("click", async () => {

    try {

        const response = await fetch(
            "http://localhost:3000/api/users"
        );


        const users = await response.json();


        userList.innerHTML = "";


        users.forEach((user) => {

            const div = document.createElement("div");

            div.classList.add("user");


            div.textContent =
                `${user.id} - ${user.name} - ${user.email}`;


            userList.appendChild(div);

        });

    } catch (error) {

        console.error(error);

        userList.textContent =
            "Could not fetch users.";
    }

});