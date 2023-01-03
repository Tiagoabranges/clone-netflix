import Row from './components/Row';
import categories from './api';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      {/* destaques */}
      {/* em alta */}
      {categories.map((category) => (
        <Row
          key={ category.name }
          title={ category.title }
          path={ category.path }
        />
      ))}
    </div>
  );
}

export default App;
