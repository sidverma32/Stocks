A demo application built in React.

Deployed here: https://sidverma32.github.io/stocks

(If you are somehow not able to allow loading unsafe scripts from your browser(Especially on mobile phones), open this link instead: http://stocksdemo.herokuapp.com)

What it does: Show real time stock market data in the form of table and graphs

Subscribes to a Websocket(ws://stocks.mnet.website/) to fetch simulated stock market data.

Features:
  - A table showing data for all the stocks
  - Each row shows:
    - The latest stock price. (With color relative to the previous stock value)
    - A sparkline showing the changes in stock values (Without considering the time factor)
    - When was the specific stock last updated
    - Updated date user friendly and readable
  - Market Trend arrow indicating how stock values behaved
  - Ability to select any stocks, to be shown in the Graph
  - Graphs can show historical values wrt time for any stocks selected
  - Additional behaviour for user to change the view i.e. show and hide the graph
  - Can zoom/pan over graph, Reset the zoom
  - Export the data of a particular stock in csv file format
  - Clear history of all stocks with the click of a button
  - Handles connection errors
  - Compatible to various screen sizes
  - Material UI used for better user interactions
  
