window.onload = getData();

async function getData(){
  let data = await fetch('http://localhost:3000/api/challenges');
  let json = await data.json();

  let HTMLstring = "";
  
  json.forEach((obj) => {
    HTMLstring += `<div class="block2">
    <div class="card text-center" style="width: 18rem;">
        <div class="card-header">
            Session
        </div>
        <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="card-text">points: ${obj.points} course: ${obj.course}</p>
            <a href="#" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-danger">Delete</a>
        </div>

    </div>
</div>`
  })

  document.getElementById("content").innerHTML = HTMLstring;
}


