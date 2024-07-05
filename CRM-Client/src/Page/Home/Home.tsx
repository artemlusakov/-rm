import Navigate from "../../Components/Navigation/Navigait";
import DataTable from "../../Components/DataTabl/DataTabl";
import s from "./Home.module.css"

const Home = () => {
    return (
        <div>
            <Navigate/>

            <div className={s.HomeMainContent}>
                <section className={s.HomeMainContentSection1}>
                    <div className={s.Workers}>
                        <h1>Сотрудники в штате</h1>
                    <DataTable/>
                    </div>
                </section>

                <section className={s.HomeMainContentSection2}>

                </section>
            </div>

        </div>
    );
};

export default Home;