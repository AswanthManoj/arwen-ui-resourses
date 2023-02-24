//import React, {useEffect} from 'react';
import React from 'react';
import './Charts.css';
//import createCryptoChart from './createCryptoChart';
import { theme } from '../Theme';

const lightModeColor = theme("light")
const darkModeColor = theme("dark")

/*
export function LightChart(props) {
  const {symbol, interval } = props;

  useEffect(() => {
     createCryptoChart(  
        symbol, 
        interval, 
        "lightchart",
        '#e0e0e000',
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        '#5c5c5c',
        '1',
        '#009087',
        '#1fb2a8c1', 
        '#18353300',
        '#aeaec0ff',
        '#5c5c5c',
        '#aeaec0ff',
        '#5c5c5c'
      );
  });

  return (
    <div>
      <div id="lightchart" style={{ position: 'relative' , height: '400px', width: '100%'}}></div>
    </div>
  );
}
*/
/*
function DarkChart(props) {
  const { symbol, interval } = props;
  const chartContainerRef = useRef();
  
  useEffect(() => {
    let chart;
    if (chartContainerRef.current) {
      chart = createCryptoChart(  
        symbol, 
        interval, 
        chartContainerRef.current,
        '#0b161400',
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        '#aeaec0ae',
        '1',
        '#1fb2a8c1',
        '#1fb2a8c1', 
        '#18353300',
        '#63b5af50',
        '#273c38',
        '#63b5af50',
        '#273c38'
      );
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    }
  }, [symbol, interval]);

  return (
    <div>
      <div id={`${symbol}-${interval}`} style={{ height: '400px', width: '600px'}} ref={chartContainerRef}></div>
    </div>
  );
}

export function Chart1(props) {
  const {symbol, interval, theme } = props;

  if (theme === 'light') {
    return <LightChart symbol={symbol} interval={interval} />;
  } else {
    return <DarkChart symbol={symbol} interval={interval} />;
  }
}
*/

/*



function LightChart(props) {
  const { symbol, interval } = props;
  const chartContainerRef = useRef();

  useEffect(() => {
    if (chartContainerRef.current) {
    const chart = createCryptoChart(  
        {symbol}, 
        {interval}, 
        chartContainerRef.current.id,
        '#e0e0e000',
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        '#5c5c5c',
        '1',
        '#009087',
        '#1fb2a8c1', 
        '#18353300',
        '#aeaec0ff',
        '#5c5c5c',
        '#aeaec0ff',
        '#5c5c5c'
      );
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    }
  }, [symbol, interval]);

  return (
    <div>
      <div id={`${symbol}-${interval}`} style={{ position: 'relative' , height: '400px', width: '100%'}} ref={chartContainerRef}></div>
    </div>
  );
}*/

/*
export function Chart1(props){
  const { symbol, interval } = props;
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Access the DOM element after the component has mounted
    createCryptoChart(  
      {symbol}, 
      {interval}, 
      chartContainerRef.current.id,
      '#e0e0e000',
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      '#5c5c5c',
      '1',
      '#009087',
      '#1fb2a8c1', 
      '#18353300',
      '#aeaec0ff',
      '#5c5c5c',
      '#aeaec0ff',
      '#5c5c5c'
    );
    //chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    //codeContainer.innerHTML = "This is the code component!";
  }, );

  return (
    <div ref={chartContainerRef} style={{ position: 'relative' , height: '400px', width: '100%'}}></div>
  );
};
*/

export function Chart2(props) {
    const { percent, height, theme } = props;
    if (theme === "light")
        return (
          <div className='chart2-light-container'>
            <div className="chart2-light" style={{background: lightModeColor, height: height}}>
              <div className="chart2-light-inner" style={{height: percent+'%'}}></div>
            </div>
            {percent}%
          </div>
        );
    else
        return (
          <div className='chart2-dark-container'>
            <div className="chart2-dark" style={{background: darkModeColor, height: height}}>
              <div className="chart2-dark-inner" style={{height: percent+'%'}}></div>
            </div>
            {percent}%
          </div>
        );
}