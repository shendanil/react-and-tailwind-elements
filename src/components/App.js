import Header from './Header';
import Element from './Element';
import ElementData from './data';

function App() {

  const country = ElementData.map(item => {
    return <Element
      key={item.id}
      {...item}
    />
  })

  return (
    <div className='m-0 p-0 w-full overflow-hidden'>
      <Header />
      <div className='mb-14'></div>
      {country}
    </div>
  );
}

export default App;
