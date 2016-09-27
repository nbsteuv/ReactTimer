var React = require('react');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <Nav />
//         {this.props.children}
//       </div>
//
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
   );
}

module.exports = Main;
