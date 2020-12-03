# 连接到Nethermind托管的Seq和Grafana

与Nethermind团队联系-您将收到并发送给我们您的Grafana Labs登录名：

\(1\) seq host

\(2\) seq API key

\(3\) Prometheus URL

在cfg文件中，编辑：

`"Metrics": {    
"NodeName": "[chooseNameForYourNode]",    
"Enabled": true,    
"PushGatewayUrl": "[PrometheusURL]",    
"IntervalSeconds": 30 },`

在NLog.config文件中，编辑：

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

