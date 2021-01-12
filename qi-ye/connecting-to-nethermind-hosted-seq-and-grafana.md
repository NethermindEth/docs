# 连接到托管在 Nethermind 上的 Seq 和 Grafana

请联系 Nethermind 团队——您将收到以下内容，同时请将您的 Grafana Labs 登录名发送给我们：

（1）seq 主机

（2）seq API 密钥

（3）Prometheus URL

在 cfg 文件中，请编辑：

`"Metrics": {    
"NodeName": "[为您的节点选择一个名称]",    
"Enabled": true,    
"PushGatewayUrl": "[PrometheusURL]",    
"IntervalSeconds": 30 },`

在 NLog.config 文件中，请编辑：

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

