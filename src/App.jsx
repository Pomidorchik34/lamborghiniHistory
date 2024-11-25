import "./App.css";

function App() {
  return (
    <div className="px-[60px]">
      <section></section>
      <section>
        <div className="flex flex-col gap-[60px]">
          <h1>Начало</h1>
          <div className="flex card">
            <h2 className="text-[30px]">
              В начале 1960-х годов Ферруччо Ламборгини был владельцем
              нескольких компаний и мог себе позволить приобретать дорогие
              автомобили. В разное время у него были Mercedes 300SL, несколько
              Maserati 3500 GT, Jaguar E-type. Он также владел Ferrari 250 GT
              разных версий. Но в каждом автомобиле он находил некоторые
              недочёты
            </h2>
            <img
              width={600}
              src="https://www.carscoops.com/wp-content/uploads/2021/05/Mercedes-S-Klub-Speedster-3-e1622169318640.jpg"
              alt=""
            />
          </div>
          <h1>Ferrari 250GT и партнерства</h1>
          <div className="flex card">
            <img
              width={600}
              src="https://cdn.motor1.com/images/mgl/0oRbm/s1/rml-short-wheelbase-il-ritorno-della-ferrari-250-gt-swb.jpg"
              alt=""
            />

            <h2 className="text-[30px]">
              В скоре Ферруччо Ламборгини пошел к Самому Энцо Феррари в целе
              партнерства в производств новых машин. Ферруччо Ламборгини
              жалаволся на тармоза Ferrari 250gt, Энцо Феррари это
              проигнорировал и отказался Патнерстве с Ферруччо Ламборгини
            </h2>
          </div>
          <h1>Lamborghini 350GT</h1>
          <div className="flex card">
            <h2 className="text-[30px]">
              В целе быть конкурентом Феррари. 1964-год Феррруччо Ламборгини
              создает свою первую машину Ламборгини 350GT, Мотор имел 12
              целиндров в V, А обьем поршеней составлял 3,5 литра. Ламборгини
              350GT был хорош мотор в стоковом состоянии давал 280 л.с
            </h2>
            <img
              width={600}
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/03_18_geneva/cover_d.jpg"
              alt=""
            />
          </div>
          <h1>Lamborghini miura</h1>
          <div className="flex card">
            <img width={600} src="https://i.imgur.com/rcWXB7F.jpg" alt="" />
            <h2 className="text-[30px]">
              Сразу же после выпуска Ламборгини 350GT Феррручо Ламборгини и его
              команда создают Ламборгини миура в 1966году. Сама машина была
              названа в качестве имени быка. Мотор имел также как Ламбогини
              350GT 12 поршеней в образе V.ОбЪем поршней состовлял 4 литра.Мотор
              давал в стоковом состоянии 350 л.c
            </h2>
          </div>
          <h1>Самые лучшые машины</h1>
          <div className="card">
            <h2 className="text-[30px]">
              Cчитается самые лучшые машины Ламборгини были Lamborghini Sesto
              Elemento, Lamborghini Huracan и Lamborghini Murcielago
            </h2>
            <img
              width={600}
              src="https://i.ytimg.com/vi/VEFZDeBKizo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAaxjvWTvBGOO1wGyNPIcQrZTiEMg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default App;
