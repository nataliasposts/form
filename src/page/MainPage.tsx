import FormComponent from '../components/FormComponent/FormComponent';
import './MainPage.scss';

const MainPage: React.FC = () => {
  return (
    <main>
      <div className="container main-container">
        <FormComponent />
      </div>
    </main>
  );
};

export default MainPage;
