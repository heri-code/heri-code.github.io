const KEY = "16d85bf702974259b17e4dff4faeade4";
const URL = "https://api.football-data.org/v2/";

const ID_LIGA = 2002;

const ENDPOINT = `${URL}competitions/${ID_LIGA}/standings`;
const ENDPOINT2 =` https://api.football-data.org/v2/teams/`;

const fetchAPI = url => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': KEY
        }
    })
        .then(res => {
            if (res.status !== 200) {
                console.log("Error: " + res.status);
                return Promise.reject(new Error(res.statusText))
            } else {
                return Promise.resolve(res)
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};

function getBundesliga() {
    if ("caches" in window) {
        caches.match(ENDPOINT).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    tampilkanData(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT)
        .then(data => {
            tampilkanData(data);
        })
        .catch(error => {
            console.log(error)
        })
}

function tampilkanData(data) {
    let dataklasmen = "";
    let daftarKlasmen =  document.getElementById("klasmen");

    data.standings[0].table.forEach(function (datas) {
        dataklasmen += `
                <tr>
                    <td>${datas.position}</td>
                    <td><img src="${datas.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                    <td>${datas.team.name}</td>
                    <td>${datas.won}</td>
                    <td>${datas.draw}</td>
                    <td>${datas.lost}</td>
                    <td>${datas.goalsFor}</td>
                    <td>${datas.goalsAgainst}</td>
                    <td>${datas.goalDifference}</td>
                    <td>${datas.points}</td>
                    <td><a class="btn purple" href="./detail.html?id=${datas.team.id}">Detail Team</a></td>
                </tr>
        `;
    });

     daftarKlasmen.innerHTML = `
                <div style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">

                <table class="striped responsive-table">
                    <thead>
                        <tr>
                            <th>R</th>
                            <th></th>
                            <th>Team Name</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                            <th>Detail</th>
                        </tr>
                     </thead>
                    <tbody >
                        ${dataklasmen}
                    </tbody>
                </table>

                </div>
                
    `;
}


function infoTeams() {
    return new Promise(function(resolve, reject){

    
    var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");

    if ("caches" in window) {
        caches.match(ENDPOINT2 + idParam).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    tampilkanData2(data);
                    resolve(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT2 + idParam)
        .then(data => {
            tampilkanData2(data);
            console.log(data)
            resolve(data);
        })
        .catch(error => {
            console.log(error)
        })
    });
}


function tampilkanData2(data) {
    let datainfo = "";
   
        datainfo += `
        
  <div class="row container">
  <div class="col s12  container">
    <div class="card">
      <div class="card-image" >
        <img src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge" style="height : 150px;"/>
      </div><hr>
      <div class="card-content">
        <p>${data.id}</p>
        <p>${data.name}</p>
        <p>${data.address}</p>
        <p>${data.phone}</p>
        <p>${data.website}</p>
      </div>
    </div>
  </div>
</div>
          
`;
    
document.getElementById("info").innerHTML = datainfo;
     
}

function getSaved() {
    getAll().then(function(data){
        console.log(data);
        // susun halaman detail tim
        let datainfo = "";
        data.forEach(function(data){
            datainfo += `
            <div class="row container">
  <div class="col s12  container">
    <div class="card">
      <div class="card-image" >
        <img src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge" style="height : 150px;"/>
      </div><hr>
      <div class="card-content">
        <p>${data.id}</p>
        <p>${data.name}</p>
        <p>${data.address}</p>
        <p>${data.phone}</p>
        <p>${data.website}</p>
      </div>
      <div class="card-action">
      <button class="btn purple" id="remove" onclick="deleteData(${data.id}); M.toast({html: 'Data Team Dihapus'});">Hapus Team </button>
      </div>
    </div>
  </div>
</div>            
            `
        })
        document.getElementById("saved").innerHTML=datainfo;
        
        
    })
}