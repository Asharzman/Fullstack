const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }
  console.log(course)

  const Header = (props) => {
    return (
      <div>
          <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        {course.parts.map(item => (
          <div key={item.name}>
            <p>{item.name}: {item.exercises}</p>
          </div>
    ))}
      </div>
    )
  }

  let ExerciseSum = 0
  if(course.parts.length >0) {
    for (let i = 0; i < course.parts.length; i++) {
      ExerciseSum += course.parts[i].exercises;
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
      <Content course={course} />
      <Total course={course} />
    </div>
    )
}
export default App
