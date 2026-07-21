---
title: logindex namespace
sidebar_label: logindex
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### logIndex_blockNumbers

Retrieves log index block number for the given filter.

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: _object_
    - `address`: array of _object_
      - `value`: _string_ (address)
    - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of array of _string_ (hash)
    - `useIndex`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "logIndex_blockNumbers",
      "params": [filter]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: array of _string_ (hex integer)

</TabItem>
</Tabs>

### logIndex_status

Retrieves log index status.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "logIndex_status",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: _object_
  - `current`: _object_
    - `fromBlock`: _string_ (hex integer)
    - `toBlock`: _string_ (hex integer)
  - `dbSize`: _string_
  - `isRunning`: _boolean_
  - `lastError`: _string_
  - `lastUpdate`: _object_
    - `hasValue`: _boolean_
    - `value`: _object_
      - `date`: _object_
        - `date`: _object_
          <!--[circular ref]-->
        - `day`: _string_ (hex integer)
        - `dayOfWeek`: _integer_
        - `dayOfYear`: _string_ (hex integer)
        - `hour`: _string_ (hex integer)
        - `kind`: _integer_
        - `microsecond`: _string_ (hex integer)
        - `millisecond`: _string_ (hex integer)
        - `minute`: _string_ (hex integer)
        - `month`: _string_ (hex integer)
        - `nanosecond`: _string_ (hex integer)
        - `second`: _string_ (hex integer)
        - `ticks`: _string_ (hex integer)
        - `timeOfDay`: _object_
          - `days`: _string_ (hex integer)
          - `hours`: _string_ (hex integer)
          - `microseconds`: _string_ (hex integer)
          - `milliseconds`: _string_ (hex integer)
          - `minutes`: _string_ (hex integer)
          - `nanoseconds`: _string_ (hex integer)
          - `seconds`: _string_ (hex integer)
          - `ticks`: _string_ (hex integer)
          - `totalDays`: _object_
          - `totalHours`: _object_
          - `totalMicroseconds`: _object_
          - `totalMilliseconds`: _object_
          - `totalMinutes`: _object_
          - `totalNanoseconds`: _object_
          - `totalSeconds`: _object_
        - `year`: _string_ (hex integer)
      - `dateTime`: _object_
        - `date`: _object_
          <!--[circular ref]-->
        - `day`: _string_ (hex integer)
        - `dayOfWeek`: _integer_
        - `dayOfYear`: _string_ (hex integer)
        - `hour`: _string_ (hex integer)
        - `kind`: _integer_
        - `microsecond`: _string_ (hex integer)
        - `millisecond`: _string_ (hex integer)
        - `minute`: _string_ (hex integer)
        - `month`: _string_ (hex integer)
        - `nanosecond`: _string_ (hex integer)
        - `second`: _string_ (hex integer)
        - `ticks`: _string_ (hex integer)
        - `timeOfDay`: _object_
          - `days`: _string_ (hex integer)
          - `hours`: _string_ (hex integer)
          - `microseconds`: _string_ (hex integer)
          - `milliseconds`: _string_ (hex integer)
          - `minutes`: _string_ (hex integer)
          - `nanoseconds`: _string_ (hex integer)
          - `seconds`: _string_ (hex integer)
          - `ticks`: _string_ (hex integer)
          - `totalDays`: _object_
          - `totalHours`: _object_
          - `totalMicroseconds`: _object_
          - `totalMilliseconds`: _object_
          - `totalMinutes`: _object_
          - `totalNanoseconds`: _object_
          - `totalSeconds`: _object_
        - `year`: _string_ (hex integer)
      - `day`: _string_ (hex integer)
      - `dayOfWeek`: _integer_
      - `dayOfYear`: _string_ (hex integer)
      - `hour`: _string_ (hex integer)
      - `localDateTime`: _object_
        - `date`: _object_
          <!--[circular ref]-->
        - `day`: _string_ (hex integer)
        - `dayOfWeek`: _integer_
        - `dayOfYear`: _string_ (hex integer)
        - `hour`: _string_ (hex integer)
        - `kind`: _integer_
        - `microsecond`: _string_ (hex integer)
        - `millisecond`: _string_ (hex integer)
        - `minute`: _string_ (hex integer)
        - `month`: _string_ (hex integer)
        - `nanosecond`: _string_ (hex integer)
        - `second`: _string_ (hex integer)
        - `ticks`: _string_ (hex integer)
        - `timeOfDay`: _object_
          - `days`: _string_ (hex integer)
          - `hours`: _string_ (hex integer)
          - `microseconds`: _string_ (hex integer)
          - `milliseconds`: _string_ (hex integer)
          - `minutes`: _string_ (hex integer)
          - `nanoseconds`: _string_ (hex integer)
          - `seconds`: _string_ (hex integer)
          - `ticks`: _string_ (hex integer)
          - `totalDays`: _object_
          - `totalHours`: _object_
          - `totalMicroseconds`: _object_
          - `totalMilliseconds`: _object_
          - `totalMinutes`: _object_
          - `totalNanoseconds`: _object_
          - `totalSeconds`: _object_
        - `year`: _string_ (hex integer)
      - `microsecond`: _string_ (hex integer)
      - `millisecond`: _string_ (hex integer)
      - `minute`: _string_ (hex integer)
      - `month`: _string_ (hex integer)
      - `nanosecond`: _string_ (hex integer)
      - `offset`: _object_
        - `days`: _string_ (hex integer)
        - `hours`: _string_ (hex integer)
        - `microseconds`: _string_ (hex integer)
        - `milliseconds`: _string_ (hex integer)
        - `minutes`: _string_ (hex integer)
        - `nanoseconds`: _string_ (hex integer)
        - `seconds`: _string_ (hex integer)
        - `ticks`: _string_ (hex integer)
        - `totalDays`: _object_
        - `totalHours`: _object_
        - `totalMicroseconds`: _object_
        - `totalMilliseconds`: _object_
        - `totalMinutes`: _object_
        - `totalNanoseconds`: _object_
        - `totalSeconds`: _object_
      - `second`: _string_ (hex integer)
      - `ticks`: _string_ (hex integer)
      - `timeOfDay`: _object_
        - `days`: _string_ (hex integer)
        - `hours`: _string_ (hex integer)
        - `microseconds`: _string_ (hex integer)
        - `milliseconds`: _string_ (hex integer)
        - `minutes`: _string_ (hex integer)
        - `nanoseconds`: _string_ (hex integer)
        - `seconds`: _string_ (hex integer)
        - `ticks`: _string_ (hex integer)
        - `totalDays`: _object_
        - `totalHours`: _object_
        - `totalMicroseconds`: _object_
        - `totalMilliseconds`: _object_
        - `totalMinutes`: _object_
        - `totalNanoseconds`: _object_
        - `totalSeconds`: _object_
      - `totalOffsetMinutes`: _string_ (hex integer)
      - `utcDateTime`: _object_
        - `date`: _object_
          <!--[circular ref]-->
        - `day`: _string_ (hex integer)
        - `dayOfWeek`: _integer_
        - `dayOfYear`: _string_ (hex integer)
        - `hour`: _string_ (hex integer)
        - `kind`: _integer_
        - `microsecond`: _string_ (hex integer)
        - `millisecond`: _string_ (hex integer)
        - `minute`: _string_ (hex integer)
        - `month`: _string_ (hex integer)
        - `nanosecond`: _string_ (hex integer)
        - `second`: _string_ (hex integer)
        - `ticks`: _string_ (hex integer)
        - `timeOfDay`: _object_
          - `days`: _string_ (hex integer)
          - `hours`: _string_ (hex integer)
          - `microseconds`: _string_ (hex integer)
          - `milliseconds`: _string_ (hex integer)
          - `minutes`: _string_ (hex integer)
          - `nanoseconds`: _string_ (hex integer)
          - `seconds`: _string_ (hex integer)
          - `ticks`: _string_ (hex integer)
          - `totalDays`: _object_
          - `totalHours`: _object_
          - `totalMicroseconds`: _object_
          - `totalMilliseconds`: _object_
          - `totalMinutes`: _object_
          - `totalNanoseconds`: _object_
          - `totalSeconds`: _object_
        - `year`: _string_ (hex integer)
      - `utcTicks`: _string_ (hex integer)
      - `year`: _string_ (hex integer)
  - `target`: _object_
    - `fromBlock`: _string_ (hex integer)
    - `toBlock`: _string_ (hex integer)

</TabItem>
</Tabs>

