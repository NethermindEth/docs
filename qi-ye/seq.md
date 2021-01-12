---
description: Nethermind 使用 Grafana 或 Seq 等便捷工具，帮助客户监控其以太坊节点。
---

# Seq

[Seq](https://datalust.co/seq) 可以帮助您快速识别和诊断 Nethermind 节点的问题。您可以设置可视化面板来监控节点的行为，并在出现严重错误时发送警报。在 NLog 日志记录的帮助下，应用程序日志会被发送至一个 Seq 实例，从而实现监控。您只需编写 SQL 查询即可轻松搜索事件。

您可以委托我们对您的节点进行监视并提供支持，也可以自行配置可视化面板和 Seq 工具。通过 Seq 可视化面板和报警系统，Nethermind 团队可以快速解决任何生产问题和停机故障。

## 可视化面板和报警系统

Seq 可以通过简单的图表将事件数据可视化。一旦节点出现问题，在向 Nethermind 团队发送警报的过程中，这些图表将发挥重要作用。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-dashboard1.png)

根据设置，如果验证节点停止打包区块的时间达到规定时长，就会触发警报。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-alerts.png)

警报会发送到我们在 SMTP 服务器上的 [OpsGenie](https://www.atlassian.com/software/opsgenie) 实例上 。有很多应用可以用来配置 SMTP 服务器。这些应用都是插件，用来处理事件和警报，或通过外部来源获取事件。其中很多应用由社区创建并提供。在本例中，我们使用的是 Datalust and Contributors 提供的 `Email +`2.0.92。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-email.png)

当 OpsGenie 收到警报时，我们的应急小组会收到电话通知。

![](https://nethermind.readthedocs.io/en/latest/_images/opsgenie.png)

我们还可以查看 HTML 格式的警报，只需在 Seq 中进行配置。

![](https://nethermind.readthedocs.io/en/latest/_images/alert-message.png)

## 日志

借助结构化日志记录功能，我们可以快速检查事件的来源。这一功能在诊断以太坊节点问题方面非常有用，可以让我们在一秒内验证错误的来源。我们也可以轻而易举地创建一些可以重复使用的过滤器和查询器。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-logs.png)

## SQL 查询

目前最受欢迎的数据库查询语言 SQL 可用来查询应用日志。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-sql.png)

