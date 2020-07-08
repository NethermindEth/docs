---
description: Nethermind使用便捷的工具（例如Grafana或Seq）监控其以太坊节点，为客户提供支持
---

# Seq

[Seq](https://datalust.co/seq) ，让您快速识别和诊断Nethermind节点的问题。可设置仪表板来监视节点的行为，并在发生严重错误时发送警报。借助NLog日志记录，将应用程序日志发送到Seq实例以启用监视。您只需编写SQL查询即可轻松搜索事件

客户可以将对节点的监视和支持委托给我们，或者配置自己的仪表板和Seq工具。 Nethermind团队可以使用Seq仪表板和警报来快速解决任何生产问题和停机。

## 仪表板和警报

Seq让我们能够使用简单的图表可视化事件数据。当节点发生问题时，这些图表提醒团队确实很有用。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-dashboard1.png)

警报设置为，在指定的测量窗口中验证节点停止密封块，时触发。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-alerts.png)

警报将通过其中一种应用程序配置的SMTP服务器发送到我们的[OpsGenie](https://www.atlassian.com/software/opsgenie) 实例. 应用程序是处理事件和警报或从外部来源获取事件的插件。其中有许多是由社区创建和提供的。在我们的示例中，我们使用由Datalust和Contributors提供的`Email +`2.0.92。

![](https://nethermind.readthedocs.io/en/latest/_images/seq-email.png)

警报到达OpsGenie时，电话通知将发送给我们的待命团队。

![](https://nethermind.readthedocs.io/en/latest/_images/opsgenie.png)

我们还可以使用HTML格式查看警报（在Seq中对其进行配置）。

![](https://nethermind.readthedocs.io/en/latest/_images/alert-message.png)

## 日志

借助结构化日志功能，我们可以快速检查事件的来源。在诊断以太坊节点问题时非常有用，我们可以在一秒钟内验证错误的来源。创建一些可重复使用的便捷过滤器和查询非常容易

![](https://nethermind.readthedocs.io/en/latest/_images/seq-logs.png)

## SQL查询

查询应用程序日志可用最受欢迎的数据库查询语言

![](https://nethermind.readthedocs.io/en/latest/_images/seq-sql.png)

