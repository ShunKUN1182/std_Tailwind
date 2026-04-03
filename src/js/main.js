import "../css/style.css";

const stationBtn = document.querySelector("#stationBtn");
const stationWrap = document.querySelector("#stationWrap");
// const stationName = document.querySelector("#stationName");
// const stationTrainLine = document.querySelector("#trainLine");
// const trainImg = document.querySelector("#trainImg");

const osakaStations = [
    {
        name: "北花田",
        trainLine: ["御堂筋線"],
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "あびこ",
        trainLine: ["御堂筋線"],
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "長居",
        trainLine: ["御堂筋線"],
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "西田辺",
        trainLine: ["御堂筋線"],
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "昭和町",
        trainLine: ["御堂筋線"],
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "天王寺",
        trainLine: ["御堂筋線", "谷町線"],
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Tanimati_logo.svg"],
    },
];

stationBtn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * osakaStations.length);
    console.log(randomNum);
    let inputHTML = "";
    inputHTML += `
      <div class="flex gap-[12px]">
    `;
    osakaStations[randomNum].img.forEach((e) => {
        inputHTML += `
          <img
            id="trainImg"
            src="${e}"
            alt=""
            class="w-[48px] h-[48px] object-cover my-[12px] animate-fadeUp"
          />    
        `;
    });
    inputHTML += `
      </div>
    `;
    inputHTML += `
      <div class="flex flex-col gap-[4px] justify-center items-center">
          <h2 id="stationName" class="text-3xl font-bold md:text-4xl animate-fadeUp">${osakaStations[randomNum].name}</h2>
          <p id="trainLine" class="text-sm text-gray-500 animate-fadeUp">
      `;
    osakaStations[randomNum].trainLine.forEach((e) => {
        inputHTML += `
          ${e}
      `;
    });

    inputHTML += `
    </p>
        </div>
    `;
    stationWrap.innerHTML = inputHTML;
});
