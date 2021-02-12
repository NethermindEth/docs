# Deposit expiry

At NDM we have two types of deposit expiry: 

* Unit deposit expiry
* Time deposit expiry

The difference between them is when they occur during the deposit and when does the provider is able to claim payment for consumed units.   
The table below shows differences for 24 hours expiry date in unit and time type deposits.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Unit type</th>
      <th style="text-align:left">What does the provider set for the expiration date?</th>
      <th style="text-align:left">What is on deposit?</th>
      <th style="text-align:left">How does the provider verify the correctness of the deposit?</th>
      <th style="text-align:left">When does the provider stop serving data?</th>
      <th style="text-align:left">When does the provider claim the last payments?</th>
      <th style="text-align:left">When is the consumer eligible for a refund?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Unit</td>
      <td style="text-align:left">24 hours</td>
      <td style="text-align:left">24 hours from the deposit time</td>
      <td style="text-align:left">Is the expiration time at least 24 hours from the deposit timestamp</td>
      <td
      style="text-align:left">24 hours after deposit timestamp</td>
        <td style="text-align:left">Just before 24 hours after the deposit timestamp</td>
        <td style="text-align:left">After 24 hours from the deposit timestamp</td>
    </tr>
    <tr>
      <td style="text-align:left">Time</td>
      <td style="text-align:left">24 hours</td>
      <td style="text-align:left">
        <p>Deposit time + (unit price * 1 second)</p>
        <p>+ 24 hours</p>
      </td>
      <td style="text-align:left">The expiration date should be more than deposit time + (data units * 1s)
        + 24h</td>
      <td style="text-align:left">Deposit time + data units * 1s (note, that 24h is not added here)</td>
      <td
      style="text-align:left">Deposit time + data units * 1s (note, that 24h is not added here)</td>
        <td
        style="text-align:left">Deposit time
          <br />+ (data units * 1s)
          <br />+ 24h</td>
    </tr>
  </tbody>
</table>



