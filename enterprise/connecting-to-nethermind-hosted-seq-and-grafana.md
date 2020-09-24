# Connecting to Nethermind hosted Seq and Grafana

Get in touch with the Nethermind team - you will receive and Send us your Grafana Labs login:

\(1\) seq host

\(2\) seq API key

\(3\) Prometheus URL

In the cfg file edit:

 `"Metrics": {  
  "NodeName": "[chooseNameForYourNode]",  
  "Enabled": true,  
  "PushGatewayUrl": "[PrometheusURL]",  
  "IntervalSeconds": 30 },`

In the NLog.config file edit:

```text
 <target xsi:type="BufferingWrapper" name="seq" bufferSize="1000" flushTimeout="2000">
   <target xsi:type="Seq" serverUrl="[seqURL]" apiKey="[seqAPIkey]">
     <property name="ThreadId" value="${threadid}" as="number" />
     <property name="MachineName" value="${machinename}" />
     <property name="Logger" value="${logger}" />
     <property name="Exception" value="${exception}" />
     <property name="Enode" value="${gdc:item=enode}" />
     <property name="Chain" value="${gdc:item=chain}" />
     <property name="ChainID" value="${gdc:item=chainId}" />
     <property name="Engine" value="${gdc:item=engine}" />
     <property name="NodeName" value="${gdc:item=nodeName}" />
</target>

(...)

<logger name="*" minlevel="Info" writeTo="seq" />
```



