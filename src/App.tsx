interface CardProps {
  title: string;
  description: string;
}

// eslint-disable-next-line react/function-component-definition
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </main>
    </div>
  );
}

export default App;
