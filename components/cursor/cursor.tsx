
import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

interface CursorProps {
  color: string;
}

const Cursor: React.FC<CursorProps> = ({ color  }) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{ background: color }}
      outerStyle={{ border: `1px solid ${color}` }}
      clickables={['a', 'button', 'input','select','textarea','.link']}
    />

  );
};

export default Cursor;
