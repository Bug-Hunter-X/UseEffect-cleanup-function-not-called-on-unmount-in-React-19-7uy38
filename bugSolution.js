```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    console.log('Count:', count);
    return () => {
      isMounted.current = false;
      console.log('Unmounting...');
    };
  }, [count]);

  const handleClick = () => {
    if (isMounted.current) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```