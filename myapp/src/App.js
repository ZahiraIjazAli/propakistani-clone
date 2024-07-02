import React from 'react'
import './App.css'
import Nav from './assets/Nav'
import Img from './assets/img'
import Img2 from './assets/img2'
function App() {
  return (
    <div>
       
      <div className='container'>
      <Nav />
        <h1 className='heading'>Here’s Why Some Cars Are Getting a Massive Drop in Prices</h1>
        <h5 >By Sher Alam | Published May 4, 2024 | 11:41 am</h5>
        <Img />
        <p >
          Over the past few days, the automotive landscape in Pakistan has witnessed a surprising turn of events, with several car manufacturers announcing substantial price reductions for their vehicles.</p><br />
        <p >
          The trend began with Kia announcing a whopping reduction of over Rs. 15 lac for its Stonic model, followed by Peugeot 2008 with a Rs. 4.5 lac decrease, and Suzuki Swift with a notable Rs. 7.1 lac drop. Such drastic price reductions are rare in Pakistan’s automotive industry, prompting questions about the underlying reasons.</p>
        <h1 className='heading'>Economist Reveals Reason Behind the Price Drops</h1>
         <p >Renowned economist Ali Khizer shed light on this new trend, offering insights into the factors influencing the recent price adjustments. Notably, the revised prices reflect significant reductions, with Stonic’s price slashed by 24%, Swift’s by 13%, and Yaris 1.3 CVT and City CVT by 3% each.</p>
        <Img2></Img2>
        <h1 className='heading'>Impact of New GST Regulations</h1><br/>
         <p >One of the key drivers behind the recent price reductions is the implementation of revised Goods and Services Tax (GST) regulations. Khizer highlights that the new price range for cars now falls between Rs. 4.69 million and Rs. 4.77 million, down from the previous range of Rs. 4.83 million to Rs. 6.28 million. This notable revision underscores the profound impact of the 25% GST on cars</p><br/>
        <h1 className='heading'>Ex-GST Prices and Regulatory Changes</h1><br/>
         <p >Khizer elucidated the regulatory changes that have precipitated the recent price adjustments. In March 2023, the government raised the GST on cars with engine capacities of 1400cc and above to 25%, up from the previous 18%. While most cars remained unaffected, Stonic bore the brunt of this decision, with a significant price increase.</p><br/>
        <h1 className='heading'>Strategic Moves by Automakers</h1>
        <p >However, in March 2024, the government introduced further changes, imposing a 25% GST on all cars with ex-GST prices exceeding Rs. 4 million. In response, Toyota and Honda swiftly reduced their car prices, ensuring that their variants remained below the Rs. 4 million threshold to mitigate the impact of the new tax. Following suit, Kia and Suzuki strategically reduced the prices of Stonic and Swift, respectively, to align with the revised GST regulations</p><br/>
         <h1 className='heading'>Implications for Consumers and Market Competition</h1><br/>
         <p >While regulatory changes primarily drive the motive behind the price reductions, consumers stand to benefit from the more affordable pricing of these vehicles. Moreover, the competitive landscape in the automotive market is poised for further evolution, with speculation rife about potential price adjustments from Toyota and Honda to remain competitive with Suzuki and Kia.</p>
      </div>

    </div>
  )
}

export default App