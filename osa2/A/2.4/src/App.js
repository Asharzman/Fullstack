const App = () => {
  const courses = [
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
    
  ]


  const CourseContents = () => {
    return (
      <div>
        {courses.map((data => (
          <div key={data.id}>
            <h1>{data.name}</h1>
            {data.parts.map((pparts => {
              return (
                <div key={pparts.id}>
                  <p>{pparts.name} {pparts.exercises}</p>
                </div>
              )}))}
              <Total id={data.id} parts={data.parts}/>
          </div>
        )))}
      </div>
      )
    }

function Total(props) {
  var asd = 0 /* Sets the function back to 0 after one use */
  props.parts.reduce( (previous, current, index) => {
    console.log('what is happening', previous, current)
    console.log('Current value: ', current.exercises)
    asd += current.exercises}, 0)
    console.log('Reductor outputs: ', asd)
     return (
       <div key={props.id}>
         <p>Total of {asd} exercises</p>
       </div>
     )
}

  return (
    <div>
      <CourseContents courses={courses} />
    </div>
  )
}
export default App