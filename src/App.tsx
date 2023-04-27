import Sidebar from './components/sidebar/sidebar';
import Content from './components/contents/contents';

const App: React.FC = () => {
  return (
    <div className='h-screen p-2'>
      <div className="h-full w-full bg-slate-400 flex rounded-xl p-2 space-x-2">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default App;
