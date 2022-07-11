const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

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
            <p>{item.name} {item.exercises}</p>
          </div>
    ))}
      </div>
    ) 
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
    </div>
  )
}
export default App