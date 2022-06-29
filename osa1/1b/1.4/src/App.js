const App = () => {
  const course = 'Half Stack application development '
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
  ];
  console.log(parts)

  const Header = (props) => {
    return (
      <div>
          <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        {parts.map(item => (
          <div key={item.name}>
            <p>{item.name}: {item.exercises}</p>
          </div>
    ))}
      </div>
    )
  }

  let ExerciseSum = 0
  if(parts.length >0) {
    for (let i = 0; i < parts.length; i++) {
      ExerciseSum += parts[i].exercises;
    }
}

  const Total = () => {
    return (
      <div>
        <p>Number of exercises: {ExerciseSum}</p>
      </div>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      
    </div>
    )
}
export default App
