
// A small additional note to the previous one. React allows arrays to be rendered
// if the array contains values that are eligible for rendering (suchas as numbers and
// strings). So the following program would work, although the result might not be what we
// want.

const App = () => {

  const friends = [' Peter', ' Maya'];

  return (

    <div>
      <p>{friends}</p>
    </div>

  );

};

export default App;
