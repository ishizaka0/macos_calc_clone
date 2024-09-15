import { useState } from 'react';
import Button from '../components/Button';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const formatNumberWithCommas = (num: string) => {
    return parseFloat(num).toLocaleString();
  };

  const handleNumberClick = (num: string) => {
    console.log('Number Clicked:', num);
    let newValue = currentValue === '' ? num : currentValue + num;

    if (operator && currentValue === '') {
      newValue = num;
    }

    setDisplay(formatNumberWithCommas(newValue));
    setCurrentValue(newValue);
    console.log('Current Value:', newValue);
    console.log('Display:', display);
  };

  const handleOperatorClick = (op: string) => {
    console.log('Operator Clicked:', op);
    if (currentValue) {
      if (previousValue && operator) {
        handleEqualClick();
      }
      setOperator(op);
      setPreviousValue(currentValue);
      setCurrentValue('');
    }
    console.log('Previous Value:', currentValue);
    console.log('Operator:', op);
  };

  const handleEqualClick = () => {
    console.log('Equal Clicked');
    if (!previousValue || !currentValue) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      default:
        return;
    }

    const resultString = `${formatNumberWithCommas(prev.toString())} ${operator} ${formatNumberWithCommas(current.toString())} = ${formatNumberWithCommas(result.toString())}`;
    setHistory([resultString, ...history]);

    setDisplay(formatNumberWithCommas(result.toString()));
    setCurrentValue(result.toString());
    setPreviousValue('');
    setOperator('');
    console.log('Result:', result);
    console.log('Display Result:', formatNumberWithCommas(result.toString()));
    console.log('History:', history);
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
    console.log('Cleared');
  };

  const handleClearHistory = () => {
    setHistory([]);
    console.log('History Cleared');
  };

  const handleToggleSign = () => {
    const value = parseFloat(display) * -1;
    setDisplay(value.toString());
    setCurrentValue(value.toString());
    console.log('Sign Toggled');
    console.log('Display:', display);
  };

  const handlePercent = () => {
    const value = parseFloat(display) / 100;
    setDisplay(value.toString());
    setCurrentValue(value.toString());
    console.log('Percent Clicked');
    console.log('Display:', display);
  };

  const buttonClass = 'w-full h-16 text-xl font-semibold rounded-none';
  const operatorClass = 'bg-orange-500 hover:bg-orange-600 text-white';
  const numberClass = 'bg-gray-700 hover:bg-gray-600 text-white';
  const functionClass = 'bg-gray-500 hover:bg-gray-400 text-white';

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
      <div className='w-64 bg-gray-800 rounded-lg overflow-hidden'>
        <div className='p-4 text-right text-4xl font-bold text-white h-24 flex items-end justify-end'>
          {display}
        </div>
        <div className='grid grid-cols-4'>
          <Button className={`${buttonClass} ${functionClass}`} onClick={handleClear}>
            AC
          </Button>
          <Button className={`${buttonClass} ${functionClass}`} onClick={handleToggleSign}>
            +/-
          </Button>
          <Button className={`${buttonClass} ${functionClass}`} onClick={handlePercent}>
            %
          </Button>
          <Button className={`${buttonClass} ${operatorClass}`} onClick={() => handleOperatorClick('÷')}>
            ÷
          </Button>
          {['7', '8', '9'].map((btn) => (
            <Button
              key={btn}
              className={`${buttonClass} ${numberClass}`}
              onClick={() => handleNumberClick(btn)}
            >
              {btn}
            </Button>
          ))}
          <Button className={`${buttonClass} ${operatorClass}`} onClick={() => handleOperatorClick('×')}>
            ×
          </Button>
          {['4', '5', '6'].map((btn) => (
            <Button
              key={btn}
              className={`${buttonClass} ${numberClass}`}
              onClick={() => handleNumberClick(btn)}
            >
              {btn}
            </Button>
          ))}
          <Button className={`${buttonClass} ${operatorClass}`} onClick={() => handleOperatorClick('-')}>
            -
          </Button>
          {['1', '2', '3'].map((btn) => (
            <Button
              key={btn}
              className={`${buttonClass} ${numberClass}`}
              onClick={() => handleNumberClick(btn)}
            >
              {btn}
            </Button>
          ))}
          <Button className={`${buttonClass} ${operatorClass}`} onClick={() => handleOperatorClick('+')}>
            +
          </Button>
          <Button className={`${buttonClass} ${numberClass} col-span-2`} onClick={() => handleNumberClick('0')}>
            0
          </Button>
          <Button className={`${buttonClass} ${numberClass}`} onClick={() => handleNumberClick('.')}
          >
            .
          </Button>
          <Button className={`${buttonClass} ${operatorClass}`} onClick={handleEqualClick}>
            =
          </Button>
        </div>
      </div>
      <div className='w-64 bg-gray-200 rounded-lg overflow-hidden mt-4'>
        <div className='p-2 text-right text-lg font-normal text-gray-800 h-48 overflow-y-auto'>
          {history.map((entry, index) => (
            <div key={index} className='mb-1'>
              {entry}
            </div>
          ))}
        </div>
        <Button className={`${buttonClass} ${functionClass} mt-2`} onClick={handleClearHistory}>
          Clear History
        </Button>
      </div>
    </div>
  );
}
