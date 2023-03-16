function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MXzVmNKdx5":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyTJsy1w_rAbTphHGcd--KnPxocZC2NNuFTCuFieRqvQspfivT69N6u4U999DNM1lHl/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

