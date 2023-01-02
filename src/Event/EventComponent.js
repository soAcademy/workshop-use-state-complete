import React from "react"

const handleClick = (e) => alert("Hello Event")

const EventComponent = () => {
  return (
    <div>
      <h1>Click me to alert!</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

// Other way is to create as a component
// class EventComponent extends React.Component {
//   handleClick = (e) => {
//     alert("Hello Event");
//   };

//   render() {
//     return (
//       <div>
//         <h1>Click me to alert!</h1>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     );
//   }
// }

export default EventComponent
