import { useState } from 'react';

const ColorCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      const func = new Function('return ' + input);
      setResult(func());
    } catch (error) {
      setResult('エラー');
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="式を入力"
      />
      <button onClick={calculateResult}>計算</button>
      {result !== null && <div>結果: {result}</div>}
    </div>
  );
};

export default ColorCalculator;
