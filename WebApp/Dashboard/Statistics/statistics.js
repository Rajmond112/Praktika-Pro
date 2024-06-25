console.log("Statistics page loaded");

document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  document.querySelector("#day").innerHTML = moment().format("dd");
  document.querySelector("#hours").innerHTML = moment().format("k");
  document.querySelector("#minutes").innerHTML = moment().format("mm");
  document.querySelector("#seconds").innerHTML = moment().format("ss");

  document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  requestAnimationFrame(updateTime);
}

var jsonData = {
  p1: 5,
  p2: "string",
  p3: true,
  p4: [1,2,3,4,5],
  Details: {
    userRef: 1,
    id: 2,
    description: "hello",
    DetailsInside:{
      id: 3
    }
  },
  p6:null

}
console.log(jsonData);
console.log(jsonData.Details.DetailsInside.id);
console.log(jsonData.p4[2]);
console.log(jsonData.Details.description);
jsonData.Details.description = "csa";
console.log(jsonData.Details.description);
jsonData.p5 = 5;
console.log(jsonData.p5);
console.log(jsonData.p6);

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:5137/api/User/GetUser");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log("GetUser response data: ", data);

    document.querySelector("#user-name").innerHTML = data.name;
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

const xhr2 = new XMLHttpRequest();
xhr2.open("GET", "http://localhost:5137/api/User/GetParameterizedUser?id=3&name='Rajmi'");
xhr2.send();
xhr2.responseType = "json";
xhr2.onload = () => {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    const data = xhr2.response;
    console.log("GetParameterizedUser response data: ",data);

    document.querySelector("#user-name").innerHTML = data.name;
  } else {
    console.log(`Error: ${xhr2.status}`);
  }
};

const xhr3 = new XMLHttpRequest();
xhr3.open("GET", "http://localhost:5137/api/User/GetInt");
xhr3.send();
xhr3.responseType = "json";
xhr3.onload = () => {
  if (xhr3.readyState == 4 && xhr3.status == 200) {
    const data = xhr3.response;
    console.log("GetInt response data: ",data);

    document.querySelector("#get-int").innerHTML = data;
  } else {
    console.log(`Error: ${xhr3.status}`);
  }
};

const xhr4 = new XMLHttpRequest();
xhr4.open("GET", "http://localhost:5137/api/User/GetString?first='Lajos'");
xhr4.send();
xhr4.responseType = "json";
xhr4.onload = () => {
  if (xhr4.readyState == 4 && xhr4.status == 200) {
    const data = xhr4.response;
    console.log("GetString response data: ",data);

    document.querySelector("#get-string").innerHTML = data;
  } else {
    console.log(`Error: ${xhr4.status}`);
  }
};

const xhr5 = new XMLHttpRequest();
xhr5.open("GET", "http://localhost:5137/api/User/GetStrings?firstname='Lajos'&secondname='Kirandul'");
xhr5.send();
xhr5.responseType = "json";
xhr5.onload = () => {
  if (xhr5.readyState == 4 && xhr5.status == 200) {
    const data = xhr5.response;
    console.log("GetStrings response data: ",data);

    document.querySelector("#get-strings").innerHTML = data;
  } else {
    console.log(`Error: ${xhr5.status}`);
  }
};

const xhr6 = new XMLHttpRequest();
xhr6.open("GET", "http://localhost:5137/api/User/GetInts?a=12&b=199");
xhr6.send();
xhr6.responseType = "json";
xhr6.onload = () => {
  if (xhr6.readyState == 4 && xhr6.status == 200) {
    const data = xhr6.response;
    console.log("GetInts response data: ",data);

    document.querySelector("#get-ints").innerHTML = data;
  } else {
    console.log(`Error: ${xhr6.status}`);
  }
};

const xhr7 = new XMLHttpRequest();
xhr7.open("GET", "http://localhost:5137/api/User/GetArray?a=5&b=56");
xhr7.send();
xhr7.responseType = "json";
xhr7.onload = () => {
  if (xhr7.readyState == 4 && xhr7.status == 200) {
    const data = xhr7.response;
    console.log("GetArray response data: ",data);

    document.querySelector("#get-array").innerHTML = data;
  } else {
    console.log(`Error: ${xhr7.status}`);
  }
};

const xhr8 = new XMLHttpRequest();
xhr8.open("GET", "http://localhost:5137/api/User/GetNumberList");
xhr8.send();
xhr8.responseType = "json";
xhr8.onload = () => {
  if (xhr8.readyState == 4 && xhr8.status == 200) {
    const data = xhr8.response;
    console.log("GetArray response data: ",data);

    document.querySelector("#get-numberlist").innerHTML = data;
  } else {
    console.log(`Error: ${xhr8.status}`);
  }
};

const xhr9 = new XMLHttpRequest();
xhr9.open("GET", "http://localhost:5137/api/User/GetAuthors");
xhr9.send();
xhr9.responseType = "json";
xhr9.onload = () => {
  if (xhr9.readyState == 4 && xhr9.status == 200) {
    const data = xhr9.response;
    console.log("GetArray response data: ",data);

    document.querySelector("#get-authors").innerHTML = data;
  } else {
    console.log(`Error: ${xhr9.status}`);
  }
};