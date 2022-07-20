var asd = 0

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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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

  const Total = (props) => {
    var initialValue = 0 /* I don't know why I have to specify it, and I am afraid to know */
    const reducc = props.parts.reduce( (previous, current) => {
      console.log('what is happening', previous, current)
      console.log('Current value: ', current.exercises)
      asd += current.exercises
    }, initialValue)
      console.log('Reductor outputs: ', asd)
    return (
        <div>
          <p>Total {asd}</p>
        </div>
      )
   }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App