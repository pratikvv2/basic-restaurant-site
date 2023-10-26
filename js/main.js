


// const dob = document.querySelector('input[id="dob"]')
// const dob = document.querySelector('input[name="dob"]')


const submit = document.getElementById('submit');

submit.addEventListener("click", () => {
    const dob = document.querySelector('#dob').value;
    // const colleges = document.getElementById('colleges').value;
    const username = document.getElementById('username').value;
    const emailId = document.getElementById('emailId').value;

    const show = document.getElementById('show');


    const colleges = document.getElementById('colleges')

    let arr = [];
    for (let i = 0; i < colleges.options.length; i++) {
        const temp = colleges.options[i];
        if (temp.selected) {
            // console.log(temp.value);
            arr.push(temp.value)
        }

    }


    // show.innerText = `Username: ${username}, EmailId: ${emailId}, DoB: ${dob}, College: ${colleges}`
    show.innerText = `Username: ${username}, EmailId: ${emailId}, DoB: ${dob}, College: ${arr.join(', ')}`


    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let arr2 = [];
    checkboxes.forEach((item) => {
        if (item.checked) {
            // console.log(item.value);
            arr2.push(item.value)
        }
    })

    show.innerText += ` Branches checked: ${arr2.join(', ')}`;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    show.innerText += ` I am: ${gender}`;

});

// for image
document.getElementById('profilePic').addEventListener('change', (event) => {
    const file = event.target.files[0];
    // console.log(event.target.files);
    if (file) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = function (e) {
            const actualImage = e.target.result;
            const selectedImg = document.getElementById('selectedImg');
            // selectedImg.innerHTML = `<img style="height:100px; width:100px; border-radius: 50%; object-fit: cover; border: 1px solid gray;" src="${actualImage}" alt="" />`;
            selectedImg.innerHTML = `<img class="selectedImage" src="${actualImage}" alt="" />`;
        }
    }
})

console.log(890000);
console.log(1234);