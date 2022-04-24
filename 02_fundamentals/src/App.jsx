import First from "./components/basics/First";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import Card from "./components/layout/Card";
import RandomNumber from "./components/basics/Random";

import "./App.css";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsList from "./components/repetition/StudentsList";
import ProductsTable from "./components/repetition/ProductsTable";
import LotteryBetGenerator from "./components/lottery/LotteryBetGenerator";

const App = () => {
  return (
    <div className="app">
      <h1>React JS Fundamentals</h1>

      <div className="cards">
        <Card title="#08 Lottery Bet Challange" color="#355f99">
          <LotteryBetGenerator startNumber = {1} endNumber={60} numbersPerTicket={6} />
        </Card>
        <Card title="#07 Products table challange" color="#645f11">
          <ProductsTable />
        </Card>
        <Card title="#06 Students list" color="#335f11">
          <StudentsList />
        </Card>
        <Card title="#05 Family Member" color="#645fED">
          <Family lastname="Huss">
            <FamilyMember name="Pedro" />
            <FamilyMember name="Eduardo" />
            <FamilyMember name="Marcelo" />
          </Family>
        </Card>

        <Card title="#04 Random Number Challange" color="#6495ED">
          <RandomNumber min={5} max={199} />
        </Card>

        <Card title="#03 Fragment" color="#884EA0">
          <Fragment />
        </Card>

        <Card title="#02 Fragment" color="#EB984E">
          <WithParameter title="Third component" subtitle="Uhulll!" />
          <WithParameter title="Second component" subtitle="Very nice!" />
        </Card>

        <Card title="#01 First component" color="#7DCEA0">
          <First />
        </Card>
      </div>
    </div>
  );
};

export default App;
