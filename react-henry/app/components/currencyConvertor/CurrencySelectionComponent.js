import React , { useContext } from 'react'
import { CurrencyContext } from './CurrencyProvider';



function CurrencySelectionComponent({handleFromCurrency, handleToCurrency, handleCurrencyInput, input}) {
  const {currencies} = useContext(CurrencyContext)
  return (
    <div class="currency-box" >
      <h2>Select Currency you wish to convert</h2>
      <table className='selectionTable'>
        <tbody className="input-box">
            <tr className='user-input'>
            <td>
              <input type="text"  value={input} onChange={handleCurrencyInput} />
            </td>
              
            </tr>
              <tr className='user-input'>
                <td>
                  <label htmlFor="fromCurrency">Select the currency to convert from</label>
                  <select onChange={handleFromCurrency} id="fromCurrency" name="fromCurrency">
                    {currencies.map(currency => (
                      <option key={currency.id} value={currency.code}>{currency.name}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr className='user-input'>
                <td>
                  <label htmlFor="toCurrency">Select the currency to convert to</label>
                  <br />
                  <select onChange={handleToCurrency} id="toCurrency" name="toCurrency">
                    {currencies.map(currency => (
                      <option key={currency.id} value={currency.code}>{currency.name}</option>
                    ))}
                  </select>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CurrencySelectionComponent