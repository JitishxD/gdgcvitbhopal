import { useEffect } from "react";
import { GlobalNavbar } from "@/Advitya26Components/Navbar";
import ParallaxBackground from "@/Advitya26Components/ParallaxBackground";

import "@/Advitya26Components/AdvityaMain.css";

function Advitya() {
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("advitya-page");

        return () => {
            root.classList.remove("advitya-page");
        };
    }, []);

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-[10vh] z-100">
                <GlobalNavbar />
            </div>
            <ParallaxBackground />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
                culpa? Voluptatem optio quae vel quas temporibus quam libero
                consequatur in! Ullam illo voluptas perspiciatis adipisci,
                dolores recusandae sed, consequatur maxime dolorum odit debitis.
                Temporibus non ipsum aspernatur iste quam accusantium a
                repellendus, sit expedita libero odit cum ducimus.
                Exercitationem nisi, ullam ad doloribus ratione quaerat mollitia
                reprehenderit accusamus aut, architecto repellat accusantium, ab
                esse fuga quo rem numquam alias itaque laudantium debitis
                assumenda placeat praesentium eveniet. Dicta dolorem harum quas
                recusandae sit cupiditate repellat quae earum dolorum ullam,
                fugit similique velit illo soluta eligendi eos deleniti quam
                possimus voluptatem nostrum at laborum libero, sequi maiores!
                Qui quos doloremque voluptatum error perspiciatis? Fugit,
                eligendi. Unde, soluta corporis. Consequuntur architecto
                doloremque dolore nobis? Minima id impedit, quae, dicta,
                accusantium aperiam voluptas iure distinctio ea maiores
                temporibus eligendi aspernatur ut consequuntur iusto quo at
                sequi reprehenderit. Modi hic error porro blanditiis, quidem
                officia odio libero quas quis similique ad mollitia enim, sed
                voluptate. Velit voluptates mollitia explicabo, voluptas hic
                iusto, ducimus iste maxime ipsam fugit eligendi laboriosam
                provident cum aliquid a illo, itaque quibusdam debitis vel
                voluptate est natus sunt sit magnam. Ex, minima ad atque maiores
                ut recusandae fuga amet vel sed, sint rerum ea! Dolorem
                repudiandae aliquid, eligendi, totam nulla rerum error nisi
                deleniti expedita corporis recusandae tempore. Animi odio vel
                aliquid voluptatibus! Facilis inventore accusamus necessitatibus
                temporibus odit, optio quia repellendus sint cum quam adipisci
                aperiam enim harum? Quibusdam repudiandae unde quae dolorum
                consequatur deleniti voluptas, minima amet inventore rem? Quos
                reiciendis, nostrum labore quae corporis provident facilis harum
                ducimus quis ut nobis alias assumenda veritatis sint velit.
                Rerum, et, voluptate, consequuntur odit quo voluptates animi sed
                minima tenetur velit enim blanditiis perspiciatis unde debitis
                in optio inventore quas? Perferendis itaque consequuntur eum
                aperiam, harum at doloremque iusto ipsam quisquam quos quis
                deleniti incidunt fuga id deserunt accusamus eligendi cumque
                distinctio odit nisi voluptatem nam molestias? Animi, esse.
                Reiciendis illo vel veritatis minima aspernatur libero nam
                facere delectus? Enim ipsum delectus eligendi itaque neque
                laboriosam accusamus sapiente alias ab cumque soluta aliquid
                facere, quam tenetur, illum voluptas libero doloribus,
                recusandae natus pariatur aspernatur eius exercitationem
                praesentium. Autem aut, voluptas voluptatem ipsa amet tempore
                vero quibusdam nam reiciendis officiis aliquam! Laborum pariatur
                quis mollitia nisi sit non officiis quibusdam eligendi atque
                quo! Cum reprehenderit, tempore nesciunt aliquam, sed nulla
                velit voluptatibus eius iusto libero magni. Quaerat facere
                fugiat commodi delectus quibusdam nemo esse nesciunt ipsam
                corporis, dolorem asperiores ex? Itaque aperiam ullam iusto
                doloremque, ad provident ea? Eligendi magni corrupti corporis
                earum neque repudiandae, libero sunt in illo. Incidunt saepe rem
                ad animi iure architecto quae, ea nemo a earum nostrum. Quasi
                quaerat aperiam dolorem veritatis accusamus pariatur iste
                obcaecati repellat reprehenderit illo reiciendis veniam quos
                ducimus aspernatur voluptas quisquam ipsam, ut et unde! Dicta
                incidunt, sunt totam error dolor corporis maxime voluptates
                quod, perspiciatis sequi modi dolorem veniam libero et ipsam
                eveniet veritatis itaque fugit autem deleniti! Quis, omnis
                nihil. Nam laboriosam sapiente dignissimos officia doloremque
                quisquam animi odio saepe aspernatur suscipit, eos harum. Fuga
                dolores quas dolore quos assumenda ad dicta perferendis beatae
                minima veniam
            </p>
        </>
    );
}

export default Advitya;
