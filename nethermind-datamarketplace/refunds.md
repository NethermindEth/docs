# Refunds

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left">Provider</th>
      <th style="text-align:left">Consumer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><b>all units are consumed</b>
          </li>
          <li><b>early refund</b>
          </li>
        </ul>
      </td>
      <td style="text-align:left"><b>&#x2714;</b>
      </td>
      <td style="text-align:left">-</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><b>some units are consumed</b>
          </li>
          <li><b>early refund</b>
          </li>
        </ul>
      </td>
      <td style="text-align:left">Provider gets money for used units</td>
      <td style="text-align:left">Consumer gets money for unused units</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><b>no units are consumed</b>
          </li>
          <li><b>early refund</b>
          </li>
        </ul>
      </td>
      <td style="text-align:left">-</td>
      <td style="text-align:left">
        <p><b>&#x2714;<br /></b>The money will be transferred</p>
        <p>to the consumer&apos;s account after</p>
        <p>the deposit expires - like in a regular refund</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><b>all units are consumed</b>
          </li>
          <li><b>refund</b>
          </li>
        </ul>
      </td>
      <td style="text-align:left"><b>&#x2714;</b>
      </td>
      <td style="text-align:left">-</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><b>some units are consumed</b>
          </li>
          <li><b>refund</b>
          </li>
        </ul>
      </td>
      <td style="text-align:left">Provider gets money for used units</td>
      <td style="text-align:left">Consumer gets money for unused units</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <ul>
          <li><b>no units are consumed</b>
          </li>
          <li><b>refund</b>
          </li>
        </ul>
      </td>
      <td style="text-align:left">-</td>
      <td style="text-align:left"><b>&#x2714;</b>
      </td>
    </tr>
  </tbody>
</table>



* Remember to set right **thresholds** as a provider to send payment claims correctly.
* Remember, before consumer make a refund, provider had **1 day** to make a possible payment claim. To make sure that the consumer will not make a refund before provider payment claims transaction.
* In time **units** we recommended setting **upfront payment** \(as a provider while you create data assets\).

