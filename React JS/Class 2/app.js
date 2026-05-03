const element1 = React.createElement(
  'h1',
  { 
    className:'ele1',
    style: { fontFamily: 'monospace' }
  },
  '21 Savage'
  
);

console.log(element1);
const element2 = React.createElement(
  'h2',
  { className: 'ele2' },
  { style: { fontFamily: 'monospace' } },
  'Go a check my latest album!'
);

// const root = document.getElementById('root');

// ReactDOM.render(element1, root);
// ReactDOM.render(element2, root);

//correct way to render this..
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element1);
root.render(element2);