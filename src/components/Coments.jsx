import React from 'react';

class Coments extends React.Component {
  render() {
    const objs = localStorage.getItem('comentario');
    return (
      <div>
        {console.log(objs)}
      </div>
    );
  }
}

export default Coments;
