import React from "react";
import { Fade } from "react-slideshow-image";

import style from "./About.module.css";
import "react-slideshow-image/dist/styles.css";

const About = () => {
  const fadeImages = [
    "https://www.nationsonline.org/gallery/Kenya/Amboseli-National-Park-Kilimanjaro.jpg",
    "https://www.traveldailymedia.com/assets/2021/06/shutterstock_654844426.jpg",
    "https://www.kilroy.net/media/11354/tanzania-savannah-zebras-airballoons-cover.jpg?mode=crop&quality=70",
  ];
  return (
    <div className={style.about}>
      <h1 className={style.title}>About us</h1>
      <div className={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores magni
        veritatis exercitationem? Veniam, perferendis? Atque, alias. Maiores
        corrupti eligendi nisi perferendis culpa iure harum dolor ea enim eum,
        maxime ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quaerat ex inventore ipsum, incidunt libero ducimus, repellat, iure
        necessitatibus voluptates sed neque delectus possimus facilis fugit
        consectetur voluptas. Suscipit, facilis commodi? Pariatur fuga provident
        culpa voluptates expedita sint magnam adipisci deleniti recusandae
        praesentium, omnis similique esse, quas libero molestiae accusamus
        dolore qui fugiat? Saepe dicta quo dignissimos tempora porro architecto
        cupiditate. Repudiandae id dicta officia, in fuga dolores doloribus
        obcaecati reiciendis asperiores optio unde, voluptatum architecto atque
        deleniti eligendi delectus aliquam sit velit nesciunt ad doloremque?
        Dolore omnis debitis atque ea.
      </div>
      <div>
        <Fade className={style.fade}>
          <div className={style.eachFade}>
            <div>
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className={style.eachFade}>
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className={style.eachFade}>
            <div>
              <img src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
