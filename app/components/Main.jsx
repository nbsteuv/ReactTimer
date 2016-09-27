var React = require('react');

var Nav = require('Nav');

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
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
   );
}

module.exports = Main;
