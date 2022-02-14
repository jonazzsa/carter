import label from "../constants/labels";
import Welcome from "./../components/molecules/Welcome";

const Home: React.FC = () => {
  document.title = label.PAGE_TITLE_HOME;
  return (
    <div>
      <Welcome></Welcome>
    </div>
  );
};

export default Home;
