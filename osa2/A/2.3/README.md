# 2.3*: kurssitiedot step8

Jos et jo niin tehnyt, laske koodissasi tehtävien määrä taulukon metodilla reduce.

```jsx
// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )

reduce((previousValue, currentValue) => { /* ... */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })

reduce(function(previousValue, currentValue) { /* ... */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```