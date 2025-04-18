import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && amount) {
      setSubmitted(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header" style={{ justifyContent: 'flex-start', paddingTop: '30px' }}>
        <p>This is react application.</p>

        <table style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ padding: '8px', borderRadius: '5px', width: '180px' }}
                />
              </td>
              <td style={tableCellStyle}>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ padding: '8px', borderRadius: '5px', width: '180px' }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', paddingTop: '15px' }}>
                <button
                  onClick={handleSubmit}
                  style={{ padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </header>
    </div>
  );
}

const tableHeaderStyle = {
  border: '1px solid white',
  padding: '10px',
};

const tableCellStyle = {
  border: '1px solid white',
  padding: '10px',
};

export default App;
