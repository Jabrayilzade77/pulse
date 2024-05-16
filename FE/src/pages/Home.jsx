import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainProvider";
import { WishListContext } from "../context/WishListProvider";
import styles from "./Home.module.scss";

function Home() {
  const [products, setProducts] = useState([]);

  const { addBasket } = useContext(MainContext);
  const { wishList, addwishList, isExits } = useContext(WishListContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp/");
    const data = await res.json();

    setProducts(data);
  }

  return (
    <>
      <main>
        <section className={styles.header_container}>
          <div>
            <h1>
              Hygienic Food <span style={{ color: "rgb(255, 179, 0)" }}>.</span>
            </h1>
            <span className={styles.span_header}>By Chef Francis Smith</span>
          </div>
        </section>

        <section className={styles.welcome_header}>
          <div className={styles.header_cards}>
            <div>
              <div className={styles.icon}>
                <i class="fa-brands fa-stack-overflow"></i>
              </div>
              <div className={styles.welcome_and_lines}>
                <div className={styles.middle_line} />
                <h2>Welcome</h2>
                <div className={styles.middle_line} />
              </div>
            </div>
            <div className={styles.cards_container}>
              <div className={styles.cards}>
                <h3>2002</h3>
                <div>
                  <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                    Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                    volutpat.
                  </p>
                </div>
              </div>
              <div className={styles.cards}>
                <h3>2010</h3>
                <div>
                  <p>
                    Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
                    lobortis leo volutpat. Maecenas sollicitudin est in libero
                    pretium.
                  </p>
                </div>
              </div>
              <div className={styles.cards}>
                <h3>2018</h3>
                <div>
                  <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                    Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                    volutpat.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp"
              className={styles.sign}
              alt=""
            />
          </div>
        </section>

        <section className={styles.testimonials_section}>
          <div className={styles.testimonials_container}>
            <div>
              <div className={styles.icecream}>
                <i class="fa-solid fa-ice-cream"></i>
              </div>

              <div className={styles.welcome_and_lines}>
                <div className={styles.middle_line} />
                <h2 className={styles.middle_testimonials_section}>
                  Testimonials
                </h2>
                <div className={styles.middle_line} />
              </div>
            </div>

            <div>
              <div className={styles.dirnaq}>"</div>
              <p className={styles.description}>
                Integer sed facilisis eros. In iaculis rhoncus velit in
                malesuada. In hac habitasse platea dictumst. Fusce erat ex,
                consectetur sit amet ornare suscipit, porta et erat. Donec nec
                nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat
                malesuada. Fusce ultricies ante tortor, non vestibulum est
                feu-giat ut.{" "}
              </p>
              <div className={styles.dirnaq}>"</div>

              <div className={styles.ted_client}>
                <div>Ted Chapman </div>
                <p>, Client</p>
              </div>
              
            </div>
            <div></div>
          </div>
        </section>


        <section className={styles.welcome_header}>
          <div className={styles.header_cards}>
            <div>
              <div className={styles.icon}>
              <i class="fa-solid fa-burger"></i>
              </div>
              <div className={styles.welcome_and_lines}>
                <div className={styles.middle_line} />
                <h2>Our Services</h2>
                <div className={styles.middle_line} />
              </div>
            </div>
            <div className={styles.cards_container}>
              <div className={styles.cards}>
                <h3>Breakfast</h3>
                <div>
                  <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                    Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                    volutpat.
                  </p>
                </div>
              </div>
              <div className={styles.cards}>
                <h3>Brunch</h3>
                <div>
                  <p>
                    Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
                    lobortis leo volutpat. Maecenas sollicitudin est in libero
                    pretium.
                  </p>
                </div>
              </div>
              <div className={styles.cards}>
                <h3>Lunch</h3>
                <div>
                  <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                    Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                    volutpat.
                  </p>
                </div>
              </div>
              <div className={styles.cards}>
                <h3>Dinner</h3>
                <div>
                  <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                    Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                    volutpat.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </section>
      </main>

      {products.map((x) => (
        <div key={x._id}>
          <div onClick={() => addwishList(x)}>
            {" "}
            {isExits(x) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          <div>{x.name}</div>

          <div>
            {" "}
            with wild mushrooms and asparagus -----------------------------{" "}
            {x.price} $
          </div>
          <button>
            <Link to={"/detail/" + x._id}>go detail</Link>
          </button>
          <br />
          <button onClick={() => addBasket(x)}>add basket</button>
          <br />
        </div>
      ))}
    </>
  );
}

export default Home;
