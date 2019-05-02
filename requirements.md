
- Show live stock prices in the form of table/graphs.
- data is coming from a websocket (ws://stocks.mnet.website)
  - format: [ [ name, price], [ name, price] … ]

- data in table/graphs should be updated as we recieve it from the websocket

- A simple table:
  - each row will have
    - stock_name
    - latest price (can color it relative to the previous value)
        - if the price is lower than prev,change background-color to red
        - if the price is rising,change the background-color to green
        - else remain the same i.e white
    - a sparkline graph for each row
    - when was the data for this stock last updated time?
  - a way to select stocks by clicking on them

- A Graph:
  - Can show a line graph for each stock
  - x: time, y: stock_value
  - use a nice library for graphs
  - show graphs for only selected stocks
