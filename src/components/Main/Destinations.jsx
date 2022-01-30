import React from "react";
import style from "./Destinations.module.css";

const Destinations = () => {
  return (
    <div className={style.destinations}>
      <h1 className={style.title}>Destinations</h1>
      <ul className={style.cards}>
        <li className={`${style.card} ${style.kenya}`}>
          <div className={style.content}>
            <div>
              <h2>Kenya</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae explicabo aliquam facilis quaerat mollitia doloribus
                nisi natus error! Maxime, voluptatibus dolorum eos eligendi hic
                veniam vitae enim qui debitis assumenda. Amet sapiente aliquid
                quo perferendis tempora quisquam harum, explicabo dignissimos
                eos consequatur iure voluptatum illo rem, veniam impedit
                expedita. Veritatis ullam non numquam deserunt minus facere,
                perspiciatis ipsam illo repellendus. Praesentium saepe
                consectetur consequatur alias magnam, a adipisci beatae pariatur
                et voluptas doloribus, placeat eius, sapiente vel iste optio eum
                reiciendis ratione impedit odit minus enim voluptatibus.
                Deleniti, voluptatibus placeat. Officiis quae, magnam explicabo
                sint fuga sunt, facere quis possimus quam illo porro culpa saepe
                nihil, mollitia beatae sequi iure eum eligendi maxime? Voluptate
                quos dolores, ut ipsam a repellat!
              </div>
            </div>
            <figure>
              <img
                src="https://www.nationsonline.org/gallery/Kenya/Amboseli-National-Park-Kilimanjaro.jpg"
                alt="kenya"
              />
            </figure>
          </div>
        </li>
        <li className={`${style.card} ${style.egypt}`}>
          <div className={style.content}>
            <div>
              <h2>Egypt</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae explicabo aliquam facilis quaerat mollitia doloribus
                nisi natus error! Maxime, voluptatibus dolorum eos eligendi hic
                veniam vitae enim qui debitis assumenda. Amet sapiente aliquid
                quo perferendis tempora quisquam harum, explicabo dignissimos
                eos consequatur iure voluptatum illo rem, veniam impedit
                expedita. Veritatis ullam non numquam deserunt minus facere,
                perspiciatis ipsam illo repellendus. Praesentium saepe
                consectetur consequatur alias magnam, a adipisci beatae pariatur
                et voluptas doloribus, placeat eius, sapiente vel iste optio eum
                reiciendis ratione impedit odit minus enim voluptatibus.
                Deleniti, voluptatibus placeat. Officiis quae, magnam explicabo
                sint fuga sunt, facere quis possimus quam illo porro culpa saepe
                nihil, mollitia beatae sequi iure eum eligendi maxime? Voluptate
                quos dolores, ut ipsam a repellat!
              </div>
            </div>
            <figure>
              <img
                src="https://www.traveldailymedia.com/assets/2021/06/shutterstock_654844426.jpg"
                alt="kenya"
              />
            </figure>
          </div>
        </li>
        <li className={`${style.card} ${style.tanzania}`}>
          <div className={style.content}>
            <div>
              <h2>Tanzania</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae explicabo aliquam facilis quaerat mollitia doloribus
                nisi natus error! Maxime, voluptatibus dolorum eos eligendi hic
                veniam vitae enim qui debitis assumenda. Amet sapiente aliquid
                quo perferendis tempora quisquam harum, explicabo dignissimos
                eos consequatur iure voluptatum illo rem, veniam impedit
                expedita. Veritatis ullam non numquam deserunt minus facere,
                perspiciatis ipsam illo repellendus. Praesentium saepe
                consectetur consequatur alias magnam, a adipisci beatae pariatur
                et voluptas doloribus, placeat eius, sapiente vel iste optio eum
                reiciendis ratione impedit odit minus enim voluptatibus.
                Deleniti, voluptatibus placeat. Officiis quae, magnam explicabo
                sint fuga sunt, facere quis possimus quam illo porro culpa saepe
                nihil, mollitia beatae sequi iure eum eligendi maxime? Voluptate
                quos dolores, ut ipsam a repellat!
              </div>
            </div>
            <figure>
              <img
                src="https://www.kilroy.net/media/11354/tanzania-savannah-zebras-airballoons-cover.jpg?mode=crop&quality=70"
                alt="kenya"
              />
            </figure>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Destinations;
