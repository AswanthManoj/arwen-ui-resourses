import { createChart } from 'lightweight-charts';

export default function CreateCryptoChart(symbol, interval, containerId, chartBackgroundColor,fontFamily, textColor, lineWidth, lineColor, topColor, bottomColor, vcrosshairColor, vcrosshairBgColor, hcrosshairColor, hcrosshairBgcolor) {

    //var lineSeriesData = {};

    //document.getElementById(containerId+'-info').innerText = symbol+'/'+interval;

    return fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`)
      .then(response => response.json())
      .then(data => {
        const candles = data.map(candle => {
          return {
            value: parseFloat(candle[4]),
            time: candle[0] / 1000,
          };
        });

        //document.getElementById(containerId+'-price').innerText = candles[candles.length-1].value
        
        const chart = createChart(
          document.getElementById(containerId), 
          {    
            layout: { 
              background: { color: chartBackgroundColor },
              textColor: textColor,
            },
            grid: { 
              vertLines: { color: '#00000000' },
              horzLines: { color: '#00000000' },
            }, 
            textColor: textColor,
          }
        ); 
            
        const areaSeries = chart.addAreaSeries({
          lineWidth: lineWidth, 
          lineColor: lineColor, 
          topColor: topColor, 
          bottomColor: bottomColor,
          lineType: 2
        });
                          
        // Customizing the Crosshair
        chart.applyOptions({
          crosshair: {
  
            // Vertical crosshair line (showing Date in Label)
            vertLine: {
              width: 1,
              color: vcrosshairColor,
              labelBackgroundColor: vcrosshairBgColor,
            },
  
            // Horizontal crosshair line (showing Price in Label)
            horzLine: {
              width: 1,
              color: hcrosshairColor,
              labelBackgroundColor: hcrosshairBgcolor,
            },
          },
          // Changing the font
          layout: {
            fontFamily: fontFamily,
          },
        });
        
        areaSeries.setData(candles);
        chart.timeScale().fitContent();
        
        const binanceSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`);
        
        binanceSocket.onmessage = function (event) {
          const message = JSON.parse(event.data);
          const candle = message.k;
          const time = candle.t / 1000;
          const close = parseFloat(candle.c);
  
          const lastData = candles[candles.length - 1];
          const lastTime = lastData.time;
  
          if (time > lastTime) {
            candles.push({ value: close, time: time });
            areaSeries.update({ value: close, time: time });
          }
        };
        
        return chart;
      })
      .catch(error => console.error(error));
}