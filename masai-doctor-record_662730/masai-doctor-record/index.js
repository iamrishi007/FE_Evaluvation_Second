let name = document.getElementById('name')
let docId = document.getElementById('doctor_id')
let specialization = document.getElementById('specialization')

let experience = document.getElementById('experience')
let email = document.getElementById('email')

let mobile = document.getElementById('mobile')

let form = document.querySelector('form')
let tbody = document.querySelector('tbody')

let list = []


form.addEventListener('submit', function (e) {
          e.preventDefault();

          let obj = {};
          obj.name = name.value
          obj.docID = docId.value
          obj.specialization = specialization.value
          obj.experience = experience.value
          obj.email = email.value
          obj.mobile = mobile.value

          // console.log(obj)
          list.push(obj);
          // console.log(list)
          tbody.innerHTML = "";

          list.forEach(elm => {
                    let row = document.createElement('tr')
                    let td1 = document.createElement('td')
                    let td2 = document.createElement('td')
                    let td3 = document.createElement('td')
                    let td4 = document.createElement('td')
                    let td5 = document.createElement('td')
                    let td6 = document.createElement('td')
                    let td7 = document.createElement('td')
                    let td8 = document.createElement('td');


                    td1.innerText = elm.name
                    td2.innerText = elm.docID
                    td3.innerText = elm.specialization;
                    td4.innerText = elm.experience;
                    td5.innerText = elm.email
                    td6.innerText = elm.mobile
                    let deleteButton = document.createElement('button');

                    row.append(td1, td2, td3, td4, td5, td6)

                    if (Number(elm.experience) > 5) {
                              td7.innerText = "Senior"
                    } else if (Number(elm.experience) >= 2 && Number(elm.experience) <= 5) {
                              td7.innerText = "Junior"
                    } else {
                              td7.innerText = "Trainee"
                    }
                    row.appendChild(td7)
                    tbody.appendChild(row)
          });
});
