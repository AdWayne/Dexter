function openTerms() {
    const termsUrl = "terms_of_use.html";
    window.open(termsUrl, "_blank");
}

document.getElementById("registration-form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const formData = new FormData(this);

    let user = {};

    formData.forEach((value, key) => {
        if (user[key]) {
            if (Array.isArray(user[key])) {
                user[key].push(value);
            } else {
                user[key] = [user[key], value];
            }
        } else {
            user[key] = value; 
        }
    });

    localStorage.setItem('user', JSON.stringify(user));

    console.log(user);

    window.location.href = "index.html";
});