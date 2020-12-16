import React from 'react';

const ThingILike = () => {

const thingsILike = ['coding', 'reading', 'sleeping', 'eating', 'playing video games with friends', 'solving problems' ];

const listItems = thingsILike.map(thing =>
  <li>{thing}</li>
  );
  return (
    <ul>
{listItems}
</ul>
  )
}
export default ThingILike;