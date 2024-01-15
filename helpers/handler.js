function HandleNext(page) {
  let slides = document.querySelectorAll("#slide");
  slides.forEach((slide) => {
    slide.style = "display:none";
  });
  slides[Number(page) - 1].style = "display:block";

  return false;
}

const globalUrl = "https://backend-learn-kmt8.onrender.com";

async function HandleSubmit(e) {
  try {
    e.preventDefault();
    let inputs = document.querySelectorAll(
      'input[type="text"],input[type="date"],input[type="tel"],input[type="email"],textarea'
    );
    // console.log(inputs, "from inputs check")

    let details = {};
    console.log("loading");

    Array.from(inputs).map((item) => {
      // console.log(item.name);
      details = { ...details, [item?.name]: item.value };
    });

    console.log(details, "sesoohh");

    const response = await axios.post(
      "https://backend-learn-kmt8.onrender.com/user/register",
      details
    );

    console.log(response, "from response");
    // const returnedMessage = await response.json();

    console.log("completed");
    alert("registration completed");
    // console.log("returned message", returnedMessage);
    return;
  } catch (err) {
    console.log(err, err.message, err.response);
    if (err.response.data.msg === "user already exit") {
      alert("user email already registered");
    } else {
      alert("an error occured please tyr again");
    }
  }
}

// function HandleSubmit(e){
//   console.log(e,"clicked");
//   e.preventDefault();
// }

let sea = document.getElementById("seas");

sea.addEventListener("click", HandleSubmit);

HandleNext(1);
// HandleNext(5)

const getPatients = async () => {
  try {
    const patients = await axios.get(`${globalUrl}/user/`);
    // console.log(patients, "from patient list")
    const returnedPatients = await patients.data.msg;
    console.log(returnedPatients, "from patient list");
  } catch (err) {
    console.log(err);
  }
};

getPatients();
