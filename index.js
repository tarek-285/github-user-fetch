const parent = document.getElementById("main-container");

async function run() {
    try {
        parent.innerHTML = "<h2>Loading...</h2>";

        const res = await fetch("https://api.github.com/users");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await res.json();

        parent.innerHTML = ""; 

        for (let user of result) {

            const box = document.createElement("div");
            box.classList.add("box");

            const img = document.createElement("img");
            img.src = user.avatar_url;

            const name = document.createElement("h3");
            name.innerText = user.login;

            const link = document.createElement("a");
            link.href = user.html_url;
            link.innerText = "View Profile";
            link.target = "_blank";

            box.append(img, name, link);
            parent.append(box);
        }

    } catch (error) {
        console.error(error);
        parent.innerHTML = "<h2>Something went wrong!</h2>";
    }
}

run();